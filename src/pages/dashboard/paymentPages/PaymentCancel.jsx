import React from 'react';
import Lottie from 'lottie-react';
import lottieCancel from '../../../assets/Payment Failed.json';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#E8EEF8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#C9CED8] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-6 md:px-10 md:py-8 border-b border-[#C9CED8]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-[#0F1A33] tracking-tight">Payment Cancelled</h1>
                <p className="mt-2 text-sm md:text-base text-[#0F1A33]/80">The payment was not completed. No charge has been made.</p>
              </div>

              <div className="flex items-center gap-2 bg-[#FDECEC] text-[#B42318] px-3 py-2 rounded-xl border border-[#F5C2C0]">
                <FiXCircle size={18} />
                <span className="text-sm font-medium">Cancelled</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 py-8 md:px-10 md:py-10">
            {/* Lottie */}
            <div className="bg-[#FDECEC] rounded-2xl border border-[#F5C2C0] p-4 md:p-6 flex items-center justify-center">
              <div className="w-full max-w-xs">
                <Lottie animationData={lottieCancel} loop={true} />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#C9CED8] bg-white p-5">
                  <p className="text-sm text-[#0F1A33]/70">Status</p>
                  <p className="mt-1 text-lg font-semibold text-[#B42318]">Payment Not Completed</p>
                  <p className="mt-2 text-sm text-[#0F1A33]/80">You can safely retry the payment anytime. Your tuition is still pending.</p>
                </div>

                <div className="rounded-2xl border border-[#C9CED8] bg-white p-5">
                  <p className="text-sm text-[#0F1A33]/70">What can you do now?</p>
                  <ul className="mt-2 space-y-2 text-sm text-[#0F1A33]/85">
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Retry the payment from applied tutors.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Review tutor details before retrying.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-[#244C98]" />
                      Contact support if you face repeated issues.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/dashboard/applied-tutors"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0F1A33] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  Retry Payment
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-xl border border-[#C9CED8] bg-white px-5 py-3 text-sm font-semibold text-[#0F1A33] hover:bg-[#E8EEF8] transition"
                >
                  Back to Dashboard
                </Link>
              </div>

              {/* Tiny note */}
              <p className="mt-4 text-xs text-[#0F1A33]/70">Tip: If money was deducted accidentally, it will be auto-refunded by Stripe.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-[#0F1A33]/70">EduBridge • Where Trust Shapes Learning</p>
      </div>
    </div>
  );
};

export default PaymentCancel;
