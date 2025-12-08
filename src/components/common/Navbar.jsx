import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';

const Navbar = () => {
  const links = [
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/tuitions" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
          Tuitions
        </NavLink>
      </li>
      <li>
        <NavLink to="/tutors" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
          Tutors
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
          Contact
        </NavLink>
      </li>
    </>,
  ];

  return (
    <>
      <Container>
        <div className="navbar bg-[#F4F6FA] mt-5 rounded-full px-10 py-3 md:py-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <div className="text-xl">
              <Logo></Logo>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex px-1 gap-x-5">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to='signup' className="btn btn-secondary shadow-sm hover:bg-primary hover:shadow-lg transition-all duration-500">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
