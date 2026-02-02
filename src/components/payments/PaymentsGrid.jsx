import React from "react";
import PaymentsCard from "./PaymentsCard";
import PaymentsFilter from "./PaymentsFilter";
import PaymentsTable from "./PaymentsTable";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

const PaymentsGrid = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="payments_grid py-4 flex-1">
      <PaymentsCard selectedFilter={selectedFilter} />
      <PaymentsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <PaymentsTable selectedFilter={selectedFilter} />
    </div>
  );
};

export default PaymentsGrid; 
