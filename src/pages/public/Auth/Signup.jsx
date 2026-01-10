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
import { exchangeFirebaseTokenForJwt } from '../../../utils/authHelpers';
import axiosInstance from '../../../services/axiosInstance';
import toast from 'react-hot-toast';
import { uploadToImgbb } from '../../../utils/uploadToImgbb';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState('student');
  const { loading, signUpWithEmailPass, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { handleSubmit } = methods;

  if (loading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const handleSignupForm = async (data) => {
    const { email, password, name, classLevel, teachingClass, location, phone, photo, subject, userType } = data;

    try {
      // file extract
      const file = photo?.[0];
      if (!file) {
        toast.error('Profile image is required');
        return;
      }

      // Signup with email and pass
      const res = await signUpWithEmailPass(email, password);
      const userProfile = res.user;

      // upload and get URL
      const imageUrl = await uploadToImgbb(file);

      //   Update User Profile
      await updateUserProfile({ displayName: name, photoURL: imageUrl });

      // save the data
      const userData = {
        firebaseUID: userProfile.uid,
        name: name,
        email: email,
        classLevel: classLevel || '',
        teachingClass: teachingClass || '',
        subject: subject,
        phone: phone,
        photoURL: imageUrl,
        location: location,
        userType: userType,
      };
      console.log(userData);

      await axiosInstance.post('/signup', userData);
      // give access token
      await exchangeFirebaseTokenForJwt(userProfile);
      toast.success(`Signup successful. Welcome, ${name}!`);
      navigate('/');
    } catch (error) {
      console.error('SIGNUP_ERROR:', error);
      toast.error(error?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <Container className="my-10 lg:my-16 px-3 min-h-screen bg-[radial-gradient(circle_at_15%_20%,rgba(36,76,152,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(15,26,51,0.10),transparent_40%),linear-gradient(180deg,#fdfefe_0%,#f4f7fc_45%,#eef3fb_100%)] rounded-2xl">
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
