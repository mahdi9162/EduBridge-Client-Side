import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';
import useAuth from '../../hooks/useAuth';
import NavbarProfileDropdown from './NavbarProfileDropdown';
import CommonButton from '../Buttons/CommonButton/CommonButton';

const Navbar = () => {
  const { user } = useAuth();
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Tuitions', path: '/tuitions' },
    { id: 3, name: 'Tutors', path: '/tutors' },
    { id: 5, name: 'Contact', path: '/contact' },

    ...(user ? [{ id: 6, name: 'Dashboard', path: '/dashboard' }] : []),
  ];

  return (
    <>
      <Container className="mt-5 sticky top-3 z-50 bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full">
        <div className="navbar px-3 md:px-10 ">
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
                <CommonButton className="px-3 py-1.5 text-[11px] font-medium shadow-sm hover:shadow-md md:px-4 md:py-2 md:text-sm rounded-xl">
                  <Link to="/signup">Sign Up</Link>
                </CommonButton>
                <CommonButton className="px-3 py-1.5 text-[11px] font-medium shadow-sm hover:shadow-md md:px-4 md:py-2 md:text-sm rounded-xl">
                  <Link to="/login">Log In</Link>
                </CommonButton>
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
