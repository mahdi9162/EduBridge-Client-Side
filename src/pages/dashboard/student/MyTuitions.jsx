import React from 'react';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoMdContacts } from 'react-icons/io';
import { MdOutlineMobileFriendly, MdOutlinePostAdd } from 'react-icons/md';

const MyTuitions = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-300/60">
        {/* Header */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-7 pb-3">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-base-content">My Tuitions</h3>
            <p className="text-xs sm:text-sm text-neutral">Track and manage all your tuition posts.</p>
          </div>
          <div className="mt-4 border-t border-base-300/70" />
        </div>

        {/* Info stats */}
        <div className="px-5 sm:px-8 pb-4 sm:pb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <MdOutlinePostAdd className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Total Posts: <span className="font-semibold">12</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <FaClockRotateLeft className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Pending: <span className="font-semibold">2</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <IoMdContacts className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Matched: <span className="font-semibold">8</span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2.5">
              <MdOutlineMobileFriendly className="text-secondary text-lg" />
              <p className="text-xs sm:text-sm font-medium text-base-content">
                Closed: <span className="font-semibold">2</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tuition details card */}
        <div className="px-5 sm:px-8 pb-6 sm:pb-8">
          <div className="bg-base-200 rounded-2xl px-4 sm:px-5 py-4 sm:py-5">
            {/* Title + status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-base-content">Math tutor for Class 8</h3>
              <div className="badge badge-soft badge-warning text-[11px] sm:text-xs px-3 py-2">Pending</div>
            </div>

            {/* Class / Subject / Location */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">Class 8</span>
              <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">Arts</span>
              <span className="bg-neutral/15 text-xs sm:text-sm text-base-content px-2.5 py-1 rounded-md">Dhaka</span>
            </div>

            <div className="mt-4 mb-4 border-t border-base-300/70" />

            {/* Budget + dates */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-6">
              <div>
                <p className="text-base sm:text-lg font-semibold text-secondary">
                  <span className="text-2xl sm:text-3xl font-bold mr-1">5000</span>
                  <span className="align-middle text-xl">&#x09F3;</span>
                  <span className="text-[11px] sm:text-xs text-neutral/90 font-medium ml-1">/ per month</span>
                </p>
              </div>

              <div className="text-[11px] sm:text-xs text-neutral/90 font-medium space-y-1 sm:text-right">
                <p>Posted: Dec 10, 2025</p>
                <p>Matched: Dec 12, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTuitions;
