import React from 'react';
import Container from '../Container/Container';
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineUserGroup } from 'react-icons/hi';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <HiOutlineShieldCheck className="text-2xl text-primary" />,
      title: 'Verified Tutors',
      desc: 'Every tutor profile is reviewed so students can learn with confidence.',
    },
    {
      icon: <HiOutlineLightningBolt className="text-2xl text-primary" />,
      title: 'Fast Matching',
      desc: 'Get tutor applications quickly based on class, subject, and location.',
    },
    {
      icon: <HiOutlineUserGroup className="text-2xl text-primary" />,
      title: 'Student Focused',
      desc: 'Simple system designed to save time for students and parents.',
    },
  ];

  return (
    <Container>
      <section className="my-10 lg:my-16 px-4 py-10 md:px-10 md:py-12 lg:px-14">
        {/* header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-base-content md:text-3xl">Why Choose EduBridge</h2>
          <p className="mt-2 text-sm text-neutral md:text-base">Built to make tuition finding simple, fast, and trustworthy.</p>
        </div>

        {/* features grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((item, index) => (
            <div key={index} className="rounded-2xl border border-base-300 bg-base-100 p-5 text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-base-200">{item.icon}</div>

              <h3 className="text-base font-semibold text-base-content">{item.title}</h3>

              <p className="mt-2 text-sm text-neutral">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseUsSection;
