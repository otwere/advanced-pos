import React from "react";
import DateTime from "../DateTimeComponent/DateTime";

// Current date in day-mm-yyyy format
const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
};

// Month & year in mm-yyyy format
const getCurrentMonth = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${month}-${year}`;
};

const data = [
  {
    title: "TODAY'S SALES",
    amount: "Kshs 150,210.00",
    subtitle: getCurrentDate(),
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    icon: "💵",
  },
  {
    title: "CREDIT SALES",
    amount: "Kshs 2,000.00",
    subtitle: "Accounts Receivable",
    color: "bg-teal-600",
    hoverColor: "hover:bg-teal-700",
    icon: "📈",
  },
  {
    title: "PURCHASE DUE",
    amount: "Kshs 66,250.00",
    subtitle: "Accounts Payable",
    color: "bg-lime-600",
    hoverColor: "hover:bg-lime-700",
    icon: "📬",
  },
  {
    title: "EXPENSE AMOUNT",
    amount: "Kshs 4,550.00",
    subtitle: `For ${getCurrentMonth()}`,
    color: "bg-red-500",
    hoverColor: "hover:bg-red-700",
    icon: "💸",
  },
  {
    title: "CUSTOMERS ",
    amount: "No. of Clients - 40",
    subtitle: `As at ${getCurrentMonth()}`,
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    icon: "🧑‍🤝‍🧑",
  },
  {
    title: "SUPPLIERS",
    amount: "No of Suppliers - 40",
    subtitle: `As at ${getCurrentMonth()}`,
    color: "bg-slate-600",
    hoverColor: "hover:bg-slate-700",
    icon: "🚚",
  },
  {
    title: "PURCHASE INVOICE",
    amount: "No of Invoice - 10",
    subtitle: `As at ${getCurrentMonth()}`,
    color: "bg-orange-400",
    hoverColor: "hover:bg-orange-700",
    icon: "📄",
  },
  {
    title: "SALES INVOICE",
    amount: "No of Invoice - 40",
    subtitle: `As at ${getCurrentMonth()}`,
    color: "bg-yellow-600",
    hoverColor: "hover:bg-yellow-700",
    icon: "📄",
  },
];

const Breadcrumb = () => (
  <nav className="text-sm mb-4 border-b border-gray-300 pb-2 flex items-center">
    <ol className="list-none p-0 inline-flex mr-auto">
      <li className="flex items-center">
        <a href="/" className="text-gray-500 hover:text-gray-700 ">
          Home
        </a>
        <svg
          className="fill-current w-3 h-3 mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </li>
      <li>
        <span className="text-gray-500">Dashboard</span>
      </li>
    </ol>
    <div className="ml-auto">
      <DateTime />
    </div>
  </nav>
);

const CardsDashboard = () => {
  return (
    <div className="site-card-wrapper p-4">
      <Breadcrumb />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-md shadow-md ${item.color} ${item.hoverColor} text-white flex items-center transform transition duration-300 hover:scale-95`}
          >
            <div className="flex items-center">
              <div className="text-3xl mr-3">
                <div className="border-r-2 border-white pr-2">{item.icon}</div>
              </div>
              <div>
                <h2 className="dark:text-white text-xs font-bold mt-[-10px] mb-1">
                  {item.title}
                </h2>
                <p className="dark:text-white text-xs font-semibold mt-2 mb-1">
                  {item.amount}
                </p>
                {item.subtitle && (
                  <div className="border-t border-gray-300 pt-1 text-xs text-gray-200 mt-2">
                    {item.subtitle}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsDashboard;
