import React from "react";
import { GoAlertFill } from "react-icons/go";

const AlertBanner = () => {
  return (
    <div className="w-full border-red-300 border rounded-xl bg-red-50 px-8 py-4 flex gap-4 items-center">
      <div>
        <GoAlertFill className="text-red-600 text-xl"/>
      </div>
      <div>
        <p className="text-md text-red-950 font-semibold">Overdue Payments</p>
        <span className="text-sm text-red-600">You have 1 overdue payment that need attention.</span>
      </div>
    </div>
  );
};

export default AlertBanner;
