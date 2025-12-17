import React from 'react';
import dashboardImg from '../../../../../assets/teacherDashboard.webp';
import AdminPieChart from './TutorPieChart';
import useAuth from '../../../../../hooks/useAuth';

const TutorHero = ({ applications }) => {
  const { user } = useAuth();

  // user stats
  const totalApply = applications?.length;
  const totalSelection = applications?.filter((app) => app.applyStatus === 'selected').length;
  const totalRejection = applications?.filter((app) => app.applyStatus === 'rejected').length;

  return (
    <>
      <div
        className="
        bg-base-200/80 border border-base-300 rounded-3xl
        px-4 md:px-6 lg:px-10 py-6 md:py-8
        flex flex-col-reverse lg:flex-row
        gap-6 md:gap-8 lg:gap-10
        items-center overflow-hidden
      "
      >
        {/* left div */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-base-content text-center md:text-left">
            Welcome back,{' '}
            {user.displayName
              .toLowerCase()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </h2>

          <p className="mt-1 text-xs md:text-sm lg:text-base text-center md:text-left text-neutral max-w-xl">
            Here’s a snapshot of your teaching activity and applications.
          </p>

          <div className="mt-5 h-[230px] md:w-[260px] md:h-60 flex justify-center lg:justify-start w-full">
            <div className="flex flex-col items-center">
              {/* chart */}
              <div className="shrink-0 w-[220px] h-[260px] md:h-[280px] md:w-60">
                <AdminPieChart applications={applications} />
              </div>

              {/* mini breakdown */}
              <div className="mt-3 text-xs text-neutral text-center">
                <span className="font-medium text-base-content">{totalApply}</span> Applications •{' '}
                <span className="font-medium text-base-content">{totalSelection}</span> Selections •{' '}
                <span className="font-medium text-base-content">{totalRejection}</span> Rejections
              </div>
            </div>
          </div>
        </div>

        {/* right div */}
        <figure className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-base-100 border border-base-300 shadow-sm">
          <img
            src={dashboardImg}
            alt="Dashboard illustration"
            className="w-full h-auto max-h-[220px] md:max-h-[340px] lg:max-h-[420px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </>
  );
};

export default TutorHero;
