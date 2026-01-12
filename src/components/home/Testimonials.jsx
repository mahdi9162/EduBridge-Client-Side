import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Container from '../Container/Container';

const HomeTestimonials = () => {
  const testimonials = [
    {
      quote: 'I finally feel confident letting my son learn online. EduBridge made it simple to find a tutor I can actually trust.',
      name: 'Razia Ahmed',
      role: 'Parent of Class 7 Student',
      location: 'Dhaka',
    },
    {
      quote: 'The tutor verification gave me peace of mind. Communication was clear, and the whole process felt safe.',
      name: 'Mahmudul Hasan',
      role: 'Parent of Class 9 Student',
      location: 'Chattogram',
    },
    {
      quote: 'What I liked most was transparency. No hidden steps, no confusion — just reliable tutors.',
      name: 'Farhana Islam',
      role: 'Parent of College Student',
      location: 'Rajshahi',
    },
  ];

  return (
    <Container>
      <section className="mt-10 lg:mt-14">
        <div className="mx-auto px-3 sm:px-6">
          {/* Section */}
          <div
            className="
            rounded-4xl border border-base-200/70 bg-base-200/55 shadow-[0_18px_45px_rgba(15,26,51,0.06)] px-4 sm:px-6 lg:px-10 py-10 lg:py-14 bg-[radial-gradient(circle_at_15%_20%,rgba(36,76,152,0.12),transparent_45%), radial-gradient(circle_at_85%_20%,rgba(15,26,51,0.10),transparent_40%)]"
          >
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
              <p className="text-xs font-semibold tracking-widest text-neutral uppercase">Trusted by Parents</p>

              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-base-content">Trusted by Parents.</h2>

              <p className="mt-3 text-xs sm:text-base text-neutral/70">Parents choose EduBridge because trust and safety come first.</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className=" group relative rounded-3xl p-[1.5px] bg-[linear-gradient(135deg,rgba(36,76,152,0.28),rgba(15,26,51,0.18),rgba(36,76,152,0.28))] transition-all duration-300 hover:bg-[linear-gradient(135deg,rgba(36,76,152,0.55),rgba(15,26,51,0.28),rgba(36,76,152,0.55))]"
                >
                  {/* glow */}
                  <div
                    className="
                    pointer-events-none absolute inset-0 rounded-3xl blur-xl opacity-0
                    bg-secondary/30 transition-all duration-300 group-hover:opacity-35 "
                  />

                  {/* card */}
                  <div
                    className="
                    relative h-full rounded-3xl bg-base-100
                    border border-base-200/70
                    p-6 shadow-[0_18px_45px_rgba(15,26,51,0.08)]  transition-all duration-300
                    group-hover:-translate-y-1 group-hover:shadow-[0_22px_55px_rgba(15,26,51,0.12)]
                  "
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="
                        h-10 w-10 rounded-2xl bg-accent/70
                        flex items-center justify-center
                        text-secondary ring-1 ring-secondary/15
                        transition-all duration-300
                        group-hover:scale-[1.03]
                        group-hover:ring-secondary/25
                      "
                      >
                        <FaQuoteLeft className="text-lg" />
                      </span>

                      <p className="text-sm sm:text-base text-base-content leading-relaxed">“{item.quote}”</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-base-200">
                      <p className="font-semibold text-base-content">{item.name}</p>
                      <p className="text-xs text-neutral">
                        {item.role} • {item.location}
                      </p>

                      {/* accent line */}
                      <div
                        className="
                        mt-3 h-0.5 w-14 rounded-full
                        bg-[linear-gradient(90deg,rgba(36,76,152,0.95),rgba(15,26,51,0.75))]
                        opacity-30 transition-all duration-300
                        group-hover:opacity-60
                        group-hover:w-20
                      "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: tiny note (remove if you don’t want extra text) */}
            <p className="mt-8 text-center text-xs text-neutral/60">
              Tip: Strong tutor verification keeps the platform safer for everyone.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomeTestimonials;
