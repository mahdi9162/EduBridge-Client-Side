import React from 'react';
import GoogleButton from '../../../components/Buttons/GoogleButton/GoogleButton';
import GithubButton from '../../../components/Buttons/GithubButton/GithubButton';
import FbButton from '../../../components/Buttons/FbButton/FbButton';
import Container from '../../../components/Container/Container';
import { useForm } from 'react-hook-form';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { exchangeFirebaseTokenForJwt } from '../../../utils/authHelpers';
import toast from 'react-hot-toast';
import FullScreenLoader from '../../../components/Loading/FullScreenLoader';

const Login = () => {
  const { loading, setLoading, signInWithEmailPass } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <FullScreenLoader></FullScreenLoader>;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]).{8,15}$/;

  const handleUserSignin = async (data) => {
    const { email, password } = data;

    try {
      const res = await signInWithEmailPass(email, password);
      const userProfile = res.user;
      await exchangeFirebaseTokenForJwt(userProfile);
      navigate(location?.state || '/');
      toast.success('Login successful. Welcome back!');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        toast.error('Invalid email or password.');
      } else {
        toast.error('Login failed. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
  // Demo
  const DEMO_USERS = {
    student: { email: 'sharif@gmail.com', password: '@Mahdi9162' },
    tutor: { email: 'shahinmia@gmail.com', password: '@Mahdi9162' },
    admin: { email: 'rupahasan@gmail.com', password: '@Mahdi16' },
  };

  const handleDemoLogin = (role) => {
    const demo = DEMO_USERS[role];
    if (!demo) return;

    // 1) Autofill the form
    setValue('email', demo.email, { shouldValidate: true });
    setValue('password', demo.password, { shouldValidate: true });

    // 2) Auto submit
    handleSubmit(handleUserSignin)();
  };

  return (
    <Container className="my-10 lg:my-16 px-3 min-h-screen bg-[radial-gradient(circle_at_15%_20%,rgba(36,76,152,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(15,26,51,0.10),transparent_40%),linear-gradient(180deg,#fdfefe_0%,#f4f7fc_45%,#eef3fb_100%)] rounded-2xl">
      <section className="mt-4 md:mt-8 mb-10 py-3 lg:py-16">
        <div className="flex justify-center flex-col items-center mb-6">
          {/* Round badge */}
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-2 ml-3" />
          <h3 className="text-3xl font-semibold text-[#27364B] ml-4 tracking-tight">Login</h3>
        </div>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
          {/* left side */}
          <div className="mt-8 lg:mt-14">
            <div className="w-[300px] md:w-[320px]">
              <form onSubmit={handleSubmit(handleUserSignin)}>
                {/* Email */}
                <legend className="text-left mb-3 opacity-50 text-sm">Email</legend>
                <input
                  {...register('email', {
                    required: true,
                    pattern: { value: emailRegex, message: 'Enter a valid email address' },
                  })}
                  type="email"
                  placeholder="Enter your email address"
                  className="input w-full"
                />
                {errors.email && <p className="text-left mt-1 text-xs text-red-400/80">{errors.email.message}</p>}

                {/* Password */}
                <legend className="text-left mb-1 mt-4 opacity-50 text-sm">Password</legend>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    pattern: {
                      value: passValidation,
                      message: 'Use 8–15 chars with uppercase, lowercase, number & special symbol.',
                    },
                  })}
                  name="password"
                  placeholder="Enter your password"
                  className="input w-full"
                />
                {errors.password && <p className="text-left mt-1 text-xs text-red-400/80">{errors.password.message}</p>}

                <div>
                  <CommonButton className="mt-8 rounded-full w-full py-2.5">Sign In</CommonButton>
                </div>
              </form>
              {/* Demo login  */}
              <div className="mt-8 rounded-2xl border border-base-300/50 bg-base-100/60 backdrop-blur px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-base-300 to-transparent" />
                  <p className="text-[11px] tracking-widest font-semibold text-base-content/60">DEMO LOGIN</p>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-base-300 to-transparent" />
                </div>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {/* Student */}
                  <button
                    onClick={() => handleDemoLogin('student')}
                    type="button"
                    className="w-full rounded-xl px-4 py-2.5 text-xs font-semibold text-[#0F1A33] border border-primary/30 bg-[linear-gradient(180deg,#ffffff_0%,rgba(36,76,152,0.06)_100%)] shadow-[0_6px_18px_rgba(36,76,152,0.12)] hover:shadow-[0_10px_26px_rgba(36,76,152,0.18)] hover:border-primary/45 transition-all duration-500 cursor-pointer hover:-translate-y-px active:translate-y-0"
                  >
                    Student
                  </button>

                  {/* tutor */}
                  <button
                    onClick={() => handleDemoLogin('tutor')}
                    type="button"
                    className="w-full rounded-xl px-4 py-2.5 text-xs font-medium text-[#0F1A33] border border-[#27364B]/20 bg-[linear-gradient(180deg,#ffffff_0%,rgba(15,26,51,0.05)_100%)] shadow-[0_6px_16px_rgba(15,26,51,0.10)] hover:shadow-[0_10px_22px_rgba(15,26,51,0.14)] hover:border-[#27364B]/30 transition-all duration-500 cursor-pointer hover:-translate-y-px active:translate-y-0"
                  >
                    Tutor
                  </button>

                  {/* admin */}
                  <button
                    onClick={() => handleDemoLogin('admin')}
                    type="button"
                    className="w-full rounded-xl px-4 py-2.5 text-xs font-medium text-[#0F1A33]/90 border border-[#27364B]/15 bg-white shadow-[0_4px_14px_rgba(15,26,51,0.08)] hover:shadow-[0_8px_18px_rgba(15,26,51,0.12)] hover:border-[#27364B]/25 transition-all duration-500 cursor-pointer hover:-translate-y-px active:translate-y-0"
                  >
                    Admin
                  </button>
                </div>

                <p className="mt-3 text-[11px] text-base-content/50">Tip: Demo accounts are for preview only — don’t use real passwords.</p>
              </div>
            </div>
          </div>

          {/*  */}

          {/* Divider */}
          <div className="divider text-neutral my-4 md:my-0 md:mx-8 lg:divider-horizontal lg:h-[350px]">OR</div>

          {/* right side */}
          <div className="flex flex-col lg:mt-26 gap-4 items-center md:items-start">
            <GoogleButton className="w-[300px]" />
            <GithubButton className="w-[300px]" />
            <FbButton className="w-[300px]" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 ml-5">
          <Link to="/forgot-password" className="text-sm font-medium text-primary/80 hover:text-primary underline mb-4">
            Forgot Password?
          </Link>
          <p className="text-xs text-neutral leading-relaxed text-center">
            Secure Login with reCAPTCHA subject to{' '}
            <span className="block text-center">
              Google <span className="underline">Terms</span> & <span className="underline">Privacy</span>
            </span>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Login;
