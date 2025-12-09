import React from 'react';
import GoogleButton from '../../../../../components/Buttons/GoogleButton/GoogleButton';
import { useFormContext } from 'react-hook-form';
import CommonButton from '../../../../../components/Buttons/CommonButton/CommonButton';

const EmailAndRoleStep = ({ currentStep, setCurrentStep, setUserType }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailButton = () => {
    const emailValue = watch('email');

    if (emailValue.length > 0 && !errors.email) {
      setCurrentStep(2);
    }
  };
  // user student
  const handleUserStudent = () => {
    setUserType('student');
  };

  // user teacher
  const handleUserTeacher = () => {
    setUserType('teacher');
  };

  return (
    <>
      {currentStep === 1 && (
        <>
          <legend className="text-left ml-17 mb-3 opacity-50 text-sm">What's your email?</legend>
          <input
            {...register('email', { required: true, pattern: { value: emailRegex, message: 'Enter a valid email address' } })}
            type="email"
            placeholder="Enter your email address"
            className="input w-[600px]"
          />
          {errors.email && <p className="text-left ml-18 mt-1 text-sm text-red-400/80">{errors.email.message}</p>}
          {/* Continue With */}
          <div className="mt-6 ml-17 flex flex-col items-start gap-3">
            <p className="text-sm text-slate-500">Continue with -</p>

            <div className="flex items-center gap-8 bg-white/80 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              {/* Student option */}
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                <input
                  {...register('userType')}
                  onClick={handleUserStudent}
                  type="radio"
                  name="userType"
                  value="student"
                  defaultChecked
                  className="radio radio-primary"
                />
                <span>Student</span>
              </label>

              {/* Divider line */}
              <span className="h-5 w-px bg-slate-200" />

              {/* Teacher option */}
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                <input
                  {...register('userType')}
                  onClick={handleUserTeacher}
                  type="radio"
                  name="userType"
                  value="teacher"
                  className="radio radio-primary"
                />
                <span>Teacher</span>
              </label>
            </div>
          </div>

          {/* Button */}
          <CommonButton onClick={handleEmailButton} className="btn-secondary mt-8 w-[600px] rounded-full">
            Next
          </CommonButton>
          <div className="divider w-[600px] mx-auto">OR</div>
          <GoogleButton className="w-[600px]"></GoogleButton>
        </>
      )}
    </>
  );
};

export default EmailAndRoleStep;
