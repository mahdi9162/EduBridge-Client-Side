import React from 'react';
import Lottie from 'lottie-react';
import spinnerAnim from '../../assets/Loading animation blue.json';

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 bg-base-200 flex items-center justify-center overflow-hidden">
      <div className="bg-base-100 rounded-3xl px-10 py-8 border border-base-300 shadow-[0_18px_45px_rgba(15,26,51,0.08)] flex flex-col items-center gap-4">
        {/* Lottie spinner */}
        <div className="w-40 h-40">
          <Lottie animationData={spinnerAnim} loop />
        </div>

        <p className="text-sm text-neutral text-center">Loading, please wait…</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
