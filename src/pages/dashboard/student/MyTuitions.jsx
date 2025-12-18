import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoMdContacts } from 'react-icons/io';
import { MdOutlineMobileFriendly, MdOutlinePostAdd } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { formatDate, formatTime } from '../../../utils/date';
import UpdateTuitionModal from './UpdateTuitionModal';
import { confirmDeleteAlert, deleteSuccessAlert } from '../../../utils/swalHelpers';
import Container from '../../../components/Container/Container';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';

const MyTuitions = () => {
  const [selectedTuition, setSelectedTuition] = useState(null);
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef();

  const {
    refetch,
    data: tuitions = [],
    isLoading: tuitionLoading,
  } = useQuery({
    queryKey: ['myTuitions', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  if (authLoading || tuitionLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  // Counts
  const totalPost = tuitions.length;
  const totalPending = tuitions.filter((t) => t.status === 'pending').length;
  const totalMatched = tuitions.filter((t) => t.status === 'selected').length;
  const totalClosed = tuitions.filter((t) => t.status === 'closed').length;

  // Form update using modal
  const handleUpdateForm = (tuition) => {
    setSelectedTuition(tuition);
    modalRef.current.showModal();
  };

  // Form delete
  const handleDeleteForm = async (tuition) => {
    const isConfirmed = await confirmDeleteAlert({ title: 'Delete This Tuition?', text: 'This action cannot be undone once deleted!' });
    if (!isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/tuitions/${tuition._id}`);
      if (res.data.deletedCount > 0) {
        await deleteSuccessAlert();
        await refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
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

          {/* EMPTY STATE OR Tuition details card */}
          {tuitions.length === 0 ? (
            <div className="px-5 sm:px-8 pb-8">
              <div className="bg-base-200 rounded-2xl p-8 text-center border border-base-300/50">
                <div className="text-4xl animate-bounce">📝</div>

                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-base-content">No tuition posts yet</h3>

                <p className="mt-2 text-sm text-neutral max-w-md mx-auto">
                  When you create a tuition post, it will show up here so you can update or manage it.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-xs text-neutral">
                  <span className="animate-pulse">⏳</span>
                  Waiting for your first post
                </div>

                <p className="mt-4 text-xs text-neutral">
                  Tip: Post a tuition to start getting tutor applications <span className="animate-pulse">✨</span>
                </p>
              </div>
            </div>
          ) : (
            tuitions.map((tuition) => (
              <div key={tuition._id} className="px-5 sm:px-8 pb-6 sm:pb-8">
                <div className="bg-base-200 rounded-2xl px-4 sm:px-5 py-4 sm:py-5">
                  {/* Title + status */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-xl font-semibold text-base-content">{tuition.title}</h3>
                    <div
                      className={
                        tuition.status === 'selected'
                          ? 'badge bg-secondary text-white font-medium text-[11px] sm:text-xs px-3 py-2'
                          : 'badge badge-soft badge-warning text-[11px] sm:text-xs px-3 py-2'
                      }
                    >
                      {tuition.status === 'selected' ? 'Ongoing' : tuition.status.charAt(0).toUpperCase() + tuition.status.slice(1)}
                    </div>
                  </div>

                  {/* Student Name */}
                  <div className="my-3 flex items-center gap-1.5 leading-tight">
                    <span className=" text-sm font-medium">Student:</span>
                    <span className="text-sm font-medium tracking-tight">{tuition.name}</span>
                  </div>

                  {/* Class / Subject / Location */}
                  <div className="flex flex-wrap gap-2 mt-5">
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
                      <p className={tuition.paidAt ? 'text-secondary' : ''}>
                        Matched: {tuition.paidAt ? formatDate(tuition.paidAt) : 'pending'}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={
                      tuition.postStatus === 'pending'
                        ? 'justify-between mt-4 flex flex-col sm:flex-row gap-3'
                        : 'justify-end mt-4 flex flex-col sm:flex-row gap-3'
                    }
                  >
                    <div
                      className={
                        tuition.postStatus === 'pending'
                          ? 'inline-block text-[10px] md:text-xs text-center md:text-left text-neutral'
                          : 'hidden'
                      }
                    >
                      <p>Your tuition post is currently under review.</p>
                      <p>Please wait for admin approval.</p>
                    </div>

                    <div className="flex gap-5">
                      {/* Update Button */}
                      <button
                        onClick={() => handleUpdateForm(tuition)}
                        disabled={tuition.status === 'selected'}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${
                          tuition.status === 'selected'
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary-focus cursor-pointer'
                        }`}
                      >
                        Update
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDeleteForm(tuition)}
                        disabled={tuition.status === 'selected'}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${
                          tuition.status === 'selected'
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-error text-white hover:bg-error-focus cursor-pointer'
                        }`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
    </Container>
  );
};

export default MyTuitions;
