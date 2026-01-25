import React from "react";
import StatCard from "./StatCard";
import { VscFolderActive } from "react-icons/vsc";
import { TiInputChecked } from "react-icons/ti";
import { IoTime } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";

const StatsGrid = () => {
  const Stats = [
    {
      icon: VscFolderActive,
      label: "Active Projects",
      value: 2,
      iconColor: "text-blue-800",
      iconBgColor: "bg-blue-200",
    },
    {
      icon: TiInputChecked,
      label: "Pending Tasks",
      value: 5,
      iconColor: "text-orange-400",
      iconBgColor: "bg-orange-200",
    },
    {
      icon: IoTime,
      label: "Upcoming Deadlines",
      value: 3,
      iconColor: "text-red-700",
      iconBgColor: "bg-red-200",
    },
    {
      icon: HiCurrencyDollar,
      label: "Total Earnings",
      value: "$15,250",
      iconColor: "text-green-700",
      iconBgColor: "bg-green-200",
    },
  ];
  return (
    <div className="w-full py-4 flex justify-around">
      {Stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
