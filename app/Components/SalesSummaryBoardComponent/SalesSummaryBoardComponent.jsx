import React from "react";
import DateOnlyComponent from "../DateOnlyComponent/DateOnlyComponent";

const SalesSummaryBoardComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <h2 className="text-l font-semibold text-gray-800 mt-2">
            Today's Sales Summary
          </h2>
        </div>
        <DateOnlyComponent />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 mt-2">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left uppercase font-semibold text-xs tracking-wider">
                Category
              </th>
              <th className="py-3 px-4 text-right uppercase  font-semibold text-xs tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-left">
            {[
              { label: "Total Sales", value: 120000.00 },
              { label: "Cash Sales", value: 46000.00 },
              { label: "Mpesa Payment", value: 0.00 },
              { label: "Invoice Sales", value: 45600.00 },
              { label: "Cheque Payment", value: 600.00 },
              { label: "Direct Bank Transfer", value: 200.00 },
              { label: "PDQ Payment", value: 1300.00 },
            ].map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-3 px-4 text-sm">{item.label}</td>
                <td className="py-3 px-4 text-sm text-right">{item.value.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesSummaryBoardComponent;
