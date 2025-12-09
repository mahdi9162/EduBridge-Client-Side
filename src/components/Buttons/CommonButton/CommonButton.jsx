import React from 'react';

const CommonButton = ({ children, className = '', ...rest }) => {
  return (
    <>
      <button className={`btn btn-secondary ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
};

export default CommonButton;
