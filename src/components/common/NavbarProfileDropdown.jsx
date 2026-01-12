import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SignOutButton from '../Buttons/SignOutButton/SignOutButton';
import { FiChevronDown, FiHelpCircle, FiHome, FiLogOut, FiMail, FiUser } from 'react-icons/fi';

const NavbarProfileDropdown = () => {
  const { user } = useAuth();

  const getInitial = () => {
    if (user?.displayName) return user.displayName[0].toUpperCase();
    if (user?.email) return user.email[0].toUpperCase();
    return '?';
  };

  const displayName = user?.displayName || 'User';
  const email = user?.email || '';

  return (
    <div className="dropdown relative">
      {/* Trigger */}
      <div
        tabIndex={0}
        role="button"
        className="
          group inline-flex items-center gap-2 sm:gap-3
          rounded-full border border-base-300
          bg-base-100/80 backdrop-blur
          px-2.5 sm:px-3 py-1.5 sm:py-2
          shadow-[0_10px_28px_rgba(15,26,51,0.08)]
          transition-all duration-200
          hover:shadow-[0_16px_40px_rgba(15,26,51,0.12)]
          hover:-translate-y-0.5
        "
      >
        {/* Avatar */}
        <div
          className="
            w-9 h-9 sm:w-10 sm:h-10 rounded-full
            overflow-hidden
            ring-1 ring-primary/15
            bg-[radial-gradient(circle_at_30%_30%,rgba(36,76,152,0.28),rgba(15,26,51,0.95))]
            text-white
            flex items-center justify-center
          "
        >
          {user?.photoURL ? (
            <img src={user.photoURL} alt={displayName} className="w-full h-full object-cover" />
          ) : (
            <span className="font-semibold text-base sm:text-lg uppercase">{getInitial()}</span>
          )}
        </div>

        {/* Name */}
        <div className="hidden sm:block text-left leading-tight">
          <p className="text-sm font-semibold text-base-content">{displayName}</p>
        </div>

        <FiChevronDown className="text-neutral/70 transition group-hover:rotate-180" />
      </div>

      {/* Dropdown panel */}
      <div
        tabIndex={0}
        className="
          dropdown-content
          absolute right-0 mt-2 sm:mt-3
          w-64 sm:w-72 max-w-[calc(100vw-1rem)]
          rounded-2xl border border-base-300
          bg-base-100/95 backdrop-blur
          shadow-[0_18px_45px_rgba(15,26,51,0.12)]
          overflow-hidden
          z-50
        "
      >
        {/* Profile summary */}
        <div className="p-3 sm:p-4 bg-base-200/40 border-b border-base-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-base-100 ring-1 ring-base-300 flex items-center justify-center overflow-hidden">
              {user?.photoURL ? (
                <img src={user.photoURL} alt={displayName} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <span className="font-bold text-sm sm:text-base">{getInitial()}</span>
              )}
            </div>

            <div className="min-w-0">
              <p className="font-semibold truncate text-sm sm:text-base">{displayName}</p>
              {email && (
                <p className="text-[11px] sm:text-xs text-neutral truncate flex items-center gap-2">
                  <FiMail className="opacity-70" />
                  {email}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Menu */}
        <ul className="menu menu-sm p-1.5 sm:p-2 w-full">
          <DropdownItem icon={FiUser} to="/dashboard/profile-settings" label="Profile Settings" />
          <DropdownItem icon={FiHome} to="/dashboard" label="Go to Dashboard" />
          <DropdownItem icon={FiHelpCircle} to="/faq" label="FAQ" />
          <DropdownItem icon={FiMail} to="/contact" label="Contact Support" />

          <li className="my-1 pointer-events-none">
            <div className="border-t border-base-300" />
          </li>

          <li>
            <SignOutButton className="w-full">
              <span className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-error hover:bg-error/10">
                <FiLogOut size={16} className="sm:hidden" />
                <FiLogOut size={18} className="hidden sm:block" />
                <span className="text-sm sm:text-[15px] font-semibold">Sign Out</span>
              </span>
            </SignOutButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarProfileDropdown;

/* Reusable menu row */
const DropdownItem = ({ icon: Icon, to, label }) => (
  <li>
    <Link
      to={to}
      className="
        w-full flex items-center gap-3
        px-3 py-2 sm:py-2.5 rounded-xl
        hover:bg-base-200/60
        transition
      "
    >
      <Icon size={16} className="text-base-content/70 sm:hidden" />
      <Icon size={18} className="text-base-content/70 hidden sm:block" />
      <span className="text-xs md:text-sm font-medium">{label}</span>
    </Link>
  </li>
);
