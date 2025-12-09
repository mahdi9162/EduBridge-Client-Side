import React from 'react';

const StepIndicator = ({ currentStep }) => {
  return (
    <>
      <ul className="steps steps-vertical md:steps-horizontal w-full">
        <li className="step step-primary">
          <span className="text-xs">Enter Your Email Address</span>
        </li>

        <li className={`step ${currentStep >= 2 && 'step-primary'}`}>
          <span className="text-xs">Provide Your Basic Info</span>
        </li>

        <li className={`step ${currentStep >= 3 && 'step-primary'}`}>
          <span className="text-xs">Create Your Password</span>
        </li>
      </ul>
    </>
  );
};

export default StepIndicator;
