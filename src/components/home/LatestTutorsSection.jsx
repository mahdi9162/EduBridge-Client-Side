import React from 'react';
import Container from '../Container/Container';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../services/axiosInstance';
import { Link } from 'react-router';
import FullScreenLoader from '../Loading/FullScreenLoader';
import CommonButton from '../Buttons/CommonButton/CommonButton';
import Btn from '../Buttons/Btn/btn';

const LatestTutorsSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axiosInstance.get('/public/tutors');
      return res.data;
    },
  });

  if (isLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const tutors = Array.isArray(data) ? data : [];

  const getInitials = (name = '') => {
    const parts = name.trim().split(' ').filter(Boolean);
    const first = parts[0]?.[0] || 'T';
    const second = parts[1]?.[0] || '';
    return (first + second).toUpperCase(); 
  };

  //motion
  const sectionParent = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardIn = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};


  return (
    <Container>
  {/* fade up */}
  <motion.section
    variants={sectionParent}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.22 }}
    className="my-10 lg:my-16 overflow-hidden rounded-3xl px-4 md:px-10 py-10 relative
    border border-base-200/60 shadow-[0_10px_34px_rgba(15,26,51,0.05)] bg-[radial-gradient(circle_at_10%_15%,rgba(15,26,51,0.06),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f6f8ff_60%,#eef3fb_100%)]"
  >
    {/* subtle sheen */}
    <motion.div
      variants={fadeUp}
      className="pointer-events-none absolute inset-0 opacity-[0.30] bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(255,255,255,0.08),rgba(255,255,255,0.40))]"
    />

    {/* header */}
    <motion.div className="relative text-center" variants={fadeUp}>
      <p className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-4 py-1 text-xs font-semibold text-neutral backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-primary/70" />
        Recently Active
      </p>

      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-base-content md:text-3xl">Latest Tutors</h2>
      <p className="mt-2 text-sm text-neutral md:text-base">Recently active tutors you can trust.</p>
    </motion.div>

    {/* grid */}
    <motion.div className="relative mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4" variants={fadeUp}>
      {tutors.slice(0, 8).map((tutor) => {
        const name = tutor?.name || 'Tutor';
        const subject = tutor?.subject || 'Subject';
        const teachingClass = tutor?.teachingClass || 'Class';
        const location = tutor?.location || 'Location';
        const photoURL = tutor?.photoURL;

        return (
          <motion.div
            key={tutor?._id || name}
            variants={cardIn}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            className="
              group relative overflow-hidden rounded-2xl
              border border-base-200/60 bg-base-100/80
              p-5 shadow-[0_10px_30px_rgba(15,26,51,0.06)]
              backdrop-blur-md
              transition-all duration-500
              hover:shadow-[0_18px_45px_rgba(15,26,51,0.12)]
              hover:border-primary/20
            "
          >
            {/* hover glow */}
            <div
              className="
                pointer-events-none absolute -top-24 left-1/2 h-40 w-72 -translate-x-1/2
                rounded-full blur-3xl opacity-0 transition-opacity duration-200
                group-hover:opacity-100
                bg-[radial-gradient(circle,rgba(36,76,152,0.16),transparent_60%)]
              "
            />

            {/* top */}
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold text-base-content leading-snug truncate">{name.toUpperCase()}</h3>

                <p className="mt-1 inline-flex items-center gap-2 text-sm text-neutral">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  <span className="truncate">{subject}</span>
                </p>
              </div>

              {/* avatar */}
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full overflow-hidden bg-base-200/60 text-base-content font-semibold ring-1 ring-base-200 group-hover:ring-primary/20 transition"
                title={name}
              >
                {photoURL ? (
                  <img className="w-full h-full rounded-full object-cover" src={photoURL} alt="Profile Picture" />
                ) : (
                  getInitials(name)
                )}
              </div>
            </div>

            {/* meta pills */}
            <div className="relative mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-base-200/40 px-3 py-2">
                <span className="text-neutral">Teaching</span>
                <span className="font-semibold text-base-content">{teachingClass}</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-base-200/40 px-3 py-2">
                <span className="text-neutral">Location</span>
                <span className="font-semibold text-base-content">{location}</span>
              </div>
            </div>

            {/* CTA */}
            <CommonButton
              className="
                mt-4 inline-flex w-full items-center justify-center gap-2
                rounded-xl py-2.5 text-sm font-semibold
                transition-all duration-200
                group-hover:shadow-md
              "
            >
              <Link to="/tutors" className="inline-flex items-center gap-2">
                View Tutors
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </CommonButton>

            {/* bottom accent line */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full bg-primary/0 transition-all duration-200 group-hover:bg-primary/40" />
          </motion.div>
        );
      })}
    </motion.div>

    {/* bottom CTA */}
    <motion.div className="relative mt-10 flex justify-center" variants={fadeUp}>
      <Btn className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition">
        <Link to="/tutors" className="inline-flex items-center gap-2">
          See All Tutors
          <span className="transition-transform duration-200 hover:translate-x-0.5">→</span>
        </Link>
      </Btn>
    </motion.div>
  </motion.section>
</Container>
  );
};

export default LatestTutorsSection;
