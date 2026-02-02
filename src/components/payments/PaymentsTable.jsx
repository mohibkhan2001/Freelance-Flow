import React from "react";
import { FaDollarSign } from "react-icons/fa";

const PaymentsTable = ({ selectedFilter = "All Payments" }) => {
  const payments = [
    {
      invoice_no: "INV-2026-001",
      project_name: "Website Redesign",
      client_name: "TechCorp Inc.",
      amount: "$4,250",
      due_date: "Jan 20, 2026",
      status: "paid",
    },
    {
      invoice_no: "INV-2026-002",
      project_name: "Website Redesign",
      client_name: "TechCorp Inc.",
      amount: "$4,250",
      due_date: "Feb 20, 2026",
      status: "unpaid",
    },
    {
      invoice_no: "INV-2026-003",
      project_name: "Mobile App Development",
      client_name: "Creative Design Studio",
      amount: "$5,000",
      due_date: "Jan 15, 2026",
      status: "paid",
    },
    {
      invoice_no: "INV-2026-004",
      project_name: "Mobile App Development",
      client_name: "Creative Design Studio",
      amount: "$10,000",
      due_date: "Mar 5, 2026",
      status: "unpaid",
    },
    {
      invoice_no: "INV-2026-005",
      project_name: "Brand Identity Package",
      client_name: "Startup Ventures",
      amount: "$5,000",
      due_date: "Jan 10, 2026",
      status: "overdue",
    },
    {
      invoice_no: "INV-2026-006",
      project_name: "Marketing Campaign",
      client_name: "TechCorp Inc.",
      amount: "$6,000",
      due_date: "Jan 10, 2026",
      status: "paid",
    },
  ];

  const statusClass = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "unpaid":
        return "bg-yellow-100 text-yellow-700";
      case "overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const normalizedFilter = (selectedFilter ?? "All Payments").toLowerCase();
  const filteredPayments = normalizedFilter.includes("all")
    ? payments
    : payments.filter(p => p.status === normalizedFilter);

return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="px-4 py-3">Invoice</th>
            <th className="px-4 py-3">Project</th>
            <th className="px-4 py-3">Client</th>
            <th className="px-4 py-3 text-right">Amount</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {filteredPayments.map((p, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-4 py-4 align-middle">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-gray-50 text-gray-500">
                    <FaDollarSign />
                  </div>
                  <a href="#" className="font-medium text-gray-800 hover:text-indigo-600">
                    {p.invoice_no}
                  </a>
                </div>
              </td>

              <td className="px-4 py-4 align-middle text-gray-700">{p.project_name}</td>

              <td className="px-4 py-4 align-middle text-gray-700">{p.client_name}</td>

              <td className="px-4 py-4 align-middle text-right font-semibold text-gray-800">{p.amount}</td>

              <td className="px-4 py-4 align-middle text-gray-500">{p.due_date}</td>

              <td className="px-4 py-4 align-middle">
                <span className={`w-fit px-3 py-1 rounded-full text-sm font-medium ${statusClass(p.status)}`}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
