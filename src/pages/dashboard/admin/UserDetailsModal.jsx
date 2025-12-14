import React from 'react';
import { formatDate } from '../../../utils/date';
import userProfileImg from '../../../assets/userProfile.png';

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  const joined = user?.createdAt ? formatDate(user.createdAt) : '-';
  const role = (user?.userType || '-').toLowerCase();

  // role wise badge color
  const roleBadge =
    role === 'admin'
      ? 'bg-primary text-primary-content'
      : role === 'teacher'
      ? 'bg-secondary text-secondary-content'
      : 'bg-accent text-accent-content border border-base-300';

  return (
    <div className="modal-box max-w-2xl p-0 overflow-hidden bg-base-100">
      {/* Header */}
      <div className="px-6 sm:px-8 py-5 bg-base-200 border-b border-base-300">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-5">
            <figure className="w-16">
              <img src={userProfileImg} alt="User Avater" />
            </figure>
            <div className='mt-2'>
              <h3 className="text-lg sm:text-xl font-bold text-base-content">{user?.name ? `${user.name}'s Profile` : 'User Profile'}</h3>
              <p className="text-xs sm:text-sm text-neutral mt-1">User details overview</p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${roleBadge}`}>
            {role ? role.charAt(0).toUpperCase() + role.slice(1) : '-'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 sm:px-8 py-6">
        {/* mini info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl border border-base-300 bg-base-100 p-3">
            <p className="text-[11px] text-neutral">Email</p>
            <p className="text-sm font-semibold text-base-content break-all">{user?.email || '-'}</p>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-100 p-3">
            <p className="text-[11px] text-neutral">Joined</p>
            <p className="text-sm font-semibold text-base-content">{joined}</p>
          </div>
        </div>

        {/* details table-ish */}
        <div className="rounded-2xl border border-base-300 overflow-hidden">
          <div className="grid grid-cols-1">
            <Row label="Phone" value={user?.phone} />
            <Row label="Subject" value={user?.subject} />
            <Row label="Teaching Class" value={user?.teachingClass} />
            <Row label="Class Level" value={user?.classLevel} />
            <Row label="Firebase UID" value={user?.firebaseUID} mono />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-8 py-4 bg-base-200 border-t border-base-300 flex flex-col sm:flex-row gap-2 justify-end">
        <button type="button" onClick={onClose} className="btn btn-primary h-10 sm:h-11 rounded-full px-6 normal-case">
          Close
        </button>
      </div>
    </div>
  );
};

function Row({ label, value, mono }) {
  const show = value && String(value).trim() ? value : '-';

  return (
    <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-base-300 last:border-b-0">
      <p className="text-sm font-semibold text-base-content">{label}</p>
      <p className={`text-sm text-base-content/80 text-right break-all ${mono ? 'font-mono text-xs sm:text-sm' : ''}`}>{show}</p>
    </div>
  );
}

export default UserDetailsModal;
