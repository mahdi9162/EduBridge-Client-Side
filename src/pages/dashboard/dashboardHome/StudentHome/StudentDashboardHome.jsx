import React from 'react';
import StudentHero from './components/StudentHero';
import Container from '../../../../components/Container/Container';
import StudentQuickCards from './components/StudentQuickCards';

const StudentDashboardHome = () => {
  return (
    <Container>
      <section className="py-6 md:py-8 lg:py-10 px-3">
        {/* Hero */}
        <StudentHero></StudentHero>
        {/* cards */}
        <StudentQuickCards></StudentQuickCards>
      </section>
    </Container>
  );
};

export default StudentDashboardHome;
