import React from 'react';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const SignOutButton = ({ children, className = '', ...rest }) => {
  const { userSignOut } = useAuth();

  const handleSignout = () => {
    userSignOut()
      .then(() => {
        localStorage.clear();
        toast.success("Signed out successfully.");

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
