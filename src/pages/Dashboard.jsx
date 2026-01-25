import React from "react";
import Header from "../components/common/Header";
import StatsGrid from "../components/dashboard/StatsGrid";
import AlertBanner from "../components/dashboard/AlertBanner";
import DashboardContent from "../components/dashboard/DashboardContent";

const Dashboard = () => {
  return <div className="w-full h-screen py-6 px-8">
    <Header HeaderName={"Dashboard"} HeaderDescription={"Welcome back! Here's your project overview."}/>
    <StatsGrid/>
    <AlertBanner/>
    <DashboardContent/>
  </div>
};

export default Dashboard;
