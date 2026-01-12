import { Link, useNavigate } from 'react-router';
import Container from '../Container/Container';
import axiosInstance from '../../services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useRole from '../../hooks/useRole';
import FullScreenLoader from '../Loading/FullScreenLoader';
import CommonButton from '../Buttons/CommonButton/CommonButton';
import Btn from '../Buttons/Btn/btn';
import { motion } from 'framer-motion';
const LatestTuitionsSection = () => {
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();

  const { isLoading: tuitionsLoading, data: allTuitions = [] } = useQuery({
    queryKey: ['all-tuitions'],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get('/all-tuitions');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (roleLoading || tuitionsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const handleViewDetailsBtn = (id) => {
    if (role !== 'teacher' && role !== 'admin') {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'Only tutors & admin can view tuition details.',
        confirmButtonText: 'Okay',
      });

      return;
    }
    navigate(`/tuition-details/${id}`);
  };

  const approvedTuitions = allTuitions.filter((t) => t.postStatus === 'approved');

  // Motion
  const sectionWrap = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const cardParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const ctaWrap = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const glowA = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 0.6, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const glowB = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 0.5, scale: 1, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

  return (
<Container>
  <motion.section
    className="relative my-10 lg:my-16 overflow-hidden rounded-3xl px-4 md:px-10
    border border-base-200/60 shadow-[0_12px_40px_rgba(15,26,51,0.06)] bg-[radial-gradient(circle_at_15%_25%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(15,26,51,0.08),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_55%,#eef3fb_100%)]"
    variants={sectionWrap}
    initial="hidden"
    animate="visible" 
    viewport={{ once: true, amount: 0.25 }}
  >
    {/* glows */}
    <motion.div
      className="pointer-events-none absolute -top-28 left-10 right-10 h-64 w-64 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(36,76,152,0.22),transparent_62%)]"
      variants={glowA}
    />
    <motion.div
      className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle,rgba(15,26,51,0.18),transparent_65%)]"
      variants={glowB}
    />

    <div className="relative py-12 z-10">
      {/* Section Title */}
      <motion.div className="text-center mb-10" variants={fadeUp}>
        <p className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-4 py-1 text-xs font-semibold text-neutral backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          Fresh Listings
        </p>

        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-base-content">Latest Tuition Posts</h2>

        <p className="mt-2 text-xs md:text-base text-neutral">Recently posted tuition requests from students</p>
      </motion.div>

      {/* Cards */}
      <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={cardParent}>
        {approvedTuitions.map((tuition, i) => (
          <motion.div
            key={i}
            className="
              group relative overflow-hidden rounded-2xl
              border border-base-200/60 bg-base-100/80
              p-5 shadow-[0_10px_30px_rgba(15,26,51,0.06)]
              backdrop-blur-md
              transition-all duration-700
              hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,26,51,0.12)]
              hover:border-primary/15
            "
            variants={cardItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            animate="rest"
          >
            {/* top glow */}
            <div
              className="
                pointer-events-none absolute -top-24 left-1/2 h-40 w-72 -translate-x-1/2
                rounded-full blur-3xl opacity-0 transition-opacity duration-200
                group-hover:opacity-100
                bg-[radial-gradient(circle,rgba(36,76,152,0.16),transparent_60%)]
              "
            />

            <h3 className="relative font-bold text-[15px] text-base-content leading-snug line-clamp-1">
              {tuition.title.toUpperCase()}
            </h3>

            <div className="relative mt-3 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-base-200/40 px-3 py-2">
                <span className="text-neutral">Class</span>
                <span className="font-semibold text-base-content">{tuition.classLevel}</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-base-200/40 px-3 py-2">
                <span className="text-neutral">Location</span>
                <span className="font-semibold text-base-content">{tuition.location}</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-base-200/40 px-3 py-2">
                <span className="text-neutral">Budget</span>
                <span className="font-semibold text-base-content">৳ {tuition.budget} / month</span>
              </div>
            </div>

            <motion.div variants={fadeUp}>
              <CommonButton
                onClick={() => handleViewDetailsBtn(tuition._id)}
                className="
                mt-4 w-full rounded-xl py-2.5 text-sm font-semibold
                transition-all duration-200
                group-hover:shadow-md
              "
              >
                View Details
              </CommonButton>
            </motion.div>

            {/* bottom accent */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full bg-primary/0 transition-all duration-200 group-hover:bg-primary/40" />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div className="mt-10 text-center" variants={ctaWrap}>
        <Btn className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition group">
          <Link to="/tuitions" className="inline-flex items-center gap-2">
            See All Tuition Posts
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </Btn>

        <p className="mt-3 text-xs text-neutral">Browse all listings to find the perfect match.</p>
      </motion.div>
    </div>
  </motion.section>
</Container>
  );
};

export default LatestTuitionsSection;
