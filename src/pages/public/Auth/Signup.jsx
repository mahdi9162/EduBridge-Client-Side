import React, { useState } from 'react';
import signupImg from '../../../assets/signup.webp';
import Container from '../../../components/Container/Container';
import { Link, useNavigate } from 'react-router';
import StepIndicator from './components/signup/StepIndicator';
import EmailAndRoleStep from './components/signup/EmailAndRoleStep';
import BasicInfoStep from './components/signup/BasicInfoStep';
import PasswordStep from './components/signup/PasswordStep';
import { FormProvider, useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Loading/Loading';
import { exchangeFirebaseTokenForJwt } from '../../../utils/authHelpers';
import axiosInstance from '../../../services/axiosInstance';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState('student');
  const { loading, signUpWithEmailPass, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { handleSubmit } = methods;

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSignupForm = async (data) => {
    const { email, password, name, classLevel, teachingClass, district, phone, subject, userType } = data;
    console.log(data);

    const profile = {
      displayName: name,
    };

    try {
      // Signup with email and pass
      const res = await signUpWithEmailPass(email, password);
      const userProfile = res.user;

      //   Update User Profile
      await updateUserProfile(profile);
      const userData = {
        firebaseUID: userProfile.uid,
        name: name,
        email: email,
        classLevel: classLevel || '',
        teachingClass: teachingClass || '',
        subject: subject,
        phone: phone,
        district: district,
        userType: userType,
      };
      await axiosInstance.post('/signup', userData);
      // give access token
      await exchangeFirebaseTokenForJwt(userProfile);
      alert('Signup successful! Welcome ' + name);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="px-3">
      <section className="mt-4 md:mt-8 mb-10 pt-4 pb-8 md:py-8 lg:py-16">
        <div className="flex flex-col justify-center md:flex-row gap-10 lg:gap-16">
          {/* left side image  */}

          <figure className=" hidden lg:flex w-full md:w-1/2 justify-center overflow-hidden">
            <img src={signupImg} className="w-full max-w-[200px] lg:max-w-[600px] h-auto rounded-2xl" alt="EduBridge Image" />
          </figure>

          {/* right side form */}
          <div className="w-full md:w-1/2 text-center">
            <div className="mb-10">
              <h3 className="text-2xl font-bold lg:text-4xl mb-2">Create an account</h3>
              <p className="text-xs md:text-base">
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
