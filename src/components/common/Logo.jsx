import React from 'react';
import logoImg from '../../assets/logo.webp';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <figure>
        <img src={logoImg} className="w-26 md:w-30" alt="EduBridge Logo" />
      </figure>
      <p className="text-xs text-neutral font-medium mt-1 tracking-tight hidden md:block">Where Trust Shapes Learning.</p>
    </Link>
  );
};

export default Logo;
