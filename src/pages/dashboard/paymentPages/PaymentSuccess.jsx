import React from 'react';
import Lottie from 'lottie-react';
import successLottie from '../../../assets/Payment Successful Animation.json';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const PaymentSuccess = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#E8EEF8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#C9CED8] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-6 md:px-10 md:py-8 border-b border-[#C9CED8]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-[#0F1A33] tracking-tight">Payment Successful</h1>
                <p className="mt-2 text-sm md:text-base text-[#0F1A33]/80">
                  Your tuition payment is confirmed. You’re all set to continue.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#E8EEF8] text-[#0F1A33] px-3 py-2 rounded-xl border border-[#C9CED8]">
                <FaCheckCircle className="text-[#244C98]" size={18} />
                <span className="text-sm font-medium">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 py-8 md:px-10 md:py-10">
            {/* Lottie */}
            <div className="bg-[#E8EEF8] rounded-2xl border border-[#C9CED8] p-4 md:p-6 flex items-center justify-center">
              <div className="w-full max-w-xs ">
                <Lottie animationData={successLottie} loop={true} />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#C9CED8] bg-white p-5">
                  <p className="text-sm text-[#0F1A33]/70">Status</p>
                  <p className="mt-1 text-lg font-semibold text-[#0F1A33]">Paid & Locked</p>
                  <p className="mt-2 text-sm text-[#0F1A33]/80">This tuition is now locked. The selected tutor is officially confirmed.</p>
                </div>

                <div className="rounded-2xl border border-[#C9CED8] bg-white p-5">
                  <p className="text-sm text-[#0F1A33]/70">What’s next?</p>
                  <ul className="mt-2 space-y-2 text-sm text-[#0F1A33]/85">
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Go to your tuitions and see the confirmed tutor.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Start chatting/coordination (if you add chat later).
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Keep your payment info safe for future reference.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/dashboard/my-tuitions"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0F1A33] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  Go to My Tuitions
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-xl border border-[#C9CED8] bg-white px-5 py-3 text-sm font-semibold text-[#0F1A33] hover:bg-[#E8EEF8] transition"
                >
                  Back to Dashboard
                </Link>
              </div>

              {/* Tiny note */}
              <p className="mt-4 text-xs text-[#0F1A33]/70">Tip: If you don’t see updates immediately, refresh once.</p>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <p className="mt-4 text-center text-xs text-[#0F1A33]/70">EduBridge • Where Trust Shapes Learning</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
