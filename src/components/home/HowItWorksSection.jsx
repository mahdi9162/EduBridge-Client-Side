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

        {/* wide cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="ringCard shadow-[0_18px_45px_rgba(15,26,51,0.10)] min-h-[120px]">
              <div className="ringCard-content p-6 h-full flex flex-col justify-center">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-content font-bold">
                    {step.id}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base sm:text-[17px] font-semibold text-base-content">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HowItWorksSection;
