import React, { useRef, useState } from 'react';
import Container from '../../../components/Container/Container';
import { IoIosSearch } from 'react-icons/io';
import axiosInstance from '../../../services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import TutorDetailsModal from './TutorDetailsModal';
import tutorImg from '../../../assets/teacher.png';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { motion } from 'framer-motion';

const TutorsList = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const tutorDetailsRef = useRef();
  const axios = axiosInstance;

  const { data: tutors, isLoading: tutorsLoading } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axios.get('/public/tutors');
      return res.data;
    },
  });

  // motion

  const sectionParent = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 16, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const rowStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
  };

  const rowIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  if (tutorsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const openTutorDetailsModal = (tutor) => {
    setSelectedTutor(tutor);
    tutorDetailsRef.current?.showModal?.();
  };

  const filteredTutors = (tutors || []).filter((tutor) => (tutor?.subject || '').toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Container>
      <motion.section
        className="
      relative my-10 overflow-hidden
      rounded-3xl bg-base-200/35
      border border-base-200/60
      py-10
      shadow-[0_12px_40px_rgba(15,26,51,0.06)]
      backdrop-blur
    "
        variants={sectionParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div
          className="
        pointer-events-none absolute -top-28 left-1/2 h-56 w-[520px] -translate-x-1/2
        rounded-full blur-3xl opacity-70
        bg-[radial-gradient(circle,rgba(36,76,152,0.14),transparent_60%)]
      "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="
        pointer-events-none absolute -bottom-40 right-[-120px] h-72 w-72
        rounded-full blur-3xl opacity-50
        bg-[radial-gradient(circle,rgba(36,76,152,0.10),transparent_60%)]
      "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative mx-auto max-w-6xl px-3 sm:px-6">
          <motion.div
            className="
          rounded-2xl border border-base-200/70
          bg-base-100/75 backdrop-blur-md
          shadow-[0_10px_30px_rgba(15,26,51,0.06)]
          p-5 sm:p-6
        "
            variants={cardIn}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/80 px-4 py-1 text-xs font-semibold text-neutral">
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                  Tutor Directory
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-base-content">Tutors</h2>
                <p className="mt-1 text-sm text-neutral">Browse available tutors and view their profiles.</p>
              </div>

              <div className="relative w-full sm:w-80 h-12">
                <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral/70 z-10 pointer-events-none" />

                <input
                  id="search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="
                peer w-full h-12 rounded-xl
                bg-base-100/90
                border border-base-200
                pl-10 pr-4 text-sm text-base-content
                outline-none transition
                focus:border-primary/40
                focus:shadow-[0_12px_28px_rgba(15,26,51,0.10)]
              "
                />

                <label
                  htmlFor="search"
                  className="
                absolute left-9 top-1/2 -translate-y-1/2
                px-2 text-sm text-neutral
                bg-base-100/95
                transition-all duration-150
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary
              "
                >
                  Search by Subject
                </label>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="
          mt-6 overflow-hidden rounded-2xl
          border border-base-200/70
          bg-base-100/80 backdrop-blur-md
          shadow-[0_10px_30px_rgba(15,26,51,0.06)]
        "
            variants={fadeUp}
          >
            <div className="hidden lg:grid grid-cols-12 px-5 py-3 bg-base-200/45 border-b border-base-200 text-xs font-bold text-base-content">
              <div className="col-span-5">Tutor</div>
              <div className="col-span-2 text-center">Subject</div>
              <div className="col-span-2 text-center">Teaching Class</div>
              <div className="col-span-2 text-center">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {filteredTutors.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-base-content font-semibold">No tutors found</p>
                <p className="mt-1 text-sm text-neutral">Try a different subject keyword.</p>
                {searchValue && (
                  <p className="mt-2 text-xs text-neutral">
                    You searched for: <span className="font-semibold text-base-content">“{searchValue}”</span>
                  </p>
                )}
              </div>
            )}

            <motion.div variants={rowStagger} initial="hidden" animate="visible">
              {filteredTutors?.map((tutor, i) => (
                <motion.div
                  key={i}
                  className="
              group border-b border-base-200/70
              transition
              hover:bg-base-200/20
            "
                  variants={rowIn}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-0 px-4 sm:px-5 py-4">
                    <div className="lg:col-span-5 flex items-center gap-3">
                      <div
                        className="
                    w-11 h-11 rounded-full overflow-hidden
                    ring-1 ring-base-200
                    bg-base-200/40
                    group-hover:ring-primary/20 transition
                  "
                      >
                        <img src={tutor?.photoURL || tutorImg} alt="Tutor avatar" className="w-full h-full object-cover" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-bold text-base-content truncate">{tutor.name.toUpperCase()}</p>
                        <p className="text-xs text-neutral">Verified profile</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                      <div className="flex lg:block items-center justify-between">
                        <span className="text-xs text-neutral lg:hidden">Subject</span>
                        <span className="inline-flex items-center rounded-full bg-base-200/45 px-3 py-1 text-xs font-semibold text-base-content">
                          {tutor.subject}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                      <div className="flex lg:block items-center justify-between">
                        <span className="text-xs text-neutral lg:hidden">Teaching Class</span>
                        <span className="text-sm font-semibold text-base-content">{tutor.teachingClass || 'Class 10'}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                      <div className="flex lg:block items-center justify-between">
                        <span className="text-xs text-neutral lg:hidden">Location</span>
                        <span className="text-sm font-semibold text-base-content">{tutor.location}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-1 lg:flex lg:items-center lg:justify-end">
                      <CommonButton
                        onClick={() => openTutorDetailsModal(tutor)}
                        className="btn btn-sm w-full md:w-50 lg:w-auto border-none rounded-full px-5"
                      >
                        View Profile
                      </CommonButton>
                    </div>
                  </div>

                  <div className="h-0.5 w-full bg-primary/0 transition-all duration-200 group-hover:bg-primary/30" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="px-4 sm:px-5 py-3 text-xs text-neutral bg-base-100/70 border-t border-base-200/70" variants={fadeUp}>
              Tip: On mobile, each row stacks neatly. On desktop, it aligns like a table.
            </motion.div>
          </motion.div>
        </div>

        <dialog ref={tutorDetailsRef} className="modal modal-bottom sm:modal-middle">
          {selectedTutor && (
            <TutorDetailsModal
              selectedTutor={selectedTutor}
              onClose={() => {
                tutorDetailsRef.current?.close?.();
                setSelectedTutor(null);
              }}
            />
          )}
        </dialog>
      </motion.section>
    </Container>
  );
};

export default TutorsList;
