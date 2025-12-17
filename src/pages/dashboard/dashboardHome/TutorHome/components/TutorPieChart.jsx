import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const TutorPieChart = ({ applications = [] }) => {
  const totalApply = applications.length;
  const totalSelection = applications.filter((a) => a.applyStatus === 'selected').length;
  const totalRejection = applications.filter((a) => a.applyStatus === 'rejected').length;

  const hasData = totalSelection + totalRejection > 0;

  const data = hasData
    ? [
        { name: 'Selection', value: totalSelection },
        { name: 'Rejection', value: totalRejection },
      ]
    : [{ name: 'No Data', value: 1 }];

  const colors = hasData ? ['#16A34A', '#F97316'] : ['#C9CED8'];

  return (
    <div className="relative w-60 h-[260px] flex justify-center">
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={52}>
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>

        {/*  tooltip */}
        <Tooltip formatter={(value, name) => [`${value}`, name]} contentStyle={{ borderRadius: 10 }} position={{ x: 140, y: 20 }}/>

        <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: 12 }} />
      </PieChart>

      {/* center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mb-20">
        <p className="text-2xl font-bold">{totalApply}</p>
        <p className="text-[11px] text-neutral">Total Apply</p>
      </div>
    </div>
  );
};

export default TutorPieChart;
