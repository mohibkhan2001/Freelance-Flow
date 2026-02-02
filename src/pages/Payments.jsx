import React from "react";
import Header from "../components/common/Header";
import PaymentsGrid from "../components/payments/PaymentsGrid";
import { useState } from "react";

const Payment = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Payments");
  return (
    <div className="w-full h-screen py-6 px-8 flex flex-col">
      <Header
        HeaderName={"Payments & Invoices"}
        HeaderDescription={"Track your earnings and payment status"}
      />
      <PaymentsGrid
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
};

export default Payment;
