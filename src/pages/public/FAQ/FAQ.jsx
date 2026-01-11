import React from 'react';
import { Link } from 'react-router';

const FAQ = () => {
  return (
    <section className="bg-base-200 mt-5">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-neutral uppercase">Help Center</p>

          <h1 className="mt-2 text-xl md:text-4xl font-bold text-base-content">Frequently Asked Questions</h1>

          <p className="mt-3 mx-auto max-w-2xl text-xs md:text-base text-neutral/70">
            Quick answers to common questions about accounts, profiles, tutors, and security.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 space-y-3">
          {/* 1 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">What is EduBridge?</div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              EduBridge is a learning platform that connects students with tutors while keeping profiles, learning info, and security in one
              place.
            </div>
          </div>

          {/* 2 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Go to <strong>Dashboard → Profile Settings → Update Profile</strong>. Update your details and hit <strong>Save</strong>.
            </div>
          </div>

          {/* 3 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">How can I change my profile photo?</div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Open Profile Settings and tap the camera icon on the photo preview. Choose an image (PNG/JPG up to 2MB) and save it.
            </div>
          </div>

          {/* 4 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">Why is my email read-only?</div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Your email is used as a primary login identity, so it stays locked for security. If you need to change it, contact support.
            </div>
          </div>

          {/* 5 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Go to the login page and click <strong>Forgot password</strong>. We’ll send a reset link to your registered email.
            </div>
          </div>

          {/* 6 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">
              I didn’t receive the reset email. What now?
            </div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Check your spam/junk folder and wait 1–2 minutes. If it still doesn’t arrive, try again or contact support.
            </div>
          </div>

          {/* 7 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">
              Can students and tutors use the same account system?
            </div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Yes. The same system supports both roles. Some profile fields can differ depending on your role (student/tutor).
            </div>
          </div>

          {/* 8 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">How do I keep my account secure?</div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Use a strong password, don’t share login details, and always log out from shared devices.
            </div>
          </div>

          {/* 9 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">Can I delete my account permanently?</div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Yes. Go to <strong>Profile Settings → Danger Zone</strong> and follow the steps to delete your account. This action is
              permanent.
            </div>
          </div>

          {/* 10 */}
          <div className="collapse collapse-arrow rounded-2xl bg-base-100 border border-base-300">
            <input type="checkbox" />
            <div className="collapse-title text-sm md:text-base font-semibold text-base-content">
              What data is removed when I delete my account?
            </div>
            <div className="collapse-content text-xs md:text-sm text-neutral/70">
              Your profile and account-related data will be removed from our system. Some minimal logs may remain for security and
              compliance.
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 rounded-xl md:rounded-3xl bg-base-100 border border-base-300 p-6 text-center">
          <p className="text-sm text-neutral/70">Still have questions?</p>
          <Link to="/contact" className="mt-3 btn btn-primary text-xs md:text-sm rounded-full">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
