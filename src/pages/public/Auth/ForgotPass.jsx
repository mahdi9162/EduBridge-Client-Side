import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const ForgotPass = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { resetUserEmail, setLoading } = useAuth();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleUserResetPass = async (e) => {
    e.preventDefault();

    const email = emailValue.trim();

    // clear old error
    setErrorMsg('');

    // validation: empty
    if (!email) {
      setErrorMsg('Please enter your email.');
      return;
    }

    // validation: invalid format
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      await resetUserEmail(email);
      toast.success('If an account exists for this email, we sent a reset link.', { duration: 5000 });
      setEmailValue('');
      setErrorMsg('');
      navigate('/login');
    } catch (err) {
      console.log('RESET_ERROR:', err?.code, err?.message);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-xl backdrop-blur-xl"
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.4)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#0f1a33]">Forgot Password</h1>
          <p className="mt-2 text-sm text-[#8a94a6]">Enter your email and we’ll send you a reset link</p>
        </div>

        {/* Form */}
        <form onSubmit={handleUserResetPass} className="space-y-4">
          <div className="relative w-full">
            <IoIosMail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral/70 z-10 pointer-events-none" />

            <input
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              id="reset-email"
              type="email"
              placeholder=" "
              className="peer w-full h-12 rounded-xl bg-base-100/90 border border-base-200 pl-11 pr-4 text-sm text-base-content outline-none transition
              focus:border-primary/40 focus:shadow-[0_12px_28px_rgba(15,26,51,0.10)]"
            />

            <label
              htmlFor="reset-email"
              className="absolute left-10 top-1/2 -translate-y-1/2 px-2 text-sm text-neutral bg-base-100/95 transition-all duration-150
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
              peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
              peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary"
            >
              Enter Your Email
            </label>

            {errorMsg ? <p className="text-left mt-1 text-xs text-red-500/80">{errorMsg}</p> : null}
          </div>

          <CommonButton
            type="submit"
            onClick={handleUserResetPass}
            className="w-full py-3 rounded-full font-medium text-white bg-[#0f1a33] hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Send Reset Link
          </CommonButton>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0f1a33] opacity-70 hover:opacity-100 transition"
          >
            <span className="text-lg">←</span>
            <span className="relative">
              Back to Login
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#0f1a33] transition-all group-hover:w-full" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPass;
