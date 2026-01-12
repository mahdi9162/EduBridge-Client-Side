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
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();
  const { user } = useAuth();
  if (roleLoading) return null;

  // Sidebar Nav item
  const navItemClass = ({ isActive }) =>
    [
      'group flex items-center gap-3 rounded-xl px-3 py-2 transition',
      'text-white/80 hover:text-white',
      'hover:bg-white/10',
      isActive
        ? 'bg-white/12 text-white font-semibold ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.18)]'
        : 'ring-1 ring-transparent',
    ].join(' ');

  const iconClass = ({ isActive }) => ['text-lg transition', isActive ? 'text-white' : 'text-white/70 group-hover:text-white'].join(' ');

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* CONTENT */}
        <div className="drawer-content">
          {/* NAVBAR */}
          <nav className="navbar w-full bg-base-100/80 backdrop-blur border-b border-base-300">
            {/* top accent line */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,rgba(36,76,152,0.95),rgba(15,26,51,0.95),rgba(36,76,152,0.85))]" />

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

              {/* Right side: Profile dropdown */}
              <div className="ml-auto pr-2">
                <div className="dropdown dropdown-end">
                  {/* Trigger */}
                  <button
                    tabIndex={0}
                    className="group inline-flex items-center gap-3 rounded-full border border-base-300 bg-base-100/70 px-3 py-2 backdrop-blur hover:bg-base-100 transition cursor-pointer"
                  >
                    {/* Avatar */}
                    <div className="avatar">
                      <div className="w-9 rounded-full ring-1 ring-base-300">
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="profile" />
                        ) : (
                          <div className="grid h-9 w-9 place-items-center bg-base-200 text-base-content font-semibold">
                            {(user?.displayName?.[0] || user?.email?.[0] || 'U').toUpperCase()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name + role */}
                    <div className="hidden sm:flex flex-col items-start leading-none">
                      <span className="text-sm font-semibold text-base-content">{user?.displayName || 'User'}</span>
                      <span className="mt-1 text-[11px] text-neutral/70">{role || 'Role'}</span>
                    </div>

                    {/* Chevron */}
                    <svg
                      className="size-4 text-base-content/60 group-hover:text-base-content transition"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Menu */}
                  <ul tabIndex={0} className="menu dropdown-content mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl">
                    <li>
                      <NavLink to="/dashboard/profile-settings">Profile Settings</NavLink>
                    </li>

                    <div className="my-1 border-t border-base-300" />

                    <li>
                      <NavLink to="/">Back to Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Support</NavLink>
                    </li>

                    <div className="my-1 border-t border-base-300" />

                    <li>
                      <SignOutButton className="w-full">
                        <span className="flex items-center gap-2 text-error font-semibold">Sign Out</span>
                      </SignOutButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/* PAGE */}
          <div className="min-h-[calc(100vh-64px)] bg-base-200/40">
            <Outlet />
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

          <aside
            className="
              min-h-full w-72 text-white
              border-r border-white/10
              bg-[linear-gradient(180deg,#0f1a33_0%,#0b1630_40%,#0a1328_100%)]
              relative overflow-hidden
            "
          >
            {/* subtle glow blobs */}
            <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,rgba(36,76,152,0.45),transparent_60%)]" />
            <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle,rgba(36,76,152,0.35),transparent_65%)]" />

            {/* sidebar header */}
            <div className="px-4 py-[13.4px] border-b border-white/10 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <BsGrid className="text-white" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-none">EduBridge</p>
                    <p className="text-xs text-white/70 mt-1">Control Center</p>
                  </div>
                </div>

                {/* mini status dot */}
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />
              </div>
            </div>

            {/* menu */}
            <ul className="menu w-full p-3 gap-1 relative">
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
                  <NavLink to="/dashboard/profile-settings" className={navItemClass}>
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

                <li>
                  <NavLink to="/dashboard/profile-settings" className={navItemClass}>
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

                <li>
                  <NavLink to="/dashboard/profile-settings" className={navItemClass}>
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

              {/* divider */}
              <div className="my-2 border-t border-white/10" />

              {/* Sign out */}
              <li>
                <SignOutButton className="w-full">
                  <span className="flex items-center gap-3 rounded-xl px-3 py-2 text-rose-200 hover:text-rose-100 hover:bg-rose-500/10 transition ring-1 ring-transparent hover:ring-rose-200/20">
                    <LuLogOut className="text-lg" />
                    <span className="font-semibold">Sign Out</span>
                  </span>
                </SignOutButton>
              </li>
            </ul>

            {/* footer */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
