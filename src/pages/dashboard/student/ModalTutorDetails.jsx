import React from 'react';
import { formatDate } from '../../../utils/date';
import userProfileImg from '../../../assets/userProfile.png';

const ModalTutorDetails = ({ tutorDetails, onClose }) => {
  const t = tutorDetails;
  return (
    <div className="modal-box max-w-2xl p-0 overflow-hidden bg-base-100">
      {/* Header */}
      <div className="px-6 sm:px-8 py-5 bg-base-200 border-b border-base-300">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-5">
            <figure className="w-16">
              <img src={userProfileImg} alt="User Avater" />
            </figure>
            <div className="mt-2">
              <h3 className="text-lg sm:text-xl font-bold text-base-content">{t?.tutorName ? `${t.tutorName}'s Profile` : 'User Profile'}</h3>
              <p className="text-xs sm:text-sm text-neutral mt-1">Tutor details overview</p>
            </div>
          </div>

          <span className="badge bg-secondary text-secondary-content border-none capitalize">{t?.userType || 'teacher'}</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 sm:px-8 py-6">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full ring-2 ring-base-300">
              <img src="https://i.pravatar.cc/120?img=12" alt="Tutor avatar" />
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-base sm:text-lg font-semibold text-base-content truncate">{t?.tutorName || '-'}</p>
            <p className="text-sm text-neutral truncate">{t?.tutorEmail || '-'}</p>
          </div>
        </div>

        {/* Details  */}
        <div className="mt-6 rounded-2xl border border-base-300 overflow-hidden">
          {/* Email */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Email</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.tutorEmail || '-'}</p>
          </div>

          {/* Qualification */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Qualification</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.qualification || '-'}</p>
          </div>

          {/* Experience */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Experience</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.experience || 'Not specified yet'}</p>
          </div>

          {/* Expected Salary */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Expected Salary</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.expectedSalary || '-'}</p>
          </div>

          {/* Applied */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Applied On</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{formatDate(t.createdAt)}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} type="button" className="btn bg-primary text-primary-content hover:bg-secondary border-none">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTutorDetails;
