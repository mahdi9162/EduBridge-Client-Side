import React from 'react';
import GoogleButton from '../../../components/Buttons/GoogleButton/GoogleButton';
import GithubButton from '../../../components/Buttons/GithubButton/GithubButton';
import FbButton from '../../../components/Buttons/FbButton/FbButton';
import Container from '../../../components/Container/Container';
import { useForm } from 'react-hook-form';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Loading/Loading';
import { exchangeFirebaseTokenForJwt } from '../../../utils/authHelpers';

const Login = () => {
  const { loading, setLoading, signInWithEmailPass } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]).{8,15}$/;

  const handleUserSignin = async (data) => {
    const { email, password } = data;

    try {
      const res = await signInWithEmailPass(email, password);
      const userProfile = res.user;
      // 🔥 এখানে helper call
      await exchangeFirebaseTokenForJwt(userProfile);
      navigate(location?.state || '/');
      alert('Login successful! Welcome back 👋');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Email Or Password is not Valid! 🙂');
      } else {
        alert('Failed to Login! Please Try Again Later!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="px-3">
      <section className="mt-4 md:mt-8 mb-10 py-8 lg:py-16">
        <div className="flex justify-center flex-col items-center mb-6">
          {/* Round badge */}
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-2" />
          <h3 className="text-3xl font-semibold text-[#27364B] tracking-tight">Login</h3>
        </div>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
          {/* left side */}
          <div className="mt-8 lg:mt-14">
            <div className="w-[320px]">
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
                  <CommonButton className="mt-8 rounded-full w-full">Sign In</CommonButton>
                </div>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="divider text-neutral my-8 md:my-0 md:mx-8 lg:divider-horizontal lg:h-[350px] lg:mr-8">OR</div>

          {/* right side */}
          <div className="flex flex-col lg:mt-20 gap-4 items-center md:items-start">
            <GoogleButton className="w-[300px]" />
            <GithubButton className="w-[300px]" />
            <FbButton className="w-[300px]" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6">
          <Link className="text-sm font-medium text-primary/80 hover:text-primary underline mb-4">Forgot Password?</Link>
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
