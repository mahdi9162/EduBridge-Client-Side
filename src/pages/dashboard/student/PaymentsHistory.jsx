import React from 'react';
import { FaReceipt } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../../../utils/date';
import Container from '../../../components/Container/Container';

const PaymentsHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentsHistories = [] } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment-history');
      return res.data;
    },
  });

  // stats
  const totalPayments = paymentsHistories.length;
  const totalPaid = paymentsHistories.reduce((sum, payment) => sum + Number(payment.amount), 0);
  const lastPaymentDate = paymentsHistories[0]?.paidAt ? formatDate(paymentsHistories[0].paidAt) : '-';

  return (
    <Container>
      <div className="px-3 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-base-200 rounded-4xl px-3 md:px-6 py-6 lg:p-10">
            {/* Header pill */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-2xl bg-white border border-base-300 flex items-center justify-center shadow-sm">
                <FaReceipt className="text-secondary text-xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-base-content leading-tight">Payments History</h2>
                <p className="text-xs md:text-sm text-neutral mt-1">Your recent tuition payments and transaction details.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-white rounded-2xl border border-base-300 shadow-sm p-5">
                <p className="text-sm text-neutral">Total Payments</p>
                <p className="text-lg lg:text-2xl font-medium lg:font-bold text-base-content mt-2">{totalPayments}</p>
              </div>

              <div className="bg-white rounded-2xl border border-base-300 shadow-sm p-5">
                <p className="text-sm text-neutral">Total Paid</p>
                <p className="text-lg lg:text-2xl font-medium lg:font-bold text-base-content mt-2">৳{totalPaid}</p>
              </div>

              <div className="bg-white rounded-2xl border border-base-300 shadow-sm p-5">
                <p className="text-sm text-neutral">Last Payment</p>
                <p className="text-lg lg:text-2xl font-medium lg:font-bold text-base-content mt-2">{lastPaymentDate}</p>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-base-300 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-base-300">
                <h3 className="text-lg font-bold text-base-content">Recent Payments</h3>
                <p className="text-sm text-neutral">Showing latest transactions</p>
              </div>

              {/* table  */}
              <div className="overflow-x-auto">
                <table className="table w-full min-w-[720px]">
                  <thead>
                    <tr className="text-base-content">
                      <th>#</th>
                      <th>Tuition</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {paymentsHistories.map((p, idx) => (
                      <tr key={p.id} className="hover:bg-base-200">
                        <th>{idx + 1}</th>

                        <td>
                          <div className="font-medium md:font-semibold text-base-content">{p.tuitionTitle}</div>
                          <div className="text-xs text-neutral">Txn: {p?.stripeSessionId?.slice(-8) || '—'}</div>
                        </td>

                        <td className="font-semibold text-base-content">৳ {p.amount}</td>

                        <td>
                          <span className="badge badge-success text-white">{p.status && 'Paid'}</span>
                        </td>

                        <td className="text-base-content">{formatDate(p.paidAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer hint */}
              <div className="px-6 py-4 border-t border-base-300">
                <p className="text-xs text-neutral">Tip: On small screens, swipe horizontally to see all payment details.</p>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-neutral mt-6">EduBridge • Where Trust Shapes Learning</div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentsHistory;
