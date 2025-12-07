import React from 'react';
import logoImg from '../../assets/logo.webp';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <figure>
        <img src={logoImg} className="w-30" alt="EduBridge Logo" />
      </figure>
      <p className="text-xs text-[#8A94A6] font-medium mt-1 tracking-tight">Where Trust Shapes Learning.</p>
    </Link>
  );
};

export default Logo;
