import React from 'react';

const CommonButton = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={`border-0 text-white font-inherit
        bg-[linear-gradient(30deg,#0f1a33,#244c98)] bg-size-[100%_auto]
        hover:bg-size-[200%_auto] hover:bg-position-[right_center]
        hover:animate-pulse512 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CommonButton;
