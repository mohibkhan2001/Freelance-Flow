import React from "react";

const StatCard = ({ icon: Icon, label, value, iconColor, iconBgColor }) => {
  return (
    <div className="StatsCard max-w-90 w-full  rounded-xl bg-white p-8 flex flex-col gap-4 border border-gray-200 hover:scale-105 transition-all">
      <div className={`p-2 w-fit rounded-2xl ${iconBgColor}`} >
      <Icon className={`text-3xl ${iconColor}`} />
      </div>
      <h1 className="font-semibold text-2xl">{value}</h1>
      <p className="text-md text-gray-500">{label}</p>
    </div>
  );
};

export default StatCard;
