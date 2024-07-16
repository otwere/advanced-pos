import React from "react";

const Logo = ({ collapsed }) => {
  return (
    <div className="flex items-center justify-start p-2 h-16 bg-[hsl(231,26%,95%)] w-full shadow-none transition-all duration-300">
      <img
        src="/snavelogo.png"
        alt="Logo"
        className={`transition-all h-14  ml-2 duration-300 ${collapsed ? "w-12" : "w-14"}`}
      />
      {!collapsed && (
        <div className="ml-3 p-0 mt-[-2px] transition-opacity duration-300">
          <h4 className="text-gray-900 text-wrap font-bold text-lg leading-tight">
            Snave Webhub Africa
          </h4>
          <span className="text-[11px] text-gray-700 text-wrap mr-2">
            Integrated Advanced - POS (v2.0.1)
          </span>
        </div>
      )}
      {collapsed && (
        <div className="ml-1">
          <h4 className="text-blue-800  mt-10 font-semibold text-xs leading-tight h-10 p-2">
            Snave Webhub Africa
          </h4>
        </div>
      )}
    </div>
  );
};

export default Logo;
