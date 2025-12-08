import React from 'react';
import { useFormContext } from 'react-hook-form';

const PasswordStep = ({ currentStep }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]).{8,15}$/;

  return (
    <>
      {currentStep === 3 && (
        <>
          <legend className="text-left ml-17 mb-1 opacity-50 text-sm">New Password</legend>
          <input
            type="password"
            {...register('password', {
              required: true,
              pattern: { value: passValidation, message: 'Use 8–15 chars with uppercase, lowercase, number & special symbol.' },
            })}
            name="password"
            placeholder="Enter your password"
            className="input w-[600px]"
          />
          {errors.password && <p className="text-left ml-18 mt-1 text-xs text-red-400/80">{errors.password.message}</p>}
          <legend className="text-left ml-17 mt-5 mb-1 opacity-50 text-sm">Confirm Password</legend>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === watch('password') || 'Passwords do not match',
            })}
            name="confirmPassword"
            placeholder="Confirm your password"
            className="input w-[600px]"
          />
          {errors.confirmPassword && <p className="text-left ml-18 mt-1 text-xs text-red-400/80">{errors.confirmPassword.message}</p>}
          {/* Button */}
          <button className="btn btn-secondary mt-8 w-[600px] rounded-full">Sign Up</button>
        </>
      )}
    </>
  );
};

export default PasswordStep;
