import React from 'react';
import { Link } from 'react-router';
import { FaCookieBite } from 'react-icons/fa';
import { HiOutlineShieldCheck, HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const CookiePolicy = () => {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: '1. What Are Cookies?',
      desc: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.',
    },
    {
      title: '2. How EduBridge Uses Cookies',
      desc: 'EduBridge uses cookies to ensure core functionality, improve performance, and enhance security.',
      bullets: [
        'Maintain secure login sessions and prevent unauthorized access.',
        'Remember user preferences and UI settings (where applicable).',
        'Analyze usage patterns to improve platform performance.',
      ],
    },
    {
      title: '3. Types of Cookies We Use',
      bullets: [
        'Essential cookies – required for login, navigation, and security.',
        'Functional cookies – remember preferences and settings.',
        'Analytics cookies – help us understand how users interact with EduBridge.',
      ],
    },
    {
      title: '4. Third-Party Cookies',
      desc: 'Some trusted third-party services (such as analytics providers) may place cookies to help us understand platform usage. These cookies never contain sensitive personal information.',
    },
    {
      title: '5. Managing Cookies',
      desc: 'You can control or delete cookies from your browser settings at any time.',
      hint: 'Disabling essential cookies may affect login, dashboard access, and some core features.',
    },
    {
      title: '6. Updates to This Policy',
      desc: 'We may update this Cookie Policy when necessary. Any changes will be reflected on this page.',
    },
  ];

  return (
    <section className="relative mt-5 overflow-hidden">
      {/* soft brand background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(36,76,152,0.10),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(15,26,51,0.08),transparent_60%),linear-gradient(180deg,#ffffff_0%,#f5f8ff_45%,#eef3fb_100%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-neutral uppercase">Legal</p>

          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-base-content">Cookie Policy</h1>

          <p className="mt-3 mx-auto max-w-2xl text-xs md:text-base text-neutral/70">
            Learn how EduBridge uses cookies to keep the platform secure, reliable, and easy to use.
          </p>

          {/* info pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full w-full md:w-auto border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-sm">
              <FaCookieBite className="text-secondary text-lg" />
              Essential cookies only
            </div>

            <div className="inline-flex items-center gap-2 rounded-full w-full md:w-auto border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-sm">
              <HiOutlineShieldCheck className="text-secondary text-lg" />
              Privacy-focused
            </div>

            <div className="inline-flex items-center gap-2 rounded-full w-full md:w-auto border border-base-200 bg-base-100/70 px-4 py-2 text-xs md:text-sm text-neutral backdrop-blur shadow-sm">
              <HiOutlineAdjustmentsHorizontal className="text-secondary text-lg" />
              User-controlled
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="mt-10 rounded-3xl border border-base-200/70 bg-base-100/75 p-6 md:p-8 backdrop-blur shadow-[0_18px_55px_rgba(15,26,51,0.08)]">
          {/* sections */}
          <div className="space-y-5">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-[0_10px_30px_rgba(15,26,51,0.06)]"
              >
                <h2 className="text-sm md:text-lg font-semibold text-base-content">{s.title}</h2>

                {s.desc && <p className="mt-2 text-xs md:text-sm text-neutral/70 max-w-[75ch]">{s.desc}</p>}

                {s.bullets && (
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-neutral/70">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.hint && (
                  <div className="mt-4 rounded-xl border border-base-200 bg-base-200/40 p-4">
                    <p className="text-xs md:text-sm text-neutral/70">{s.hint}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* bottom CTA */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-base-200 bg-base-200/35 p-5">
            <div>
              <p className="text-sm md:text-base font-semibold text-base-content">Want to learn more?</p>
              <p className="mt-1 text-xs md:text-sm text-neutral/70">Read our full legal documents for complete transparency.</p>
            </div>

            <div className="flex w-full md:w-auto flex-col md:flex-row gap-3">
              <Link to="/privacy-policy" className="btn text-xs md:text-sm btn-outline rounded-full w-full md:w-auto">
                Privacy Policy
              </Link>
              <Link to="/terms" className="btn btn-primary text-xs md:text-sm rounded-full w-full md:w-auto">
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-neutral/60">© {year} EduBridge. All rights reserved.</div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
