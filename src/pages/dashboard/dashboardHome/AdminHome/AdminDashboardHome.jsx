import React from 'react';
import Container from '../../../../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import InfoCard from './components/InfoCard';
import DashboardHero from './components/HeroDashboard';
import AdminRevenue from './components/AdminRevenue';

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: dbUsers } = useQuery({
    queryKey: ['dbUsers'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  const { data: allTuitions = [] } = useQuery({
    queryKey: ['allTuitions'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tuitions');
      return res.data;
    },
  });

  return (
    <Container>
      <section className="py-6 md:py-8 lg:py-10 px-3">
        {/* Dashboard Hero */}
        <DashboardHero dbUsers={dbUsers}></DashboardHero>

        {/* Info Card */}
        <InfoCard allTuitions={allTuitions} payments={payments}></InfoCard>

        {/* Admin Revenue */}
        <AdminRevenue payments={payments}></AdminRevenue>
      </section>
    </Container>
  );
};

export default AdminDashboardHome;
