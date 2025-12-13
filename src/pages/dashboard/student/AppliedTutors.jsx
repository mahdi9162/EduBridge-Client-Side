import React from 'react';
import Container from '../../../components/Container/Container';
import { HiUserGroup } from 'react-icons/hi';
import avatarImg from '../../../assets/avatar.png';

const AppliedTutors = () => {


    
  return (
    <Container>
      <section className="my-10 bg-base-200/60 rounded-4xl px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-base-100 rounded-full shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-5 sm:px-8 py-4 sm:py-5 text-center w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-base-content">Applied Tutors</h3>
              <span className="w-9 h-9 rounded-full bg-accent/70 flex items-center justify-center text-secondary">
                <HiUserGroup className="text-xl" />
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-neutral">Review tutors who applied to your tuition posts.</p>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {/* Total Applications */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Total Applications</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">12</p>
            </div>

            {/* Pending */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Pending</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">8</p>
            </div>

            {/* Selected */}
            <div className="bg-base-100 border border-base-200 rounded-2xl p-4 sm:p-5 text-center shadow-[0_12px_30px_rgba(15,26,51,0.06)]">
              <p className="text-xs sm:text-sm text-neutral">Selected</p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-base-content underline decoration-secondary/40">3</p>
            </div>
          </div>

          {/* Tuition Card */}
          <div className="mt-12 bg-base-100 rounded-3xl border border-base-200 shadow-[0_18px_45px_rgba(15,26,51,0.08)] p-6 sm:p-7">
            {/* Tuition Header */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-base-content">Math Tutor Needed</h3>
              <span className="badge badge-soft badge-warning text-xs px-3 py-1">Pending</span>
            </div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">Class Level</span>
              <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">Subject</span>
              <span className="px-3 py-1 rounded-full bg-accent/70 text-xs sm:text-sm text-base-content">Location</span>
            </div>

            <div className="mt-4 border-t border-base-200" />

            {/* Tuition Meta */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2 text-sm text-neutral">
              <p>
                <span className="font-semibold text-base-content">Budget:</span> 7000 ৳ / month
              </p>
              <p>Posted: Dec 13, 2025</p>
            </div>

            {/* Tutor Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tutor Card 1 */}
              <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={avatarImg} alt="" className="w-14 h-14 rounded-full object-cover border border-base-300" />
                  <div>
                    <h4 className="font-semibold text-base-content">Mahdi Hasan</h4>
                    <p className="text-xs sm:text-sm text-neutral">Qualification: BSc in Physics</p>
                    <p className="text-sm font-semibold text-secondary mt-1">Expected Salary: 9000 ৳</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="btn btn-primary btn-sm rounded-full px-4">Select</button>
                  <button className="btn btn-ghost btn-sm rounded-full border border-base-300 px-4">Reject</button>
                  <button className="btn btn-outline btn-sm rounded-full px-4">Tutor Details</button>
                </div>

                <p className="mt-2 text-[11px] text-neutral">Selection becomes final after payment</p>
              </div>

              {/* Tutor Card 2 */}
              <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={avatarImg} alt="" className="w-14 h-14 rounded-full object-cover border border-base-300" />
                  <div>
                    <h4 className="font-semibold text-base-content">Fatima Begum</h4>
                    <p className="text-xs sm:text-sm text-neutral">Qualification: MA in English</p>
                    <p className="text-sm font-semibold text-secondary mt-1">Expected Salary: 8500 ৳</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="btn btn-primary btn-sm rounded-full px-4">Select</button>
                  <button className="btn btn-ghost btn-sm rounded-full border border-base-300 px-4">Reject</button>
                  <button className="btn btn-outline btn-sm rounded-full px-4">Tutor Details</button>
                </div>

                <p className="mt-2 text-[11px] text-neutral">Selection becomes final after payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AppliedTutors;
