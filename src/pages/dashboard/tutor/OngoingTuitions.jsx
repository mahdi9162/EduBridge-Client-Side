import React from 'react';
import { FaComments, FaEye } from 'react-icons/fa';
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
  const ongoingApps = applications.filter((app) => app.applyStatus === 'selected');

  return (
    <Container>
      <div className="md:px-4 py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-xl md:rounded-4xl bg-base-200 shadow-sm p-3 md:p-10">
            {/* Header pill */}
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl md:rounded-2xl lg:rounded-[999px] bg-base-100 border border-base-300 shadow-sm px-6 py-5 md:px-10 md:py-7 flex items-center justify-center gap-3">
                <div className="text-center">
                  <h1 className="text-xl md:text-2xl font-semibold text-base-content mb-2">Ongoing Tuitions</h1>
                  <p className="text-xs md:text-sm text-base-content/70">
                    Track the tuitions you’re currently teaching and take quick actions.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5 text-center">
                  <p className="text-xs text-base-content/60">Total Application</p>
                  <p className="mt-1 text-2xl font-bold text-base-content">{total}</p>
                </div>

                <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5 text-center">
                  <p className="text-xs text-base-content/60">Ongoing</p>
                  <p className="mt-1 text-2xl font-bold text-base-content">{ongoingCount}</p>
                </div>

                <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5 text-center">
                  <p className="text-xs text-base-content/60">Completed</p>
                  <p className="mt-1 text-2xl font-bold text-base-content">{completedCount}</p>
                </div>
              </div>
            </div>

            {/* Cards list */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
              {ongoingApps.length === 0 ? (
                <div className="col-span-1 lg:col-span-2 bg-base-100 rounded-3xl border border-base-300 shadow-sm p-8 text-center">
                  <div className="text-4xl animate-bounce">📚</div>

                  <h3 className="mt-3 text-lg md:text-xl font-semibold text-base-content">No ongoing tuitions right now</h3>

                  <p className="mt-2 text-sm text-neutral max-w-md mx-auto">
                    When a student selects you and completes payment, the tuition will appear here as ongoing.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-4 py-2 text-xs text-neutral">
                    <span className="animate-pulse">⏳</span>
                    Waiting for selection & payment
                  </div>

                  <p className="mt-4 text-xs text-neutral">
                    Tip: Apply to more tuitions <span className="animate-pulse">✨</span>
                  </p>
                </div>
              ) : (
                ongoingApps.map((app) => (
                  <div key={app.id} className="bg-base-100 rounded-3xl border border-base-300 shadow-sm px-4 py-6 md:p-6">
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
                          app.applyStatus === 'selected' ? 'bg-secondary text-white' : 'badge badge-success text-white'
                        }`}
                      >
                        {app.applyStatus === 'selected' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>

                    {/* Info grid */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Salary</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-primary">৳{app.salary} / month</p>
                      </div>

                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Started</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-base-content">{formatDate(app.paidAt)}</p>
                      </div>

                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Subject</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-base-content">{app.subject}</p>
                      </div>

                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Level</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-base-content">{app.classLevel}</p>
                      </div>

                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Location</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-base-content">{app.location}</p>
                      </div>

                      <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                        <p className="text-xs text-base-content/60">Status</p>
                        <p className="mt-1 text-xs md:text-sm font-semibold text-base-content">
                          {app.applyStatus ? 'Ongoing' : 'Completed'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-base-content/70">EduBridge • Where Trust Shapes Learning</p>
        </div>
      </div>
    </Container>
  );
};

export default OngoingTuitions;
