import React, { useState, useEffect } from 'react';

const StatCard = ({ title, endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const isThousands = endValue.toLowerCase().includes('k');
    const multiplier = isThousands ? 1000 : 1;
    const numericValue = parseFloat(endValue.replace(/[^0-9.]/g, ""));
    const end = numericValue * multiplier;
    const duration = 3000; // Animation duration in milliseconds
    const increment = end / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  const formatDisplay = (value) => {
    if (endValue.toLowerCase().includes('k')) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-full sm:w-1/2 md:w-1/4">
      <h3 className="font-bold text-lg text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-semibold text-blue-600">
        {formatDisplay(count)}
        {endValue.includes('+') ? '+' : ''}
      </p>
    </div>
  );
};

const StatsComponent = () => {
  const stats = [
    { title: 'Reach', value: '40k+' },
    { title: 'Colleges Reached', value: '20+' },
    { title: 'Community', value: '2k+' },
    { title: 'Validators', value: '20+' },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Platform Statistics</h2>
      <div className="flex flex-wrap justify-center">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} endValue={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;