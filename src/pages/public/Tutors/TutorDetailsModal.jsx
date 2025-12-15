import React from 'react';
import { formatDate } from '../../../utils/date';

const TutorDetailsModal = ({ selectedTutor, onClose }) => {
  const t = selectedTutor;
  const joined = t?.createdAt ? formatDate(t.createdAt) : '-';

  return (
    <div className="modal-box max-w-2xl p-0 overflow-hidden bg-base-100">
      {/* Header */}
      <div className="px-6 sm:px-8 py-5 bg-base-200 border-b border-base-300">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-md sm:text-xl font-semibold text-base-content">{t?.name ? `${t.name}'s Profile` : 'Tutor Profile'}</h3>
            <p className="text-xs sm:text-sm text-neutral mt-1">Tutor details overview</p>
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
            <p className="text-base sm:text-lg font-semibold text-base-content truncate">{t?.name || '-'}</p>
            <p className="text-sm text-neutral truncate">{t?.email || '-'}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="badge bg-accent text-accent-content border-none">{t?.subject || 'No subject'}</span>
              <span className="badge bg-base-200 text-base-content border border-base-300">{t?.location || 'No location'}</span>
            </div>
          </div>
        </div>

        {/* Details  */}
        <div className="mt-6 rounded-2xl border border-base-300 overflow-hidden">
          {/* Email */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Email</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.email || '-'}</p>
          </div>

          {/* Phone */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Phone</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.phone || '-'}</p>
          </div>

          {/* Subject */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Subject</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.subject || '-'}</p>
          </div>

          {/* Teaching Class */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Teaching Class</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.teachingClass || 'Not specified yet'}</p>
          </div>

          {/* Location */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Location</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{t?.location || '-'}</p>
          </div>

          {/* Joined */}
          <div className="flex justify-between gap-2 sm:gap-4 px-5 py-3 border-b border-base-300">
            <p className="sm:col-span-4 text-xs font-semibold text-base-content">Joined</p>
            <p className="sm:col-span-8 text-xs md:text-sm text-neutral break-all">{joined}</p>
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

export default TutorDetailsModal;
