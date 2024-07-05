import React from 'react';

const Content = ({ collapsed }) => {
  return (
    <main
      className={`pt-3 transition-all duration-300 ${
        collapsed ? 'ml-[10px] w-[calc(100% - 88px)]' : 'ml-[17px] w-[calc(100% - 262px)]'
      } mt-20 p-6 bg-white rounded-lg shadow-md min-h-[280px]`}
    >
      <h1 className="font-bold text-lg text-gray-800">Dashboard</h1>
      <div className="pt-2 font-medium text-gray-600 text-xs">
        Welcome to the corporate dashboard. Here you can manage users, monitor video surveillance, and upload files.
      </div>
    </main>
  );
};

export default Content;
