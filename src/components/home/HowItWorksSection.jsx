import React from 'react';
import Container from '../Container/Container';

const HowItWorksSection = () => {
  const steps = [
    {
      id: '1',
      title: 'Post Your Tuition',
      desc: 'Tell us class, subject, location, and schedule — takes about 60 seconds.',
    },
    {
      id: '2',
      title: 'Get Matched Fast',
      desc: 'Verified tutors apply based on your needs. You compare profiles easily.',
    },
    {
      id: '3',
      title: 'Start Learning',
      desc: 'Confirm a tutor, set the routine, and begin sessions with confidence.',
    },
  ];

  return (
    <Container>
      <section className="my-10 rounded-3xl bg-base-200/70 px-4 py-10 md:px-10 md:py-12 lg:px-14">
        {/* header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-base-content md:text-3xl">How the Platform Works</h2>
          <p className="mt-2 text-sm text-neutral md:text-base">Three simple steps to find the right tutor.</p>
        </div>

        {/* 3 steps grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="rounded-2xl border border-base-300 bg-base-100 p-5">
              {/* number */}
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-content font-bold">{step.id}</div>
                <h3 className="text-base font-semibold text-base-content">{step.title}</h3>
              </div>

              <p className="mt-3 text-sm text-neutral">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HowItWorksSection;
