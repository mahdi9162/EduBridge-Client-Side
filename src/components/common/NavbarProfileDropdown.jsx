import React from 'react';
import useAuth from '../../hooks/useAuth';
import SignOutButton from '../Buttons/SignOutButton/SignOutButton';

const NavbarProfileDropdown = () => {
  const { user } = useAuth();

  const getInitial = () => {
    if (user?.displayName) return user.displayName[0].toUpperCase();
    if (user?.email) return user.email[0].toUpperCase();
    return '?';
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center overflow-hidden">
          {/* Image or First Latter */}
          {user?.photoURL ? (
            <img src={user.photoURL} alt={user.displayName || 'Profile'} />
          ) : (
            <span className="font-semibold text-lg uppercase">{getInitial()}</span>
          )}
        </div>
      </div>
      <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <SignOutButton>Sign Out</SignOutButton>
        </li>
      </ul>
    </div>
  );
};

export default NavbarProfileDropdown;
