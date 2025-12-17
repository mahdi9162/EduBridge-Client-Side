import React from 'react';
import useAuth from '../../../../../hooks/useAuth';
import dashboardImg from '../../../../../assets/studentDashboard.webp';
import { Link } from 'react-router';

const StudentHero = () => {
  const { user } = useAuth();

  const displayName = (user?.displayName || 'Student')
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div
      className="
        bg-base-200/80 border border-base-300 rounded-3xl
        px-5 md:px-8 lg:px-12
        py-8 md:py-10
        flex flex-col-reverse lg:flex-row
        gap-8 md:gap-10 lg:gap-12
        items-center overflow-hidden
      "
    >
      {/* left */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold text-base-content text-center lg:text-left leading-tight">
          Welcome back, {displayName}
        </h2>

        <p className="mt-3 text-xs md:text-sm lg:text-base text-neutral text-center lg:text-left max-w-[520px] leading-relaxed">
          Here’s a quick snapshot of your learning activity and tuition posts.
        </p>

        {/* cta */}
        <div className="mt-6 md:mt-7 w-full flex flex-col items-center lg:items-start gap-4">
          <div className="w-full flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              to="/dashboard/post-tuition"
              className="
                btn btn-primary
                w-full sm:w-auto
                h-11 md:h-12
                px-6
                rounded-xl
                text-sm md:text-base
              "
            >
              Create Tuition Post
            </Link>

            <Link
              to="/dashboard/my-tuitions"
              className="
                btn btn-outline
                w-full sm:w-auto
                h-11 md:h-12
                px-6
                rounded-xl
                text-sm md:text-base
              "
            >
              My Tuitions
            </Link>
          </div>

          <div className="w-full text-center lg:text-left text-xs md:text-sm text-neutral leading-relaxed">
            Tip: Use <span className="font-medium text-base-content">Create Tuition Post</span> to get tutors faster.
          </div>
        </div>
      </div>

      {/* right */}
      <figure className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-base-100 border border-base-300 shadow-sm">
        <img
          src={dashboardImg}
          alt="Student dashboard illustration"
          className="w-full h-auto max-h-60 md:max-h-[360px] lg:max-h-[420px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  );
};

export default StudentHero;
