import React from 'react';
import Container from '../../../components/Container/Container';

const TuitionDetails = () => {
  const experienceLevels = ['Less than 1 year', '1-2 years', '2-3 years', '3-5 years', '5-7 years', '7-10 years', '10+ years'];

  return (
    <Container>
      <section className="py-10 lg:py-16 bg-base-200/60 my-10 rounded-4xl">
        <div className="max-w-5xl mx-auto">
          {/* Top heading pill */}
          <div className="bg-base-100 rounded-full shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 px-6 sm:px-10 py-4 text-center mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-base-content">Tuition Details</h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral">Review the full tuition requirements before applying.</p>
          </div>

          {/* Main content */}
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            {/* Left card – student / tuition info */}
            <div className="bg-base-100 rounded-3xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 p-5 sm:p-6 lg:p-8">
              <div className="space-y-5">
                {/* Title + status */}
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-content leading-snug">
                    Math Tutor Needed For Class 10
                  </h2>
                  <span className="badge badge-soft badge-warning text-[10px] sm:text-xs px-3 py-1 shrink-0">Pending</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content">Class-10</span>
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content">Commerce</span>
                  <span className="px-3 py-1 rounded-full bg-accent/70 text-base-content">Barguna</span>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm sm:text-base text-base-content">
                  <p>
                    <span className="font-semibold">Budget:</span> <span className="font-semibold text-secondary">6000 ৳</span>
                    <span className="text-neutral text-xs sm:text-sm">/ month</span>
                  </p>
                  <p>
                    <span className="font-semibold">Student Name:</span> <span>Rocky</span>
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> <span>Dhaka</span>
                  </p>
                  <p>
                    <span className="font-semibold">Posted Date:</span> <span>October 26, 2025</span>
                  </p>
                </div>

                {/* Additional notes */}
                <div className="pt-1 space-y-2 text-sm sm:text-base text-base-content">
                  <p className="font-semibold">Additional Notes / Requirements:</p>
                  <p className="text-[13px] sm:text-sm text-neutral leading-relaxed">
                    Looking for an experienced tutor who can explain complex concepts clearly. Must have a strong foundation in calculus and
                    algebra. Weekly progress reports are required.
                  </p>
                </div>
              </div>
            </div>

            {/* Right card – application form */}
            <div className="bg-base-100 rounded-3xl shadow-[0_18px_45px_rgba(15,26,51,0.08)] border border-base-200 p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-base-content mb-4">Apply for this tuition</h3>

              <form className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-neutral">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full bg-base-100 border-base-300 text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-neutral">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="input input-bordered w-full bg-base-100 border-base-300 text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>

                {/* Qualification */}
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-neutral">Qualifications</label>
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Your highest qualification (e.g. B.Sc in Physics)"
                    className="input input-bordered w-full bg-base-100 border-base-300 text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>

                {/* Experience */}
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-neutral">Experience</label>
                  <select
                    name="experience"
                    defaultValue=""
                    className="select select-bordered w-full bg-base-100 border-base-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  >
                    <option value="" disabled>
                      Select your experience
                    </option>
                    {experienceLevels.map((level, i) => (
                      <option key={i}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Expected Salary */}
                <div className="space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-neutral">
                    Expected Salary <span className="font-normal text-[11px] sm:text-xs">(per month)</span>
                  </label>
                  <input
                    type="number"
                    name="salary"
                    placeholder="e.g. 5000"
                    className="input input-bordered w-full bg-base-100 border-base-300 h-11 sm:h-12 text-sm sm:text-base placeholder:text-[11px] sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full bg-primary text-primary-content rounded-full py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-[0_12px_30px_rgba(15,26,51,0.22)] hover:opacity-95 transition cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TuitionDetails;
