import React from 'react';
import Container from '../Container/Container';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router';
import leftimageHero from '../../assets/leftimageHero.webp';

const Hero = () => {
  return (
    <Container>
      <section className="py-10 md:py-14 lg:py-16 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* left */}
          <div className="text-center lg:text-left">
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-2 text-xs md:text-sm text-neutral">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-base-200">
                <HiOutlineShieldCheck className="text-[#244C98] text-base" />
              </span>
              Where Trust Shapes Learning.
            </div>

            {/* headline */}
            <h1 className="mt-5 text-xl md:text-3xlxl lg:text-5xl font-bold text-base-content">
              Find The Right Tutor,
              <span className="block mt-3">
                <span className="text-[#244C98]"> Faster</span> and With <span className="text-[#0F1A33]">Trust</span>
              </span>
            </h1>

            {/* subtext */}
            <p className="mt-4 mx-auto lg:mx-0 text-xs lg:text-base text-neutral md:max-w-xl">
              EduBridge helps students post tuition needs and connect with verified tutors—so learning stays smooth, transparent, and
              reliable.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
              <Link
                to="/tuitions"
                className="px-6 py-3 rounded-xl bg-[#0F1A33] text-white font-semibold shadow-sm hover:opacity-95 active:scale-[0.99] transition text-center"
              >
                Browse Tuitions
              </Link>

              <Link
                to="/dashboard"
                className="px-6 py-3 rounded-xl border border-base-300 bg-base-100 font-semibold text-base-content hover:bg-base-200 transition text-center"
              >
                Post Tuition
              </Link>
            </div>
          </div>

          {/* right img*/}
          <div className="order-first md:order-0">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-base-200">
              <img
                src={leftimageHero}
                alt="Students learning"
                className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
