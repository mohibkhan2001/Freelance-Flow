import React from "react";

const PaymentsFilter = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    "All Payments",
    "Paid",
    "Unpaid",
    "Overdue",
  ];
  return (
    <div className="flex items-center gap-15 select-none pt-10">
      {filters.map((filter, index) => {
        return (
          <div
            key={index}
            className={`border w-28 py-3 px-2 rounded-lg text-center font-semibol transition-all cursor-pointer ${
              selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-blue-400 text-white'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            <p className="">{filter}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentsFilter;
