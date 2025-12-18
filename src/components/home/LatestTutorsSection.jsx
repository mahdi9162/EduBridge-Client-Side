import React from 'react';
import Container from '../Container/Container';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../services/axiosInstance';
import { Link } from 'react-router';

const LatestTutorsSection = () => {
  const { data } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axiosInstance.get('/public/tutors');
      return res.data;
    },
  });

  const tutors = Array.isArray(data) ? data : [];

  const getInitials = (name = '') => {
    const parts = name.trim().split(' ').filter(Boolean);
    const first = parts[0]?.[0] || 'T';
    const second = parts[1]?.[0] || '';
    return (first + second).toUpperCase();
  };

  return (
    <Container>
      {/*fade up */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-10 lg:my-16 rounded-3xl bg-base-200/70 px-4 py-10 md:px-10 md:py-12 lg:px-14"
      >
        {/* header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-base-content md:text-3xl">Latest Tutors</h2>
          <p className="mt-2 text-sm text-neutral md:text-base">Recently active tutors you can trust.</p>
        </div>

        {/* grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tutors.slice(0, 8).map((tutor) => {
            const name = tutor?.name || 'Tutor';
            const subject = tutor?.subject || 'Subject';
            const teachingClass = tutor?.teachingClass || 'Class';
            const location = tutor?.location || 'Location';

            return (
              <motion.div
                key={tutor?._id || name}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
              >
                {/* top */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-base-content">{name}</h3>
                    <p className="mt-1 text-sm text-neutral">{subject}</p>
                  </div>

                  {/* avatar */}
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-base-200 font-semibold text-base-content">
                    {getInitials(name)}
                  </div>
                </div>

                {/* meta */}
                <div className="mt-4 space-y-2 text-sm text-neutral">
                  <p>
                    <span className="font-medium text-base-content">Teaching:</span> {teachingClass}
                  </p>
                  <p>
                    <span className="font-medium text-base-content">Location:</span> {location}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  to="/tutors"
                  className="mt-5 inline-block w-full rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-primary-content hover:opacity-95 active:scale-[0.99] transition"
                >
                  View Tutors
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* bottom CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/tutors"
            className="inline-block rounded-xl border border-base-300 bg-base-100 px-5 py-2 text-sm font-semibold text-base-content hover:bg-base-200 transition"
          >
            See All Tuition Posts →
          </Link>
        </div>
      </motion.section>
    </Container>
  );
};

export default LatestTutorsSection;
