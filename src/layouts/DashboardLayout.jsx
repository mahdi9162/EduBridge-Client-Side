import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../components/common/Logo';
import { IoCreateOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineCreditCard, HiUserGroup } from 'react-icons/hi';
import { LuLogOut, LuSettings2 } from 'react-icons/lu';
import SignOutButton from '../components/Buttons/SignOutButton/SignOutButton';
import useRole from '../hooks/useRole';
import { FiFileText } from 'react-icons/fi';
import { ImClipboard } from 'react-icons/im';
import { FaChalkboardTeacher, FaChartBar, FaChartLine, FaUsersCog } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) return null;

  const navItemClass = ({ isActive }) =>
    [
      'group flex items-center gap-3 rounded-xl px-3 py-2 transition',
      'text-base-content/80 hover:text-base-content',
      'hover:bg-base-200/70',
      isActive ? 'bg-base-200/80 text-base-content font-semibold border border-base-300' : 'border border-transparent',
    ].join(' ');

  const iconClass = ({ isActive }) =>
    ['text-lg transition', isActive ? 'text-secondary' : 'text-base-content/60 group-hover:text-secondary'].join(' ');

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* CONTENT */}
        <div className="drawer-content">
          {/* NAVBAR */}
          <nav className="navbar w-full bg-base-100 border-b border-base-300">
            <div className="flex items-center gap-3 w-full">
              {/* Sidebar toggle */}
              <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>

              {/* Brand strip + logo */}
              <div className="flex items-center gap-3 px-2">
                <span className="hidden md:inline-block h-8 w-1 rounded-full bg-secondary" />
                <Logo />
              </div>

              {/* Right side (optional small badge) */}
              <div className="ml-auto pr-2">
                <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/50 px-3 py-1 text-xs text-neutral">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  Dashboard
                </div>
              </div>
            </div>
          </nav>

          {/* PAGE */}
          <div className="min-h-[calc(100vh-64px)]">
            <Outlet />
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

          <aside className="min-h-full w-72 bg-base-100 border-r border-base-300">
            {/* sidebar header */}
            <div className="px-4 py-[13.4px] border-b border-base-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-base-200">
                    <BsGrid className="text-secondary" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-base-content leading-none">EduBridge</p>
                    <p className="text-xs text-neutral mt-1">Control Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* menu */}
            <ul className="menu w-full p-3 gap-1">
              {/* Home */}
              <li>
                <NavLink to="/dashboard" end className={navItemClass}>
                  {({ isActive }) => (
                    <>
                      <span className={iconClass({ isActive })}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          fill="none"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                      </span>
                      <span>Homepage</span>
                      {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                    </>
                  )}
                </NavLink>
              </li>

              {/* Student */}
              <div className={role !== 'student' ? 'hidden' : ''}>
                <li>
                  <NavLink to="/dashboard/my-tuitions" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <CgProfile className={iconClass({ isActive })} />
                        <span>My Tuitions</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/applied-tutors" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <HiUserGroup className={iconClass({ isActive })} />
                        <span>Applied Tutors</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/post-tuition" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <IoCreateOutline className={iconClass({ isActive })} />
                        <span>Create Tuition Post</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/payments-history" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <HiOutlineCreditCard className={iconClass({ isActive })} />
                        <span>Payments History</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/student-profile" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <LuSettings2 className={iconClass({ isActive })} />
                        <span>Profile Setting</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>
              </div>

              {/* Teacher */}
              <div className={role !== 'teacher' ? 'hidden' : ''}>
                <li>
                  <NavLink to="/dashboard/my-applications" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <FiFileText className={iconClass({ isActive })} />
                        <span>My Applications</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/ongoing-tuitions" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <FaChalkboardTeacher className={iconClass({ isActive })} />
                        <span>Ongoing Tuitions</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/revenue-history" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <FaChartBar className={iconClass({ isActive })} />
                        <span>Revenue History</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>
              </div>

              {/* Admin */}
              <div className={role !== 'admin' ? 'hidden' : ''}>
                <li>
                  <NavLink to="/dashboard/manage-users" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <FaUsersCog className={iconClass({ isActive })} />
                        <span>Manage Users</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manage-tuitions" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <ImClipboard className={iconClass({ isActive })} />
                        <span>Manage Tuitions</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/reports-analytics" className={navItemClass}>
                    {({ isActive }) => (
                      <>
                        <FaChartLine className={iconClass({ isActive })} />
                        <span>Reports Analytics</span>
                        {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-secondary" />}
                      </>
                    )}
                  </NavLink>
                </li>
              </div>

              {/* divider */}
              <div className="my-2 border-t border-base-300" />

              {/* Sign out */}
              <li>
                <SignOutButton className="w-full">
                  <span className="flex items-center gap-3 rounded-xl px-3 py-2 text-error hover:bg-error/10 transition">
                    <LuLogOut className="text-lg" />
                    <span className="font-semibold">Sign Out</span>
                  </span>
                </SignOutButton>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
