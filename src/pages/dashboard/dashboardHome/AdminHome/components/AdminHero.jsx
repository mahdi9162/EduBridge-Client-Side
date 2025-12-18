import React from 'react';
import dashboardImg from '../../../../../assets/adminDashboard.webp';
import AdminPieChart from './AdminPieChart';
import useAuth from '../../../../../hooks/useAuth';

const AdminHero = ({ dbUsers }) => {
  const { user } = useAuth();

  // user stats
  const totalUsers = dbUsers?.length;
  const teachers = dbUsers?.filter((user) => user.userType === 'teacher').length;
  const student = dbUsers?.filter((user) => user.userType === 'student').length;

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
            Here’s an overview of EduBridge platform performance.
          </p>

          <div className="mt-5 w-full flex justify-center lg:justify-start">
            <div className="flex flex-col items-center gap-3">
              {/* chart */}
              <div className="shrink-0 w-[220px] md:w-60">
                <AdminPieChart dbUsers={dbUsers} />
              </div>

              {/* mini breakdown */}
              <div className="text-xs text-neutral text-center">
                <span className="font-medium text-base-content">{totalUsers}</span> users •{' '}
                <span className="font-medium text-base-content">{student}</span> students •{' '}
                <span className="font-medium text-base-content">{teachers}</span> teachers
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

export default AdminHero;
