import React from 'react';

const BtnSecondary = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={`relative
        flex items-center justify-center
        font-semibold
        cursor-pointer
        rounded-lg
        border border-secondary
        bg-transparent
        text-secondary
        outline-none
        overflow-hidden
        transition-colors duration-500 delay-100 ease-out
        hover:text-white
        hover:border-[rgb(40,144,241)]
        before:content-['']
        before:absolute
        before:inset-0
        before:m-auto
        before:block
        before:w-[20em]
        before:h-[20em]
        before:rounded-full
        before:left-[-5em]
        before:z-[-1]
        before:transition-shadow
        before:duration-500
        before:ease-out
        hover:before:shadow-[inset_0_0_0_10em_#244c98] ${className}`}
      {...rest}
    >
      <span className="m-2.5">{children}</span>
    </button>
  );
};

export default BtnSecondary;
