import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import FullScreenLoader from '../../../../../components/Loading/FullScreenLoader';

const StudentQuickCards = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // tuition fetch
  const { data: tuitions = [], isLoading: tuitionsLoading } = useQuery({
    queryKey: ['myTuitions', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  // application fetch
  const { data: applications = [], isLoading: applicationsLoading } = useQuery({
    queryKey: ['applications', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/tutor-applications');
      return res.data;
    },
  });

  //   payment history
  const { data: paymentsHistories = [], isLoading: paymentsLoading } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  if (tuitionsLoading || applicationsLoading || paymentsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const totalTuitionPosts = tuitions.length;
  const totalApplication = applications.length;
  const activeTuitions = applications.filter((app) => app.applyStatus === 'selected').length;
  const totalPaid = paymentsHistories.reduce((sum, payment) => sum + Number(payment.amount), 0);

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <div className="dashboard-card">
        <p className="text-xs text-neutral mb-1">My Tuition Posts</p>
        <h3 className="text-lg md:text-2xl font-semibold text-base-content">{totalTuitionPosts}</h3>
        <p className="text-xs text-neutral mt-1">Total tuition posts created</p>
      </div>

      {/* Card 2 */}
      <div className="dashboard-card">
        <p className="text-xs text-neutral mb-1">Applied Tutors</p>
        <h3 className="text-lg md:text-2xll font-semibold text-base-content">{totalApplication}</h3>
        <p className="text-xs text-neutral mt-1">Tutors applied to your posts</p>
      </div>

      {/* Card 3 */}
      <div className="dashboard-card">
        <p className="text-xs text-neutral mb-1">Active Tuitions</p>
        <h3 className="text-lg md:text-2xl font-semibold text-base-content">{activeTuitions}</h3>
        <p className="text-xs text-neutral mt-1">Currently running tuitions</p>
      </div>

      {/* Card 4 */}
      <div className="dashboard-card">
        <p className="text-xs text-neutral mb-1">Payments Done</p>
        <h3 className="text-lg md:text-2xl font-semibold text-base-content">৳ {totalPaid}</h3>
        <p className="text-xs text-neutral mt-1">Total amount paid</p>
      </div>
    </div>
  );
};

export default StudentQuickCards;
