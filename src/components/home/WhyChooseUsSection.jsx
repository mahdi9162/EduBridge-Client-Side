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
    className="
      relative my-10 lg:my-16 overflow-hidden
      rounded-3xl
      border border-base-200/60
      bg-base-200/25
      px-4 py-10 md:px-10 md:py-12 lg:px-14
      shadow-[0_12px_40px_rgba(15,26,51,0.06)]
    "
  >
    {/* soft brand glows */}
    <div
      className="
        pointer-events-none absolute -top-32 left-1/2 h-64 w-[620px] -translate-x-1/2
        rounded-full blur-3xl opacity-70
        bg-[radial-gradient(circle,rgba(36,76,152,0.12),transparent_60%)]
      "
    />
    <div
      className="
        pointer-events-none absolute -bottom-44 -right-40 h-80 w-80
        rounded-full blur-3xl opacity-60
        bg-[radial-gradient(circle,rgba(15,26,51,0.10),transparent_60%)]
      "
    />

    {/* header */}
    <div className="text-center">
      <h2 className="text-2xl font-bold text-base-content md:text-3xl">
        Why Choose EduBridge
      </h2>
      <p className="mt-2 text-sm text-neutral md:text-base">
        Built to make tuition finding simple, fast, and trustworthy.
      </p>
    </div>

    {/* features grid (UNCHANGED) */}
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {features.map((item, index) => (
        <div
          key={index}
          className="
            group rounded-2xl p-0.5 overflow-hidden
            bg-linear-to-r from-[#0f1a33]/5 via-[#244c98]/45 to-[#0f1a33]/55
            shadow-[0_18px_45px_rgba(15,26,51,0.08)]
            transition
            hover:bg-size-[400%_400%]
            hover:animate-background
            hover:shadow-[0_22px_55px_rgba(15,26,51,0.12)]
            hover:[animation-duration:4s]
          "
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
