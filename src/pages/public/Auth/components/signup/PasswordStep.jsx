import React from 'react';

const PasswordStep = ({ currentStep }) => {
  return (
    <>
      {currentStep === 3 && (
        <>
          <legend className="text-left ml-17 mb-1 opacity-50 text-sm">New Password</legend>
          <input type="password" placeholder="Enter your password" className="input w-[600px]" />
          <legend className="text-left ml-17 mt-5 mb-1 opacity-50 text-sm">Confirm Password</legend>
          <input type="password" placeholder="Confirm your password" className="input w-[600px]" />
          {/* Button */}
          <button className="btn btn-secondary mt-8 w-[600px] rounded-full">Sign Up</button>
        </>
      )}
    </>
  );
};

export default PasswordStep;
