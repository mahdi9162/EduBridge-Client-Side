import React from 'react';

const SecurityTab = () => {
  return (
<>
  <h2 className="text-lg font-semibold text-[#0f1a33]">Security</h2>
  <p className="mt-1 text-sm text-neutral/60">
    Update password and sign-in settings.
  </p>

  <div className="mt-6 space-y-4">
    {/* Current password */}
    <div className="flex flex-col gap-1">
      <label className="text-xs opacity-60">Current password</label>
      <input
        type="password"
        placeholder="••••••••"
        className="input w-full rounded-2xl bg-base-100/80"
      />
    </div>

    {/* New password */}
    <div className="flex flex-col gap-1">
      <label className="text-xs opacity-60">New password</label>
      <input
        type="password"
        placeholder="••••••••"
        className="input w-full rounded-2xl bg-base-100/80"
      />
    </div>

    {/* Confirm password */}
    <div className="flex flex-col gap-1">
      <label className="text-xs opacity-60">Confirm new password</label>
      <input
        type="password"
        placeholder="••••••••"
        className="input w-full rounded-2xl bg-base-100/80"
      />
    </div>

    {/* Update button */}
    <button
      type="button"
      className="mt-2 w-full rounded-full bg-[#0f1a33] px-6 py-3 text-sm font-medium text-white shadow-md hover:opacity-90 transition"
    >
      Update Password
    </button>

    {/* Forgot password box */}
    <div className="rounded-2xl border border-base-200 bg-base-100/70 p-4">
      <p className="text-sm font-semibold text-[#0f1a33]">Forgot password?</p>
      <p className="mt-1 text-xs text-neutral/60">
        We’ll send a reset link to your email.
      </p>

      <button
        type="button"
        className="mt-3 rounded-full border border-base-200 bg-white px-4 py-2 text-sm font-medium text-[#0f1a33] hover:bg-base-100 transition"
      >
        Send reset email
      </button>
    </div>
  </div>
</>

  );
};

export default SecurityTab;
