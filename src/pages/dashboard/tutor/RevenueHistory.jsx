import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../../../utils/date';

const RevenueHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ['tutorPayments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  // stats
  const totalPayments = payments.length;
  const totalEarned = payments.reduce((sum, payment) => sum + Number(payment.amount), 0);
  const lastPaymentDate = payments[0]?.paidAt ? formatDate(payments[0].paidAt) : '-';

  return (
    <div className="md:px-4 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="bg-base-200 rounded-[2.5rem] p-5 md:p-8 border border-base-300 shadow-sm">
          {/* Header pill */}
          <div className="mx-auto w-full max-w-3xl bg-base-100 rounded-2xl md:rounded-[2.5rem] border border-base-300 shadow-sm px-6 py-7 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-base-200 border border-base-300">
                <FaChartBar className="text-secondary" />
              </span>
              <h2 className="text-xl md:text-2xl font-bold">Revenue History (Tutor)</h2>
            </div>
            <p className="mt-2 text-xs md:text-sm text-neutral">Track your earnings from successful tuition payments.</p>
          </div>

          {/* Summary cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
            <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5">
              <p className="text-sm text-neutral">Payments Received</p>
              <h3 className="mt-1 text-xs md:text-xl font-medium md:font-bold">{totalPayments}</h3>
            </div>

            <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5">
              <p className="text-sm text-neutral">Total Earned</p>
              <h3 className="mt-1 text-xs md:text-xl font-medium md:font-bold">৳ {totalEarned}</h3>
            </div>

            <div className="bg-base-100 rounded-2xl border border-base-300 shadow-sm p-5">
              <p className="text-sm text-neutral">Last Payment</p>
              <h3 className="mt-1 text-xs md:text-xl font-medium md:font-bold">{lastPaymentDate}</h3>
            </div>
          </div>

          {/* Table card */}
          <div className="mt-7 bg-base-100 rounded-2xl border border-base-300 shadow-sm overflow-hidden">
            <div className="px-5 md:px-6 py-5 border-b border-base-300">
              <h3 className="text-lg font-semibold text-base-content">Recent Earnings</h3>
              <p className="text-xs text-neutral mt-1">Showing latest successful payments</p>
            </div>

            <div className="overflow-x-auto">
              <table className="table min-w-[720px]">
                <thead>
                  <tr className="text-base-content">
                    <th className="w-14">#</th>
                    <th>Tuition</th>
                    <th className="w-40">Student</th>
                    <th className="w-32">Amount</th>
                    <th className="w-28">Status</th>
                    <th className="w-36">Paid At</th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((p, idx) => (
                    <tr key={p._id} className="hover:bg-base-200">
                      <th>{idx + 1}</th>

                      <td>
                        <div className="font-semibold text-base-content">{p.tuitionTitle}</div>
                        <div className="text-xs text-neutral">Txn: {p.stripeSessionId?.slice(-8) || '—'}</div>
                      </td>

                      <td className="text-base-content">
                        <div className="font-medium">{p.studentName || '—'}</div>
                      </td>

                      <td className="font-semibold text-base-content">৳ {p.amount}</td>

                      <td>
                        <span className="badge badge-success text-white">{p.status === 'paid' ? 'Paid' : p.status}</span>
                      </td>

                      <td className="text-base-content">{formatDate(p.paidAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-5 md:px-6 py-4 border-t border-base-300">
              <p className="text-xs text-neutral">Tip: On mobile, swipe horizontally to view the full table.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueHistory;
