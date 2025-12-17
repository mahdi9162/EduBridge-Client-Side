import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminRevenue = ({ payments = [] }) => {
  // totals
  const totalAdminRevenue = payments.reduce((sum, p) => sum + Number(p.adminFee || 0), 0);

  const totalVolume = payments.reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const totalTutorEarnings = Math.max(totalVolume - totalAdminRevenue, 0);

  // single-bar data
  const data = [
    {
      name: 'Total',
      adminRevenue: totalAdminRevenue,
      tutorEarnings: totalTutorEarnings,
      totalVolume: totalVolume,
    },
  ];

  return (
    <div className="w-full bg-base-100 border border-base-300 rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg">
      {/* Header */}
      <div className="mb-3 md:mb-4">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-base-content">Revenue Overview</h3>
        {/* mobile default = text-xs */}
        <p className="text-xs md:text-sm text-neutral">Admin earnings based on completed payments</p>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px] md:h-80 lg:h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 0 }} barCategoryGap="40%">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={false} formatter={(v) => `৳ ${Number(v).toLocaleString()}`} />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              wrapperStyle={{ fontSize: '11px', lineHeight: '14px', marginTop: 6 }}
            />

            <Bar dataKey="adminRevenue" name="Admin Revenue" fill="#0F1A33" radius={[8, 8, 0, 0]} />
            <Bar dataKey="tutorEarnings" name="Tutor Earnings" fill="#244C98" radius={[8, 8, 0, 0]} />
            <Bar dataKey="totalVolume" name="Total Volume" fill="#8A94A6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        <div className="dashboard-card">
          <p className="text-xs text-gray-500">Admin Revenue</p>
          <p className="text-lg font-semibold">৳ {totalAdminRevenue}</p>
        </div>

        <div className="dashboard-card">
          <p className="text-xs text-gray-500">Tutor Earnings</p>
          <p className="text-lg font-semibold">৳ {totalTutorEarnings}</p>
        </div>

        <div className="dashboard-card md:col-span-1 sm:col-span-2">
          <p className="text-xs text-gray-500">Total Volume</p>
          <p className="text-lg font-semibold">৳ {totalVolume}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
