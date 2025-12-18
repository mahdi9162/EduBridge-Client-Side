import React, { useRef, useState } from 'react';
import Container from '../../../components/Container/Container';
import { IoIosSearch } from 'react-icons/io';
import axiosInstance from '../../../services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import TutorDetailsModal from './TutorDetailsModal';
import tutorImg from '../../../assets/teacher.png'

const TutorsList = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const tutorDetailsRef = useRef();
  const axios = axiosInstance;

  const { data: tutors } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const res = await axios.get('/public/tutors');
      return res.data;
    },
  });

  const openTutorDetailsModal = (tutor) => {
    setSelectedTutor(tutor);
    tutorDetailsRef.current.showModal();
  };

  const filteredTutors = (tutors || []).filter((tutor) => (tutor?.subject || '').toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Container>
      <section className="bg-base-200/40 py-10 rounded-4xl my-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          {/* Header */}
          <div className="bg-base-100 border border-base-300 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.06)] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-base-content tracking-tight">Tutors</h2>
                <p className="text-sm text-neutral mt-1">Browse available tutors and view their profiles.</p>
              </div>

              {/* Search  */}
              <div className="flex gap-2 w-full sm:w-auto">
                <label className="input input-bordered flex items-center gap-2 bg-base-100 border-base-300 w-full sm:w-70">
                  <IoIosSearch className="h-4 w-4 opacity-60" />
                  <input
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    className="grow text-sm"
                    placeholder="Search by Subject"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* List Card */}
          <div className="mt-6 bg-base-100 border border-base-300 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.06)] overflow-hidden">
            {/* Table header */}
            <div className="hidden lg:grid grid-cols-12 px-5 py-3 bg-base-200/60 border-b border-base-300 text-xs font-semibold text-base-content">
              <div className="col-span-5">Tutor</div>
              <div className="col-span-2 text-center">Subject</div>
              <div className="col-span-2 text-center">Teaching Class</div>
              <div className="col-span-2 text-center">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* row  */}
            {filteredTutors.length === 0 && <div className="p-6 text-center text-neutral">No tutors found for “{searchValue}”</div>}

            {filteredTutors?.map((tutor, i) => (
              <div key={i} className="border-b border-base-300/70">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-0 px-4 sm:px-5 py-4">
                  {/* Tutor */}
                  <div className="lg:col-span-5 flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-11 h-11 rounded-full ring-2 ring-base-300">
                        <img src={tutorImg} alt="Tutor avatar" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-base-content">{tutor.name}</p>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                    <div className="flex lg:block items-center justify-between">
                      <span className="text-xs text-neutral lg:hidden">Subject</span>
                      <span className="text-sm font-medium text-base-content">{tutor.subject}</span>
                    </div>
                  </div>

                  {/* Teaching Class */}
                  <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                    <div className="flex lg:block items-center justify-between">
                      <span className="text-xs text-neutral lg:hidden">Teaching Class</span>
                      <span className="text-sm text-base-content">{tutor.teachingClass || 'Class 10'}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                    <div className="flex lg:block items-center justify-between">
                      <span className="text-xs text-neutral lg:hidden">Location</span>
                      <span className="text-sm text-base-content">{tutor.location}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="lg:col-span-1 lg:flex lg:items-center md:mx-auto lg:justify-end">
                    <button
                      onClick={() => openTutorDetailsModal(tutor)}
                      className="btn btn-sm w-full md:w-50 lg:w-auto bg-primary text-primary-content hover:bg-secondary border-none rounded-full px-5"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="px-4 sm:px-5 py-3 text-xs text-neutral bg-base-100">
              Tip: On mobile, each row stacks neatly. On desktop, it aligns like a table.
            </div>
          </div>
        </div>
        {/* Modal */}
        <dialog ref={tutorDetailsRef} className="modal modal-bottom sm:modal-middle">
          {selectedTutor && (
            <TutorDetailsModal
              selectedTutor={selectedTutor}
              onClose={() => {
                tutorDetailsRef.current.close();
                setSelectedTutor(null);
              }}
            />
          )}
        </dialog>
      </section>
    </Container>
  );
};

export default TutorsList;
