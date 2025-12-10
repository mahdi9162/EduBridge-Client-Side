import React from 'react';
import useAuth from '../../../hooks/useAuth';

const SignOutButton = ({ children, className = '', ...rest }) => {
  const { userSignOut } = useAuth();

  const handleSignout = () => {
    userSignOut()
      .then(() => {
        localStorage.clear();
        alert('Sign-out successful.');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button className={`${className}`} {...rest} onClick={handleSignout}>
        {children}
      </button>
    </>
  );
};

export default SignOutButton;
