import React from "react";

const Logo = ({ collapsed }) => {
  return (
    <div className="flex items-center justify-start  p-1 bg-[hsl(231,26%,95%)] w-full shadow-none">
      <img
        src="/snavelogo.png"
        alt="Logo"
        className={`transition-all duration-300 ${collapsed ? "w-12" : "w-11"}`}
      />
      {!collapsed && (
        <div className="ml-1 p-1 mt-0">
          <h4 className="text-gray-900 text-wrap font-bold text-sm leading-tight">
            Snave Webhub Africa
          </h4>
          <span className="text-xs text-gray-700 text-wrap mr-2">
            Integrated Advanced - POS
          </span>
        </div>
      )}
      {collapsed && (
        <div className="ml-2">
          <h4 className="text-blue-800 font-semibold text-sm leading-tight h-15 p-2">
          
          </h4>
        </div>
      )}
    </div>
  );
};

export default Logo;
