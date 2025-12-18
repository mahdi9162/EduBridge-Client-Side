import React from 'react';
import Container from '../../../components/Container/Container';
import studentAvatarImg from '../../../assets/studentAvatar.webp';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { formatDate, formatTime } from '../../../utils/date';
import toast from 'react-hot-toast';

const ManageTuitions = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: allTuitions = [] } = useQuery({
    queryKey: ['allTuitions'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  //   only get pending tuitions
  const pendingTuitions = allTuitions.filter((tuition) => tuition.postStatus === 'pending');
  // only get approved tuitions
  const approvedTuitions = allTuitions.filter((tuition) => tuition.postStatus === 'approved');
  // only get rejected tuitions
  const rejectedTuitions = allTuitions.filter((tuition) => tuition.postStatus === 'rejected');

  const handleUpdateStatus = async (tuition, status) => {
    const id = tuition._id;

    try {
      await axiosSecure.patch(`/tuitions-status/${id}`, { postStatus: `${status}` });
      toast.success(`Post has been ${status} successfully.`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <section className="my-10 bg-base-200/60 rounded-4xl px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-5 sm:px-8 py-4 sm:py-5 text-center w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/70 flex items-center justify-center text-secondary">
                <BsClipboard2CheckFill />
              </span>

              <h3 className="text-xl sm:text-2xl font-semibold text-base-content">Tuition Management</h3>
            </div>

            <p className="mt-1 text-xs sm:text-sm text-neutral">
              Review, approve or reject tuition posts before they become visible to tutors.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Total Posts</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">
                {allTuitions.length}
              </p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Pending Review</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">
                {pendingTuitions.length}
              </p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Approved</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">
                {approvedTuitions.length}
              </p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Rejected</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">
                {rejectedTuitions.length}
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="bg-base-100 border border-base-200 rounded-2xl px-4 sm:px-5 py-3 shadow-[0_12px_30px_rgba(15,26,51,0.06)] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <label className="w-full md:max-w-sm">
                <div className="flex items-center gap-2 bg-base-200/60 border border-base-200 rounded-full px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by title / location / student"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
              </label>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                <select className="select select-sm rounded-full border-base-200 bg-base-100">
                  <option>Status: All</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>

                <select className="select select-sm rounded-full border-base-200 bg-base-100">
                  <option>Sort: Newest first</option>
                  <option>Oldest first</option>
                </select>

                <button className="btn btn-ghost btn-sm rounded-full border border-base-200">Clear</button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {pendingTuitions.map((tuition, i) => (
              <div key={i} className="bg-base-100 rounded-3xl border border-base-200 shadow-[0_18px_45px_rgba(15,26,51,0.08)] p-5 sm:p-7">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-base-content line-clamp-1">{tuition.title}</h3>
                  </div>

                  <span className="badge badge-soft badge-warning text-xs px-3 py-1">{tuition.postStatus}</span>
                </div>
                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.classLevel}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.subject}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.location}</span>
                </div>

                <div className="mt-5 border-t border-base-200" />

                {/* Card Meta */}
                <div className="mt-5 flex flex-col sm:flex-row justify-between gap-2 text-sm text-neutral">
                  <p>
                    <span className="font-semibold text-base-content">Budget:</span> {tuition.budget} ৳ / month
                  </p>
                  <p className="text-xs text-neutral">
                    Posted: {formatDate(tuition.createdAt)} at {formatTime(tuition.createdAt)}
                  </p>
                </div>

                {/* Student block (RESPONSIVE FIXED) */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  {/* Student Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left mx-auto sm:mx-0">
                    <figure className="w-12 h-12 rounded-full overflow-hidden border border-base-300">
                      <img src={studentAvatarImg} alt="Student" className="w-full h-full object-cover" />
                    </figure>

                    <div>
                      <h4 className="font-semibold text-base-content leading-tight">{tuition.name}</h4>
                      <p className="text-xs text-neutral mt-0.5">
                        Email: <span className="font-mono break-all">{tuition.email}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                    <button onClick={() => handleUpdateStatus(tuition, 'approved')} className="btn btn-primary btn-sm rounded-full px-5">
                      Approve
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(tuition, 'rejected')}
                      className="btn btn-ghost btn-sm rounded-full border border-error/30 text-error px-5"
                    >
                      Reject
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-neutral text-center sm:text-left">
                  Approving makes this post visible to tutors. Reject if info is incomplete or violates policy.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ManageTuitions;
