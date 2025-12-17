import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const AdminPieChart = ({ dbUsers }) => {
  const totalUsers = dbUsers?.length;
  const teachers = dbUsers?.filter((user) => user.userType === 'teacher').length;
  const student = dbUsers?.filter((user) => user.userType === 'student').length;

  const data = [
    { name: 'Teachers', value: teachers },
    { name: 'Students', value: student },
  ];

  const COLORS = ['#244C98', '#0F1A33'];

  return (
    <div className="relative width={240} height={230} flex justify-center">
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={80} innerRadius={50}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value}`, name]} contentStyle={{ borderRadius: 12 }} />
        <Legend wrapperStyle={{ marginLeft: 8 }} layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
      </PieChart>
      {/* inside chart */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-2xl font-bold text-center mb-12">
          <p>{totalUsers}</p>
          <p className="text-[11px] text-neutral">Total Users</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPieChart;
