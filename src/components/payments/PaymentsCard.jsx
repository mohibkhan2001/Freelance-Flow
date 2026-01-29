import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiChartLineUp } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";

const PaymentsCard = () => {
  const payments = [
    {
      icon: <IoIosCheckmarkCircleOutline />,
      amount: "$15,250",
      label: "Total Earnings",
      iconColor: "text-green-700",
      bgColor: "bg-green-200",
    },
    {
      icon: <PiChartLineUp />,
      amount: "$14,250",
      label: "Pending Amount",
      iconColor: "text-orange-700",
      bgColor: "bg-orange-200",
    },
    {
      icon: <MdErrorOutline />,
      amount: "$5,000",
      label: "Overdue Amount",
      iconColor: "text-red-500",
      bgColor: "bg-red-100",
    },
  ];
  return (
    <div className="flex flex-wrap w-full relative gap-8">
      {payments.map((payment) => {
        return (
          <div className="payment_card border h-fit  w-lg rounded-2xl border-gray-200 p-8 flex flex-col justify-around gap-4">
            <div className={`w-12 h-12 p-3 rounded-full ${payment.bgColor}`}>
              {React.cloneElement(payment.icon, {
                className: `text-2xl ${payment.iconColor}`
              })}
            </div>
            <p className="text-2xl font-semibold">{payment.amount}</p>
            <span className="text-gray-500 text-sm">{payment.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentsCard;
