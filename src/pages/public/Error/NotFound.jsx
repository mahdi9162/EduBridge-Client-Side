import React from 'react';
import Lottie from 'lottie-react';
import LottieJson from '../../../assets/404 Page Not Found.json';
import { Link, useLocation } from 'react-router';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#E8EEF8] via-white to-[#E8EEF8]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#244C98]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0F1A33]/10 blur-3xl" />

      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          <div className="bg-base-100/80 backdrop-blur rounded-3xl border border-base-300 shadow-[0_18px_45px_rgba(15,26,51,0.10)] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-4 py-2 text-xs text-neutral">
                  <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  EduBridge • Where Trust Shapes Learning
                </div>

                <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold text-base-content tracking-tight">404</h1>
                <h2 className="mt-2 text-xl sm:text-2xl font-bold text-base-content">Page Not Found</h2>

                <p className="mt-3 text-sm sm:text-base text-neutral leading-relaxed">
                  You tried to visit: <span className="font-mono text-base-content">{location.pathname}</span>
                  <br />
                  This page doesn’t exist or was moved.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link to="/" className="btn btn-primary rounded-full px-7">
                    Go Home
                  </Link>

                  <Link to="/tuitions" className="btn btn-outline rounded-full px-7 border-base-300">
                    Browse Tuitions
                  </Link>
                </div>

                <p className="mt-4 text-xs text-neutral">Tip: Use the sidebar/dashboard menu to navigate faster.</p>
              </div>

              {/* Right: Lottie */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[420px]">
                  <div className="rounded-2xl bg-white border border-base-300 shadow-sm p-4 sm:p-6">
                    <div className="w-full aspect-square flex items-center justify-center">
                      <Lottie animationData={LottieJson} loop className="w-full h-full" />
                    </div>
                    <div className="mt-3 text-center text-xs text-neutral">Oops! Looks like you’re lost 😅</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer small */}
          <div className="mt-4 text-center text-xs text-neutral">EduBridge © {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
