import React, { useState } from 'react';
import signupImg from '../../../assets/signup.webp';
import Container from '../../../components/Container/Container';
import { Link } from 'react-router';
import StepIndicator from './components/signup/StepIndicator';
import EmailAndRoleStep from './components/signup/EmailAndRoleStep';
import BasicInfoStep from './components/signup/BasicInfoStep';
import PasswordStep from './components/signup/PasswordStep';
import { FormProvider, useForm } from 'react-hook-form';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState('student');

  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSignupForm = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <section className="mt-10 mb-10 py-16">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* left side image  */}

          <figure className="w-full md:w-1/2 flex justify-center overflow-hidden">
            <img src={signupImg} className="w-full max-w-[600px] h-auto rounded-2xl" alt="EduBridge Image" />
          </figure>

          {/* right side form */}
          <div className="w-full md:w-1/2 text-center">
            <div className="mb-10">
              <h3 className="text-4xl mb-2">Create an account</h3>
              <p>
                Already have an account?
                <Link to="/login" className="underline">
                  {''} Log in
                </Link>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <StepIndicator currentStep={currentStep}></StepIndicator>
              <FormProvider {...methods}>
                {/* Form */}
                <form onSubmit={handleSubmit(handleSignupForm)} className="mt-10 ">
                  {/* Email */}
                  <EmailAndRoleStep currentStep={currentStep} setCurrentStep={setCurrentStep} setUserType={setUserType}></EmailAndRoleStep>
                  {/* Basic Info */}
                  <BasicInfoStep currentStep={currentStep} setCurrentStep={setCurrentStep} userType={userType}></BasicInfoStep>
                  {/* Password */}
                  <PasswordStep currentStep={currentStep}></PasswordStep>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Signup;
