import React from 'react';
import { FaComments, FaEye, FaSearch } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { formatDate } from '../../../utils/date';
import Container from '../../../components/Container/Container';

const OngoingTuitions = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: applications = [] } = useQuery({
    queryKey: ['applications', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/applications');
      return res.data;
    },
  });

  // stats
  const total = applications.length;
  const ongoingCount = applications.filter((app) => app.applyStatus === 'selected').length;
  const completedCount = applications.filter((app) => app.applyStatus === 'completed').length;

  return (
    <Container>
      <div className="md:px-4 py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-xl md:rounded-4xl bg-[#E8EEF8] shadow-sm p-3 md:p-10">
            {/* Header pill */}
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl md:rounded-[999px] bg-white border border-[#C9CED8] shadow-sm px-6 py-5 md:px-10 md:py-7 flex items-center justify-center gap-3">
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl font-semibold text-[#0F1A33] mb-2">Ongoing Tuitions</h1>
                  <p className="text-xs md:text-sm text-[#0F1A33]/70">
                    Track the tuitions you’re currently teaching and take quick actions.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-[#C9CED8] shadow-sm p-5 text-center">
                  <p className="text-xs text-[#0F1A33]/60">Total</p>
                  <p className="mt-1 text-2xl font-bold text-[#0F1A33]">{total}</p>
                </div>

                <div className="bg-white rounded-2xl border border-[#C9CED8] shadow-sm p-5 text-center">
                  <p className="text-xs text-[#0F1A33]/60">Ongoing</p>
                  <p className="mt-1 text-2xl font-bold text-[#0F1A33]">{ongoingCount}</p>
                </div>

                <div className="bg-white rounded-2xl border border-[#C9CED8] shadow-sm p-5 text-center">
                  <p className="text-xs text-[#0F1A33]/60">Completed</p>
                  <p className="mt-1 text-2xl font-bold text-[#0F1A33]">{completedCount}</p>
                </div>
              </div>
            </div>

            {/* Cards list */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {applications.map((app) => (
                <div key={app.id} className="bg-white rounded-3xl border border-[#C9CED8] shadow-sm px-4 py-6 md:p-6">
                  {/* Card top */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary line-clamp-1">{app.tuitionTitle}</h3>
                      <p className="mt-1 text-sm text-primary/70">
                        Student: <span className="font-semibold text-primary">{app.studentName}</span>
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.applyStatus === 'selected' ? 'bg-[#244C98] text-white' : 'bg-[#8A94A6] text-white'
                      }`}
                    >
                      {app.applyStatus === 'selected' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>

                  {/* Info grid */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Salary</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-primary">৳{app.salary} / month</p>
                    </div>

                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Started</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-[#0F1A33]">{formatDate(app.paidAt)}</p>
                    </div>

                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Subject</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-[#0F1A33]">{app.subject}</p>
                    </div>

                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Level</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-[#0F1A33]">{app.classLevel}</p>
                    </div>

                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Location</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-[#0F1A33]">{app.location}</p>
                    </div>

                    <div className="rounded-2xl border border-[#C9CED8] bg-[#E8EEF8] p-3">
                      <p className="text-xs text-[#0F1A33]/60">Status</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-[#0F1A33]">{app.applyStatus ? 'Ongoing' : 'Completed'}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      className="flex-1 rounded-2xl bg-[#0F1A33] text-white px-4 py-3 text-sm font-semibold hover:opacity-95 transition inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaComments /> Open Chat
                    </button>

                    <button
                      type="button"
                      className="flex-1 rounded-2xl bg-white border border-[#C9CED8] text-[#0F1A33] px-4 py-3 text-sm font-semibold hover:bg-[#E8EEF8] transition inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaEye /> View Details
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-[#0F1A33]/60">Tip: Later you can show next class date / progress / payment cycle here.</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[#0F1A33]/70">EduBridge • Where Trust Shapes Learning</p>
        </div>
      </div>
    </Container>
  );
};

export default OngoingTuitions;
