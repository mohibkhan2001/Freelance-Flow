import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { MdDashboard, MdWork, MdPeople, MdPayment } from "react-icons/md";

const Navigation = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;
  return (
    <div className="flex-1 py-4 w-full">
      <nav className="space-y-2">
        <NavLink to="/" className={linkClasses}>
          <MdDashboard size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/projects" className={linkClasses}>
          <MdWork size={20} />
          Projects
        </NavLink>
        <NavLink to="/clients" className={linkClasses}>
          <MdPeople size={20} />
          Clients
        </NavLink>
        <NavLink to="/payments" className={linkClasses}>
          <MdPayment size={20} />
          Payments
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
