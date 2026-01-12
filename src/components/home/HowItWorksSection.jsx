import React from 'react';
import Container from '../Container/Container';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const sectionParent = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: 0.12,
      },
    },
  };

  const header = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const gridStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const stepCard = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const steps = [
    { id: '1', title: 'Post Your Tuition', desc: 'Tell us class, subject, location, and schedule — takes about 60 seconds.' },
    { id: '2', title: 'Get Matched Fast', desc: 'Verified tutors apply based on your needs. You compare profiles easily.' },
    { id: '3', title: 'Start Learning', desc: 'Confirm a tutor, set the routine, and begin sessions with confidence.' },
  ];

  return (
    <Container>
      <motion.section
        className="my-10 px-4 py-10 md:px-10 md:py-12 lg:px-14 relative lg:my-16 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(36,76,152,0.10),transparent_55%),linear-gradient(180deg,#f7f9ff_0%,#eef3fb_100%)]"
        variants={sectionParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* header */}
        <motion.div className="text-center" variants={header}>
          <h2 className="text-2xl font-bold text-base-content md:text-3xl">How the Platform Works</h2>
          <p className="mt-2 text-sm text-neutral md:text-base">Three simple steps to find the right tutor.</p>
        </motion.div>

        {/* wide cards grid */}
        <motion.div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3" variants={gridStagger}>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="ringCard shadow-[0_18px_45px_rgba(15,26,51,0.10)] min-h-[120px] hover:-translate-y-2 duration-500"
              variants={stepCard}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
            >
              <div className="ringCard-content p-6 h-full flex flex-col justify-center">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-content font-bold shadow-2xl">
                    {step.id}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base sm:text-[17px] font-semibold text-base-content">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default HowItWorksSection;
