import React from 'react';
import Container from '../Container/Container';
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineUserGroup } from 'react-icons/hi';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <HiOutlineShieldCheck className="text-xl md:text-2xl text-primary" />,
      title: 'Verified Tutors',
      desc: 'Every tutor profile is reviewed so students can learn with confidence.',
    },
    {
      icon: <HiOutlineLightningBolt className="text-xl md:text-2xl text-primary" />,
      title: 'Fast Matching',
      desc: 'Get tutor applications quickly based on class, subject, and location.',
    },
    {
      icon: <HiOutlineUserGroup className="text-xl md:text-2xl text-primary" />,
      title: 'Student Focused',
      desc: 'Simple system designed to save time for students and parents.',
    },
  ];

  return (
    <Container>
      <section
        className="relative my-10 lg:my-16 overflow-hidden rounded-3xl px-4 md:px-10 py-10 bg-[radial-gradient(circle_at_80%_10%,rgba(36,76,152,0.08),transparent_58%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_70%,#eef3fb_100%)]"
      >

        {/* header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-base-content md:text-3xl">Why Choose EduBridge</h2>
          <p className="mt-2 text-sm text-neutral md:text-base">Built to make tuition finding simple, fast, and trustworthy.</p>
        </div>

        {/* features grid (UNCHANGED) */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-0.5 overflow-hidden bg-linear-to-r from-[#0f1a33]/5 via-[#244c98]/45 to-[#0f1a33]/55 shadow-[0_18px_45px_rgba(15,26,51,0.08)] transition-all hover:bg-size-[400%_400%] hover:animate-background hover:shadow-[0_22px_55px_rgba(15,26,51,0.12)] hover:[animation-duration:4s] hover:-translate-y-2 duration-500"
            >
              <div className="h-full rounded-[14px] bg-base-100 p-5 text-center border border-base-200/60">
                <div className="relative mx-auto mb-4 grid h-10 md:h-14 w-10 md:w-14 place-items-center rounded-full bg-base-200 ring-1 ring-primary/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 animate-[float_3s_ease-in-out_infinite]">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-base-content">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseUsSection;
