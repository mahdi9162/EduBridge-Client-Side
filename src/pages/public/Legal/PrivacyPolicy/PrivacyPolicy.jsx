import React from 'react';
import { Link } from 'react-router';
import { HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineDocumentText } from 'react-icons/hi2';

const PrivacyPolicy = () => {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: '1. Overview',
      desc: 'This Privacy Policy explains how EduBridge collects, uses, and protects your information when you use our platform. By using EduBridge, you agree to the practices described here.',
    },
    {
      title: '2. Information We Collect',
      desc: 'We collect information you provide directly and some technical data automatically to keep the platform secure and working smoothly.',
      bullets: [
        'Account data: name, email, profile photo (optional), role (student/tutor).',
        'Profile details: education/qualification, subjects, location (as provided).',
        'Tuition / tutoring activity: posts, applications, messages (if applicable).',
        'Technical data: device/browser info, IP, logs, and basic analytics.',
      ],
    },
    {
      title: '3. How We Use Your Information',
      desc: 'We use collected data to operate EduBridge, improve experience, and keep accounts safe.',
      bullets: [
        'Create and manage user accounts and profiles.',
        'Enable tuition posting, tutor applications, and dashboard features.',
        'Provide support and respond to inquiries.',
        'Detect abuse/fraud, enforce rules, and improve security.',
        'Improve product UX and performance using aggregated analytics.',
      ],
    },
    {
      title: '4. Cookies & Analytics',
      desc: 'EduBridge may use cookies or similar technologies for essential functionality (like sessions) and to understand platform usage.',
      bullets: [
        'Essential cookies: keep you signed in and protect your session.',
        'Preference cookies: remember UI settings (when enabled).',
        'Analytics: helps us understand traffic and improve performance (aggregated).',
      ],
      hint: 'You can control cookies from your browser settings. Some features may not work if cookies are disabled.',
    },
    {
      title: '5. How We Share Information',
      desc: 'We do not sell your personal information. We only share it when necessary to operate and protect the platform.',
      bullets: [
        'With service providers (hosting, analytics) under strict agreements.',
        'When required by law, regulation, or valid legal request.',
        'To protect user safety, platform integrity, and prevent fraud/abuse.',
      ],
    },
    {
      title: '6. Data Security',
      desc: 'We apply reasonable technical and organizational measures to protect your information. However, no online system can be 100% secure.',
      bullets: [
        'Access controls and least-privilege practices.',
        'Secure authentication flows and session handling.',
        'Monitoring for suspicious activities where applicable.',
      ],
    },
    {
      title: '7. Data Retention',
      desc: 'We keep your data only as long as needed to provide services and meet legal/security requirements.',
      bullets: [
        'Account data stays until you delete your account or it’s no longer needed.',
        'Some logs may be retained for security and compliance for a limited period.',
      ],
    },
    {
      title: '8. Your Choices & Rights',
      desc: 'Depending on your location, you may have rights related to accessing, updating, or deleting your data.',
      bullets: [
        'Update your profile from Dashboard → Profile Settings.',
        'Request account deletion (if available) from the account settings.',
        'Contact us for help with privacy requests or corrections.',
      ],
    },
    {
      title: '9. Children’s Privacy',
      desc: 'EduBridge is not intended for children under 13. If we learn that we collected data from a child under 13, we will take steps to delete it.',
    },
    {
      title: '10. Changes to This Policy',
      desc: 'We may update this Privacy Policy from time to time. Continued use of EduBridge means you accept the updated policy.',
    },
    {
      title: '11. Contact Us',
      desc: 'If you have questions about privacy, please contact EduBridge support via the Contact page.',
    },
  ];

  return (
    <section className="relative mt-5 overflow-hidden">
      {/* brand wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(15,26,51,0.08),transparent_58%),linear-gradient(180deg,#ffffff_0%,#f5f8ff_45%,#eef3fb_100%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-neutral uppercase">Legal</p>

          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-base-content">Privacy Policy</h1>

          <p className="mt-3 mx-auto max-w-2xl text-xs md:text-base text-neutral/70">
            Learn what we collect, why we collect it, and how we keep your information protected.
          </p>

          {/* pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex w-full md:w-auto items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-base-200">
                <HiOutlineShieldCheck className="text-secondary text-lg" />
              </span>
              Security-first approach
            </div>

            <div className="inline-flex items-center gap-2 w-full md:w-auto rounded-full border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-base-200">
                <HiOutlineLockClosed className="text-secondary text-lg" />
              </span>
              We don’t sell personal data
            </div>

            <div className="inline-flex items-center gap-2 rounded-full w-full md:w-auto border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-[0_10px_30px_rgba(15,26,51,0.06)]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-base-200">
                <HiOutlineDocumentText className="text-secondary text-lg" />
              </span>
              Clear & readable policy
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="mt-10 rounded-3xl border border-base-200/70 bg-base-100/75 p-6 md:p-8 backdrop-blur shadow-[0_18px_55px_rgba(15,26,51,0.08)]">
          {/* quick note */}
          <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4 md:p-5">
            <p className="text-sm md:text-base font-semibold text-base-content">Quick note</p>
            <p className="mt-1 text-xs md:text-sm text-neutral/70 max-w-[72ch]">
              Keep your account safe: don’t share passwords, avoid logging in on public devices, and log out after use on shared machines.
            </p>
          </div>

          {/* Sections */}
          <div className="mt-8 space-y-5">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-base-200/70 bg-base-100 p-5 md:p-6 shadow-[0_10px_30px_rgba(15,26,51,0.06)]"
              >
                <h2 className="text-base md:text-lg font-semibold text-base-content">{s.title}</h2>

                <p className="mt-2 text-xs md:text-sm text-neutral/70 max-w-[78ch]">{s.desc}</p>

                {s.bullets?.length ? (
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-neutral/70">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/70" />
                        <span className="max-w-[78ch]">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {s.hint ? (
                  <div className="mt-4 rounded-xl border border-base-200 bg-base-200/40 p-4">
                    <p className="text-xs md:text-sm text-neutral/70">{s.hint}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-base-200 bg-base-200/35 p-5 md:flex-row">
            <div>
              <p className="text-sm md:text-base font-semibold text-base-content">Need more help?</p>
              <p className="mt-1 text-xs md:text-sm text-neutral/70">If anything is unclear, reach out and we’ll help you quickly.</p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <Link to="/contact" className="btn btn-primary text-xs md:text-sm rounded-full w-full md:w-auto">
                Contact Support
              </Link>
              <Link to="/terms" className="btn btn-outline text-xs md:text-sm rounded-full w-full md:w-auto">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* footer note */}
          <div className="mt-8 text-center text-xs text-neutral/60">Last updated: {year}</div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
