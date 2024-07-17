import React from 'react';

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2 w-full sm:w-1/2 md:w-1/4">
    <h3 className="font-bold text-lg text-gray-700 mb-2">{title}</h3>
    <p className="text-3xl font-semibold text-blue-600">{value}</p>
  </div>
);

const StatsComponent = () => {
  const stats = [
    { title: 'Reach', value: '40k+' },
    { title: 'Colleges Reached', value: '20+' },
    { title: 'Community', value: '2k+' },
    { title: 'Validators', value: '20+' },
  ];

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Platform Statistics</h2>
      <div className="flex flex-wrap justify-center">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;