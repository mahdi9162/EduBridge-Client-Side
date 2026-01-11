import React from 'react';
import CommonButton from '../../../../components/Buttons/CommonButton/CommonButton';
import { Link } from 'react-router';
import useRole from '../../../../hooks/useRole';

const MyProfileTab = ({ userDb, setTab }) => {
  const user = userDb;
  const { role } = useRole();

  const initials =
    user?.name
      ?.split(' ')
      ?.slice(0, 2)
      ?.map((w) => w[0])
      ?.join('')
      ?.toUpperCase() || 'U';

  return (
    <>
      {/* Header */}
      <div className="flex md:items-start justify-center md:justify-between gap-4">
        <div>
          <h2 className="text-center md:text-left text-lg font-semibold text-[#0f1a33]">My Profile</h2>
          <p className="mt-1 text-xs md:text-sm text-neutral/80">Your public profile details (read-only).</p>
        </div>
      </div>

      {/* Card */}
      <div
        className="mt-6 rounded-3xl border border-base-200 bg-base-100/70 p-5 md:p-6 shadow-lg backdrop-blur-xl"
        style={{ boxShadow: '0 22px 55px rgba(15,26,51,0.10)' }}
      >
        {/* Top row */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="h-14 w-14 overflow-hidden rounded-2xl bg-[#0f1a33] text-white grid place-items-center font-semibold shadow-md">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="h-full w-full object-cover shadow-lg" />
                ) : (
                  <span className="text-base">{initials}</span>
                )}
              </div>

              {/* Online dot */}
              <span
                className={[
                  'absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-base-100',
                  user.isOnline ? 'bg-emerald-500' : 'bg-base-300',
                ].join(' ')}
              />
            </div>

            {/* Name block */}
            <div>
              <p className="text-base font-semibold text-[#0f1a33]">{user.name || 'Unknown User'}</p>
            </div>
          </div>

          {/* chips */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Account Active
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {user.userType.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-base-200/80" />

        {/* Info grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoBox label="Email" value={user.email} />
          <InfoBox label="Phone" value={user.phone} />
          <InfoBox label="Location" value={user.location} />
          {
            role === 'student' ? <InfoBox label="Class Level" value={user.classLevel} />
            : <InfoBox label="Experience" value={user.experience} />
          }
          <InfoBox label="Subject" value={user.subject} />
          {
            role === 'student' ? <InfoBox label="Student ID" value={user._id} />
            : <InfoBox label="Teaching Class" value={user.teachingClass} />
          }
        </div>

        {/* Footer actions */}
        <div className="mt-6 text-center md:text-right">
          <CommonButton
            type="button"
            onClick={() => setTab('updateProfile')}
            className="rounded-full px-5 py-2 text-xs md:text-sm font-medium"
          >
            Update Profile Info →
          </CommonButton>
        </div>
      </div>
    </>
  );
};

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100/70 p-4">
      <p className="text-xs font-medium text-neutral/60">{label}</p>
      <p className="mt-2 text-xs md:text-sm font-semibold text-[#0f1a33] wrap-break-word">
        {value || <span className="font-medium text-neutral/50">Not set</span>}
      </p>
    </div>
  );
}

export default MyProfileTab;
