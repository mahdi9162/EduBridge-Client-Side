import React from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck, HiOutlineDocumentText } from 'react-icons/hi2';

const TermsOfUse = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <section className="relative mt-5 overflow-hidden">
      {/* Brand wash bg (subtle + professional) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(15,26,51,0.08),transparent_60%),linear-gradient(180deg,#ffffff_0%,#f5f8ff_42%,#eef3fb_100%)]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-28 -left-24 h-72 w-72 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,rgba(36,76,152,0.22),transparent_62%)]" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-55 bg-[radial-gradient(circle,rgba(15,26,51,0.18),transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-neutral uppercase">Legal</p>

          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-base-content">Terms of Use</h1>

          <p className="mt-3 mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-neutral/70">
            Please read these terms carefully before using EduBridge.
          </p>

          {/* mini badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-base-200/70 bg-base-100/70 px-3.5 py-2 text-[11px] sm:text-xs text-neutral backdrop-blur shadow-[0_12px_34px_rgba(15,26,51,0.08)]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-base-200/70 ring-1 ring-primary/15">
              <HiOutlineShieldCheck className="text-primary text-base" />
            </span>
            Clear rules • Safer platform • Better experience
          </div>
        </div>

        {/* Content card */}
        <div className="mt-10 rounded-3xl border border-base-200/70 bg-base-100/75 backdrop-blur p-6 md:p-8 shadow-[0_18px_55px_rgba(15,26,51,0.10)]">
          {/* Top strip */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <HiOutlineDocumentText className="text-xl" />
              </span>
              <div>
                <p className="text-sm sm:text-base font-semibold text-base-content">EduBridge Terms</p>
                <p className="text-[11px] sm:text-xs text-neutral/70">Last updated: {lastUpdated}</p>
              </div>
            </div>

            {/* Optional quick link */}
            <Link to="/privacy-policy" className="text-[11px] sm:text-xs font-semibold text-primary hover:underline">
              View Privacy Policy →
            </Link>
          </div>

          <div className="space-y-7">
            {/* SECTION helper */}
            {[
              {
                title: '1. Acceptance of Terms',
                body: 'By accessing or using EduBridge, you agree to be bound by these Terms of Use. If you do not agree, please do not use our platform.',
              },
              {
                title: '2. Eligibility',
                body: 'You must be at least 13 years old to use EduBridge. By using the platform, you confirm that the information you provide is accurate and complete.',
              },
              {
                title: '3. User Accounts',
                body: 'You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.',
              },
              {
                title: '4. Use of the Platform',
                body: 'EduBridge may only be used for lawful educational purposes. You agree not to misuse the platform, attempt unauthorized access, or disrupt services.',
              },
              {
                title: '5. Tutor & Student Responsibilities',
                body: 'Tutors and students are responsible for their interactions. EduBridge does not guarantee academic outcomes or tutor performance.',
              },
              {
                title: '6. Payments & Services',
                body: 'Any paid services, fees, or transactions are subject to additional terms. EduBridge is not responsible for third-party payment issues.',
              },
              {
                title: '7. Account Termination',
                body: 'We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior.',
              },
              {
                title: '8. Privacy',
                body: 'Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.',
              },
              {
                title: '9. Limitation of Liability',
                body: 'EduBridge is provided “as is”. We are not liable for any indirect or consequential damages arising from platform usage.',
              },
              {
                title: '10. Changes to Terms',
                body: 'We may update these Terms of Use from time to time. Continued use of EduBridge means you accept the updated terms.',
              },
            ].map((item) => (
              <div key={item.title} className="relative rounded-2xl border border-base-200/70 bg-base-100/60 px-4 py-4 sm:px-5 sm:py-5">
                {/* left accent */}
                <span className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[linear-gradient(180deg,rgba(36,76,152,0.55),rgba(15,26,51,0.25))]" />

                <div className="pl-3">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-base-content">{item.title}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-neutral/70 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 rounded-2xl border border-base-200/70 bg-[linear-gradient(180deg,rgba(36,76,152,0.06),rgba(15,26,51,0.03))] p-4 text-center">
            <p className="text-[11px] sm:text-xs text-neutral/70">If you have questions about these terms, please contact support.</p>
            <Link to="/contact" className="mt-3 btn btn-primary btn-sm rounded-full">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
