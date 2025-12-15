import React from 'react';
import Container from '../../../components/Container/Container';
import { HiClipboardList } from 'react-icons/hi';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { formatDate, formatTime } from '../../../utils/date';
import { Link } from 'react-router';
import Loading from '../../../components/Loading/Loading';

const MyApplications = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // application fetch
  const { data: applications = [], isLoading: isApplicationLoading } = useQuery({
    queryKey: ['applications', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/applications');
      return res.data;
    },
  });

  // tuition details fetch
  const tuitionIds = applications.map((a) => a.tuitionId);

  const { data: tuitionById = {}, isLoading: isTuitionsLoading } = useQuery({
    queryKey: ['tuitionById', tuitionIds],
    enabled: tuitionIds.length > 0,
    queryFn: async () => {
      const tuitions = await Promise.all(
        tuitionIds.map(async (id) => {
          const res = await axiosSecure.get(`/tuition-details/${id}`);
          return res.data;
        })
      );

      const tuitionById = {};

      tuitions.forEach((tuition) => {
        tuitionById[tuition._id] = tuition;
      });

      return tuitionById;
    },
  });

  if (isApplicationLoading || isTuitionsLoading) {
    return <Loading></Loading>;
  }

  // Counts
  const totalApply = applications.length;
  const totalPending = applications.filter((app) => app.applyStatus === 'pending').length;
  const totalAccpeted = applications.filter((app) => app.applyStatus === 'selected').length;

  // only get pending applications here
  const pendingApplications = applications.filter((app) => app.applyStatus === 'pending');

  return (
    <Container>
      <section className="py-10 lg:py-14 bg-base-200/60 rounded-4xl px-3 sm:px-6 lg:px-0 my-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-base-100 rounded-full shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-5 sm:px-8 py-4 sm:py-5 text-center w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-base-content">My Applications</h3>
              <span className="w-9 h-9 rounded-full bg-accent/70 flex items-center justify-center text-secondary">
                <HiClipboardList className="text-xl" />
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-neutral">Track all your tuition applications and their status.</p>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Total Applied</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalApply}</p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Pending</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalPending}</p>
            </div>

            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Accepted</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalAccpeted}</p>
            </div>
          </div>

          {/* Recent Applications Title */}
          <div className="mt-10 sm:mt-12">
            <h3 className="text-lg sm:text-xl font-semibold text-base-content px-1">Recent Applications</h3>
          </div>

          {/* Card  */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pendingApplications.map((application, i) => {
              const tuition = tuitionById[application.tuitionId];
              return (
                <div
                  key={i}
                  className="bg-base-100 rounded-3xl border border-base-200 shadow-[0_18px_45px_rgba(15,26,51,0.08)] p-5 sm:p-6 lg:p-7"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-base-content leading-snug line-clamp-1">{tuition?.title}</h3>

                    <span className="badge badge-soft badge-warning text-[10px] sm:text-xs px-3 py-1 shrink-0">
                      {application.applyStatus}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content text-xs sm:text-sm">{tuition?.classLevel}</span>
                    <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content text-xs sm:text-sm">{tuition?.subject}</span>
                    <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content text-xs sm:text-sm">{tuition?.location}</span>
                  </div>

                  {/* Info rows */}
                  <div className="mt-5 space-y-2 text-sm sm:text-base text-base-content">
                    <p>
                      <span className="font-semibold">Student Name:</span> <span>{tuition?.name}</span>
                    </p>

                    <p>
                      <span className="font-semibold">Student Budget:</span>{' '}
                      <span className="font-semibold text-secondary">{tuition?.budget} ৳</span>{' '}
                      <span className="text-neutral text-xs sm:text-sm">/ month</span>
                    </p>

                    <p>
                      <span className="font-semibold">Your Expected Salary:</span>{' '}
                      <span className="font-semibold text-secondary">
                        {application.expectedSalary ? (
                          application.expectedSalary
                        ) : (
                          <span className="text-xs">(same as student budget)</span>
                        )}{' '}
                        <span className={application.expectedSalary ? 'inline' : 'hidden'}>৳</span>
                      </span>{' '}
                      <span className={application.expectedSalary ? 'text-neutral text-xs sm:text-sm' : 'hidden'}>/ month</span>
                    </p>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-base-200 pt-4">
                    <div>
                      <p className="text-xs text-neutral mb-1">
                        <span className="font-medium text-black">Applied On:</span> {formatDate(application.createdAt)} at{' '}
                        {formatTime(application.createdAt)}
                      </p>
                      <p className={tuition.paidAt ? 'text-secondary text-xs' : 'text-xs sm:text-sm text-neutral'}>
                        <span className="text-black font-medium">Matched:</span> {tuition.paidAt ? formatDate(tuition.paidAt) : 'pending'}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-2">
                      <p className="text-[11px] sm:text-xs text-neutral">Waiting for student decision</p>
                      <Link
                        to={`/tuition-details/${application.tuitionId}`}
                        className="btn btn-primary rounded-full h-11 min-h-11 px-6 shadow-[0_14px_30px_rgba(15,26,51,0.18)]"
                      >
                        View Tuition
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Right side empty space on desktop (optional) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MyApplications;
