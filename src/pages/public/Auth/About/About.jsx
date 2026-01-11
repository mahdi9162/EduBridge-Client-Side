import React from 'react';
import { FaCheckCircle, FaUsers, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const About = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) navigate('/dashboard');
    else navigate('/signup');
  };

  return (
    <section className="relative mt-5 overflow-hidden">
      {/* soft brand wash */}
      <div
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_20%_10%,rgba(36,76,152,0.08),transparent_55%),
              radial-gradient(circle_at_80%_30%,rgba(15,26,51,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral uppercase">About EduBridge</p>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-base-content">Where trust shapes learning</h2>

          <p className="mt-3 mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-neutral/70 leading-relaxed">
            EduBridge helps students connect with the right tutors, stay organized, and learn with confidence — all in one simple platform.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Left */}
          <div className="rounded-3xl bg-base-100 border border-base-300 p-5 sm:p-6 md:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-base-content">Our mission</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral/70 leading-relaxed">
                  Make learning accessible, reliable, and human. We focus on clarity, safety, and real results — so students and tutors can
                  build long-term success.
                </p>
              </div>

              <span
                className="shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1
                  text-[11px] sm:text-xs font-semibold
                  bg-base-100/60 text-base-content backdrop-blur
                  ring-1 ring-base-300/60 shadow-sm"
              >
                <span
                  className="grid h-4 w-4 place-items-center rounded-full
                    bg-primary/15 text-primary ring-1 ring-primary/20 text-[10px] leading-none"
                >
                  ✓
                </span>
                Trusted
              </span>
            </div>

            {/* bullets */}
            <div className="mt-5 sm:mt-6 grid gap-3">
              {[
                'Simple profiles, clean dashboards, and a smooth learning flow.',
                'Tutor matching that respects goals, location, and subjects.',
                'Secure sign-in and account controls built for trust.',
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-primary text-sm sm:text-base" />
                  <p className="text-xs sm:text-sm text-neutral/80 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-7">
              <button onClick={handleGetStarted} className="btn btn-primary rounded-full btn-sm sm:btn-md">
                Get started
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4">
            {/* Feature Card */}
            <div className="rounded-3xl bg-base-100 border border-base-300 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-primary text-primary-content">
                  <FaUsers className="text-base sm:text-lg leading-none" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-base-content text-sm sm:text-base">Built for students & tutors</h4>
                  <p className="text-xs sm:text-sm text-neutral/70 leading-relaxed">Role-based experience that stays simple.</p>
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="rounded-3xl bg-base-100 border border-base-300 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-primary text-primary-content">
                  <FaShieldAlt className="text-base sm:text-lg leading-none" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-base-content text-sm sm:text-base">Security-first</h4>
                  <p className="text-xs sm:text-sm text-neutral/70 leading-relaxed">Protected accounts and clean settings control.</p>
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="rounded-3xl bg-base-100 border border-base-300 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="shrink-0 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-primary text-primary-content">
                  <FaRocket className="text-base sm:text-lg leading-none" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-base-content text-sm sm:text-base">Fast & modern UI</h4>
                  <p className="text-xs sm:text-sm text-neutral/70 leading-relaxed">Minimal design, focused on clarity and speed.</p>
                </div>
              </div>

              {/* mini stats */}
              {/* Mobile: grid (no weird wrap), Tablet+: pills */}
              <div className="mt-4 sm:mt-5">
                <div className="grid grid-cols-1 gap-2 sm:hidden">
                  {[
                    { label: 'Matching', value: 'Smart' },
                    { label: 'Profiles', value: 'Clean' },
                    { label: 'Experience', value: 'Smooth' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl
                        bg-base-200/70 px-4 py-2
                        text-xs text-base-content ring-1 ring-base-300/50"
                    >
                      <span className="text-neutral/70">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden sm:flex sm:flex-wrap sm:gap-3">
                  {[
                    { label: 'Matching', value: 'Smart' },
                    { label: 'Profiles', value: 'Clean' },
                    { label: 'Experience', value: 'Smooth' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full
                        bg-base-200/70 px-4 py-2
                        text-sm font-medium text-base-content
                        ring-1 ring-base-300/50"
                    >
                      <span className="text-neutral/70">{item.label}</span>
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 sm:mt-10 rounded-3xl bg-primary text-primary-content p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Ready to improve your learning journey?</h3>
              <p className="mt-1 text-xs sm:text-sm opacity-90 leading-relaxed">
                Join EduBridge and keep everything — profile, learning info, and security — in one place.
              </p>
            </div>

            <Link to="/dashboard" className="self-start md:self-auto">
              <button className="btn btn-sm sm:btn-md bg-base-100 text-base-content hover:bg-base-200 rounded-full border-0">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
