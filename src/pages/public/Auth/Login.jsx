import React from 'react';
import GoogleButton from '../../../components/Buttons/GoogleButton/GoogleButton';
import GithubButton from '../../../components/Buttons/GithubButton/GithubButton';
import FbButton from '../../../components/Buttons/FbButton/FbButton';
import Container from '../../../components/Container/Container';
import { useForm } from 'react-hook-form';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import { Link } from 'react-router';

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]).{8,15}$/;

  return (
    <Container>
      <section className="mt-10 mb-10 py-20">
        <div className="flex justify-center flex-col items-center mb-6">
          {/* Round badge */}
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-2" />
          <h3 className="text-3xl font-semibold text-[#27364B] tracking-tight">Login</h3>
        </div>
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 lg:gap-20">
          {/* left side */}
          <div className="mt-14">
            <div className="w-[320px]">
              <form>
                {/* Email */}
                <legend className="text-left mb-3 opacity-50 text-sm">Email</legend>
                <input
                  {...register('email', { required: true, pattern: { value: emailRegex, message: 'Enter a valid email address' } })}
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
                    pattern: { value: passValidation, message: 'Use 8–15 chars with uppercase, lowercase, number & special symbol.' },
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
          <div className="divider lg:divider-horizontal h-[350px] mr-8 text-neutral">OR</div>
          {/* right side */}
          <div className="flex flex-col mt-20 gap-4">
            <GoogleButton className="w-[300px]"></GoogleButton>
            <GithubButton className="w-[300px]"></GithubButton>
            <FbButton className="w-[300px]"></FbButton>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <Link className="text-sm font-medium text-primary/80 hover:text-primary underline mb-4">Forgot Password?</Link>
          <p className="text-xs text-[#8A94A6] leading-relaxed text-center">
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
