import React from 'react';
import Container from '../../../components/Container/Container';
import { HiUserGroup } from 'react-icons/hi';
import avatarImg from '../../../assets/avatar.png';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { formatDate, formatTime } from '../../../utils/date';

const AppliedTutors = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tuitions = [] } = useQuery({
    queryKey: ['myTuitions', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  // application fetch
  const { data: applications = [], refetch } = useQuery({
    queryKey: ['applications', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tutor-applications');
      return res.data;
    },
  });

  // Counts
  const totalApplication = applications.length;
  const totalPending = applications.filter((t) => t.applyStatus === 'pending').length;
  const totalSelected = applications.filter((s) => s.applyStatus === 'selected').length;
  const totalRejected = applications.filter((s) => s.applyStatus === 'rejected').length;

  const handleRejectBtn = async (application) => {
    const id = application._id;

    try {
      await axiosSecure.patch(`/applications/${id}`, {
        applyStatus: 'rejected',
      });

      alert('You rejected this application successfully!');

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectBtn = async (application) => {
    const id = application._id;

    try {
      await axiosSecure.patch(`/select-applications/${id}`);

      alert('You selected this application successfully!');

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  //  pending applications tuitionId
  const tuitionIds = applications
    .filter((application) => application.applyStatus === 'pending')
    .map((application) => application.tuitionId);

  // only pending application
  const appliedTuitions = tuitions.filter((tuition) => tuitionIds.includes(tuition._id));

  return (
    <Container>
      <section className="my-10 bg-base-200/60 rounded-4xl px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-5 sm:px-8 py-4 sm:py-5 text-center w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-base-content">Applied Tutors</h3>
              <span className="w-9 h-9 rounded-full bg-accent/70 flex items-center justify-center text-secondary">
                <HiUserGroup className="text-xl" />
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-neutral">Review tutors who applied to your tuition posts.</p>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {/* Total Applications */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Total Applications</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">
                {totalApplication}
              </p>
            </div>

            {/* Pending */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Pending</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalPending}</p>
            </div>

            {/* Selected */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Selected</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalSelected}</p>
            </div>

            {/* Rejected */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Rejected</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">{totalRejected}</p>
            </div>
          </div>

          {/* Tuition Card */}
          {appliedTuitions.map((tuition, i) => (
            <div
              key={i}
              className="mt-12 bg-base-100 rounded-3xl border border-base-200 shadow-[0_18px_45px_rgba(15,26,51,0.08)] p-6 sm:p-7"
            >
              {/* Tuition Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-base-content">{tuition.title}</h3>
                <span className="badge badge-soft badge-warning text-xs px-3 py-1">{tuition.status}</span>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.classLevel}</span>
                <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.subject}</span>
                <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">{tuition.location}</span>
              </div>

              <div className="mt-4 border-t border-base-200" />

              {/* Tuition Meta */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2 text-sm text-neutral">
                <p>
                  <span className="font-semibold text-base-content">Budget:</span> {tuition.budget} ৳ / month
                </p>
                <p>
                  Posted: {formatDate(tuition.createdAt)} at {formatTime(tuition.createdAt)}
                </p>
              </div>

              {/* Tutor Cards Grid Div*/}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Card */}
                {applications
                  .filter((application) => application.tuitionId === tuition._id && application.applyStatus === 'pending')
                  .map((application, i) => (
                    <div key={i} className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
                      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
                        <img src={avatarImg} alt="" className="w-14 h-14 rounded-full object-cover border border-base-300" />
                        <div>
                          <h4 className="font-semibold text-base-content">{application.tutorName}</h4>
                          <p className="text-xs sm:text-sm text-neutral">Qualification: {application.qualification}</p>
                          <p className="my-2">
                            <span className="font-medium md:font-semibold text-xs md:text-base">Tutor Expected Salary:</span>{' '}
                            <span className="font-medium md:font-semibold text-xs md:text-base text-secondary">
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
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                        <button onClick={() => handleSelectBtn(application)} className="btn btn-primary btn-sm rounded-full px-4">
                          Select
                        </button>
                        <button
                          onClick={() => handleRejectBtn(application)}
                          className="btn btn-ghost btn-sm rounded-full border border-base-300 px-4"
                        >
                          Reject
                        </button>
                        <button className="btn btn-outline btn-sm rounded-full px-4">Tutor Details</button>
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral">
                        <p className="text-center md:text-left">Selection becomes final after payment</p>
                        <p>
                          Applied: {formatDate(application.createdAt)} at {formatTime(application.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default AppliedTutors;
