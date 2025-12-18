import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';
import useAuth from '../../hooks/useAuth';
import NavbarProfileDropdown from './NavbarProfileDropdown';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Tuitions', path: '/tuitions' },
    { id: 3, name: 'Tutors', path: '/tutors' },
    { id: 5, name: 'Contact', path: '/contact' },

    { id: 6, name: 'Dashboard', path: '/dashboard' },
  ];

  const { user } = useAuth();

  return (
    <>
      <Container className="px-3">
        <div className="navbar bg-[#F4F6FA] mt-5 rounded-full px-3 md:px-10 py-3 md:py-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Logo></Logo>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex px-1 gap-x-5">
              {' '}
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {!user && (
              <div className="flex gap-2 md:gap-5">
                <Link
                  to="/signup"
                  className="btn btn-secondary hover:bg-primary transition-all duration-500 rounded-xl px-3 py-1.5 text-[11px] font-medium shadow-sm hover:shadow-md md:px-4 md:py-2 md:text-sm"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="btn btn-secondary shadow-sm hover:shadow-md hover:bg-primary px-3 py-1.5 rounded-xl transition-all duration-500 text-xs text-[11px] font-medium md:px-4 md:py-2 md:text-sm"
                >
                  Log In
                </Link>
              </div>
            )}
            {user && <NavbarProfileDropdown></NavbarProfileDropdown>}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
