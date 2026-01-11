import React from 'react';
import CommonButton from '../../../../components/Buttons/CommonButton/CommonButton';
import { Link } from 'react-router';

const SecurityTab = () => {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#0f1a33]">Security</h2>
          <p className="mt-1 text-xs md:text-sm text-neutral/80">Password changes are handled securely via email verification.</p>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/70 px-3 py-1 text-[11px] font-semibold text-[#0f1a33]/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Secure
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {/* Disabled password form (visual only) */}
        <div className="rounded-2xl border border-base-200 bg-base-100/50 p-4">
          <div className="flex items-start justify-center md:justify-between flex-wrap-reverse  gap-3">
            <div>
              <p className="text-sm font-semibold text-[#0f1a33]">Change password</p>
              <p className="mt-1 text-xs text-neutral/60">For safety, we send a reset link instead of updating passwords directly here.</p>
            </div>

            <span className="rounded-full border border-base-200 bg-white px-3 py-1 text-[11px] font-semibold text-neutral/60">
              Email verification
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#0f1a33]/70">Current</label>
              <input
                disabled
                type="password"
                placeholder="••••••••"
                className="input w-full rounded-2xl bg-base-100/70 border border-base-200 opacity-60 cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#0f1a33]/70">New</label>
              <input
                disabled
                type="password"
                placeholder="••••••••"
                className="input w-full rounded-2xl bg-base-100/70 border border-base-200 opacity-60 cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#0f1a33]/70">Confirm</label>
              <input
                disabled
                type="password"
                placeholder="••••••••"
                className="input w-full rounded-2xl bg-base-100/70 border border-base-200 opacity-60 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Reset email */}
        <div className="rounded-2xl border border-base-200 bg-white p-5">
          <div className="flex items-start justify-center md:justify-between flex-wrap-reverse gap-4">
            <div>
              <p className="text-sm font-semibold text-[#0f1a33]">Reset via email</p>
              <p className="mt-1 text-xs text-neutral/80">We’ll email a secure reset link to your registered address.</p>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Recommended
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#0f1a33]/70">
              <span className="font-medium">Tip:</span> Check spam/junk if you don’t see the email in 1–2 minutes.
            </p>

            <Link to="/forgot-password">
              <CommonButton type="button" className="rounded-full px-5 py-2 text-xs md:text-sm font-medium shadow-md w-full sm:w-auto">
                Send reset email
              </CommonButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityTab;
