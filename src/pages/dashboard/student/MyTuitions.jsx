import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoMdContacts } from 'react-icons/io';
import { MdOutlineMobileFriendly, MdOutlinePostAdd } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { formatDate, formatTime } from '../../../utils/date';
import UpdateTuitionModal from './UpdateTuitionModal';

const MyTuitions = () => {
  const [selectedTuition, setSelectedTuition] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef();

  const { refetch, data: tuitions = [] } = useQuery({
    queryKey: ['myTuitions', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  // Counts
  const totalPost = tuitions.length;
  const totalPending = tuitions.filter((t) => t.status === 'pending').length;
  const totalMatched = tuitions.filter((t) => t.status === 'matched').length;
  const totalClosed = tuitions.filter((t) => t.status === 'closed').length;

  // Form update using modal
  const updateForm = (tuition) => {
    setSelectedTuition(tuition);
    modalRef.current.showModal();
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-300/60">
        {/* Header */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-7 pb-3">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-base-content">My Tuitions</h3>
            <p className="text-xs sm:text-sm text-neutral">Track and manage all your tuition posts.</p>
          </div>
          <div className="mt-4 border-t border-base-300/70" />
        </div>

        {/* Info stats */}
        <div className="px-5 sm:px-8 pb-4 sm:pb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <MdOutlinePostAdd className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Total Posts: <span className="font-semibold">{totalPost}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <FaClockRotateLeft className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Pending: <span className="font-semibold">{totalPending}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <IoMdContacts className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Matched: <span className="font-semibold">{totalMatched}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <MdOutlineMobileFriendly className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Closed: <span className="font-semibold">{totalClosed}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tuition details card */}
        {tuitions.map((tuition) => (
          <div key={tuition._id} className="px-5 sm:px-8 pb-6 sm:pb-8">
            <div className="bg-base-200 rounded-2xl px-4 sm:px-5 py-4 sm:py-5">
              {/* Title + status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-base-content">{tuition.title}</h3>
                <div className="badge badge-soft badge-warning text-[11px] sm:text-xs px-3 py-2">{tuition.status}</div>
              </div>

              {/* Class / Subject / Location */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">{tuition.classLevel}</span>
                <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">{tuition.subject}</span>
                <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">{tuition.location}</span>
              </div>

              <div className="mt-4 mb-4 border-t border-base-300/70" />

              {/* Budget + dates */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-6">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-secondary">
                    <span className="text-2xl sm:text-3xl font-bold mr-1">{tuition.budget}</span>
                    <span className="align-middle text-xl">&#x09F3;</span>
                    <span className="text-[11px] sm:text-xs text-neutral/90 font-medium ml-1">/ per month</span>
                  </p>
                </div>

                <div className="text-[11px] sm:text-xs text-neutral/90 font-medium space-y-1 sm:text-right">
                  <p>
                    Posted: {formatDate(tuition.createdAt)} at {formatTime(tuition.createdAt)}
                  </p>
                  <p>Matched: Dec 16, 2025</p>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                {/* Update Button */}
                <button
                  onClick={() => updateForm(tuition)}
                  className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-focus transition-all duration-200 w-full sm:w-auto cursor-pointer"
                >
                  Update
                </button>

                {/* Delete Button */}
                <button className="px-3 py-2 rounded-lg bg-error text-white text-sm font-medium hover:bg-error-focus transition-all duration-200 w-full sm:w-auto cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        {selectedTuition && (
          <UpdateTuitionModal
            tuition={selectedTuition}
            refetch={refetch}
            onClose={() => {
              modalRef.current.close();
              setSelectedTuition(null);
            }}
          />
        )}
      </dialog>
    </section>
  );
};

export default MyTuitions;
