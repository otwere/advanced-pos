import React from 'react';
import CardsDashboard from '../CardsDashboardComponents/CardsDashboard';

const Content = ({ collapsed }) => {
  return (
    <main
      className={`pt-3 transition-all duration-300 ${
        collapsed ? 'ml-60px] w-[calc(100% - 88px)]' : 'ml-[14px] w-[calc(100% - 262px)]'
      } mt-20 p-6 bg-white rounded-md shadow-md min-h-[280px]`}
    >
      <h1 className="font-bold text-lg text-gray-800 ml-4 mb-[-10px]">Dashboard Summary</h1>      
        <CardsDashboard/>
    </main>
  );
};

export default Content;
