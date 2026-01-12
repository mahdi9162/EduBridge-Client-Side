import React from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import { FiArrowRight } from 'react-icons/fi';
import Container from '../Container/Container';

const HomeFAQ = () => {
  return (
    <Container>
      <section className="mt-10 lg:mt-14">
        <div
          className="
          relative overflow-hidden rounded-4xl border border-base-200/70
          bg-[radial-gradient(circle_at_18%_20%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(15,26,51,0.08),transparent_50%),linear-gradient(180deg,#ffffff_0%,#f5f8ff_45%,#eef3fb_100%)]
          px-4 sm:px-6 lg:px-10 py-10 sm:py-12
          shadow-[0_18px_55px_rgba(15,26,51,0.08)]
        "
        >
          {/* glow blobs */}
          <div
            className="
            pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full blur-3xl opacity-70
            bg-[radial-gradient(circle,rgba(36,76,152,0.22),transparent_62%)]
          "
          />
          <div
            className="
            pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60
            bg-[radial-gradient(circle,rgba(15,26,51,0.18),transparent_65%)]
          "
          />

          <div className="relative max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/80 px-3 py-2 text-xs sm:text-sm text-neutral backdrop-blur">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/70 text-secondary ring-1 ring-secondary/15">
                    <HiOutlineShieldCheck className="text-base" />
                  </span>
                  Help Center • Quick answers
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-base-content leading-tight">Frequently asked questions</h2>

                <p className="mt-2 text-xs md:text-base text-neutral/80">
                  Short answers about tutors, applications, and safety—so you can move fast with confidence.
                </p>
              </div>

              {/* CTA (desktop) */}
              <div className="hidden lg:flex">
                <Link
                  to="/faq"
                  className="
                  inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                  bg-secondary text-white shadow-[0_12px_30px_rgba(15,26,51,0.12)]
                  hover:opacity-95 transition
                "
                >
                  View all FAQs <FiArrowRight />
                </Link>
              </div>
            </div>

            {/* Body */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* FAQ list */}
              <div className="lg:col-span-8 space-y-3">
                {/* 1 */}
                <div className="collapse collapse-arrow rounded-3xl bg-base-100/85 border border-base-200/70 backdrop-blur shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
                  <input type="checkbox" defaultChecked />
                  <div className="collapse-title text-sm sm:text-base font-semibold text-base-content">How do tutors get verified?</div>
                  <div className="collapse-content text-xs md:text-sm text-neutral/80 leading-relaxed">
                    We review tutor profiles and key details before they can apply to tuition posts. This keeps the platform safer and more
                    trustworthy.
                  </div>
                </div>

                {/* 2 */}
                <div className="collapse collapse-arrow rounded-3xl bg-base-100/85 border border-base-200/70 backdrop-blur shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
                  <input type="checkbox" />
                  <div className="collapse-title text-sm sm:text-base font-semibold text-base-content">
                    How fast will I get tutor applications?
                  </div>
                  <div className="collapse-content text-xs md:text-sm text-neutral/80 leading-relaxed">
                    After you post tuition details (class, subject, location), tutors can apply quickly. You’ll see applications in your
                    dashboard.
                  </div>
                </div>

                {/* 3 */}
                <div className="collapse collapse-arrow rounded-3xl bg-base-100/85 border border-base-200/70 backdrop-blur shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
                  <input type="checkbox" />
                  <div className="collapse-title text-sm sm:text-base font-semibold text-base-content">Is my contact information safe?</div>
                  <div className="collapse-content text-xs md:text-sm text-neutral/80 leading-relaxed">
                    Yes—avoid sharing phone numbers publicly. Keep communication inside the platform until you’re confident about the match.
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden pt-2">
                  <Link
                    to="/faq"
                    className="
                    inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold bg-secondary text-white shadow-[0_12px_30px_rgba(15,26,51,0.12)] hover:opacity-95 transition text-xs md:text-sm "
                  >
                    View all FAQs <FiArrowRight />
                  </Link>
                </div>
              </div>

              {/* Side card */}
              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-base-200/70 bg-base-100/80 backdrop-blur p-6 shadow-[0_14px_40px_rgba(15,26,51,0.08)]">
                  <p className="text-sm font-semibold text-base-content">Need personal help?</p>
                  <p className="mt-2 text-sm text-neutral/80 leading-relaxed">
                    If something doesn’t look right, reach out—we usually reply within 24 hours.
                  </p>

                  <div className="mt-5 ">
                    <Link
                      to="/contact"
                      className="
                      inline-flex w-full items-center justify-center rounded-full px-5 py-2.5  bg-primary text-white hover:opacity-95 transition text-xs md:text-sm"
                    >
                      Contact Support
                    </Link>
                  </div>

                  <div className="mt-5 rounded-2xl border border-base-200 bg-base-200/40 px-4 py-3 text-xs text-neutral">
                    Tip: The more specific your tuition post is, the faster you’ll get the right tutor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomeFAQ;
