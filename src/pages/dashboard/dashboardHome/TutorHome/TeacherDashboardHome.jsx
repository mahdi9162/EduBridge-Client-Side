import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Container from '../../../../components/Container/Container';
import TutorHero from './components/TutorHero';
import TutorRevenue from './components/TutorRevenue';
import FullScreenLoader from '../../../../components/Loading/FullScreenLoader';

const TeacherDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  //   payments fetch
  const { data: payments = [], isLoading: paymentsLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  //   application fetch
  const { data: applications = [], isLoading: applicationsLoading } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await axiosSecure.get('/applications');
      return res.data;
    },
  });

  if (paymentsLoading || applicationsLoading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  return (
    <Container>
      <section className="py-6 md:py-8 lg:py-10 px-3">
        {/* Dashboard Hero */}
        <TutorHero applications={applications}></TutorHero>

        {/* Tutor Revenue */}
        <TutorRevenue payments={payments}></TutorRevenue>
      </section>
    </Container>
  );
};

export default TeacherDashboardHome;
TeacherDashboardHome;
