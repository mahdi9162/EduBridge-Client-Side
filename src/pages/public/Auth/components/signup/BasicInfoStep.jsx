import React from 'react';
import TeacherFields from './TeacherFields';
import StudentFields from './StudentFields';

const BasicInfoStep = ({ currentStep, setCurrentStep, userType }) => {
  return (
    <>
      {currentStep === 2 && (
        <>
          {userType === 'student' ? (
            <StudentFields setCurrentStep={setCurrentStep}></StudentFields>
          ) : (
            <TeacherFields setCurrentStep={setCurrentStep}></TeacherFields>
          )}
        </>
      )}
    </>
  );
};

export default BasicInfoStep;
