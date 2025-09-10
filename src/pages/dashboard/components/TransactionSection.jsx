import React from "react";
import { ListFilter } from "lucide-react";

const TransactionSection = () => {
  const transactions = [
    {
      name: "Praveen Dubey",
      username: "@praveendubey",
      id: "124586757687852",
      mode: "Wallet",
      date: "27 Feb, 2024",
      amount: "₹ 6,000.00",
      status: "Completed",
    },
    {
      name: "Praveen Dubey",
      username: "@praveendubey",
      id: "124586757687852",
      mode: "Net Banking",
      date: "27 Feb, 2024",
      amount: "₹ 25,000.00",
      status: "Failed",
    },
    {
      name: "Praveen Dubey",
      username: "@praveendubey",
      id: "124586757687852",
      mode: "UPI",
      date: "27 Feb, 2024",
      amount: "₹ 15,000.00",
      status: "Completed",
    },
    {
      name: "Praveen Dubey",
      username: "@praveendubey",
      id: "124586757687852",
      mode: "Wallet",
      date: "27 Feb, 2024",
      amount: "₹ 10,000.00",
      status: "Completed",
    },
    {
      name: "Praveen Dubey",
      username: "@praveendubey",
      id: "124586757687852",
      mode: "Wallet",
      date: "27 Feb, 2024",
      amount: "₹ 10,000.00",
      status: "Completed",
    },
  ];

  const ChevronDown = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Transaction</h3>
          <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 px-3 py-1 rounded">
            <span>Last 7 Days</span>
            <ChevronDown />
          </button>
          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 px-3 py-1 rounded ml-4">
            <ListFilter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-left text-gray-500 text-xs font-medium border-b border-gray-200">
              <th className="pb-3 font-medium">User Name</th>
              <th className="pb-3 font-medium">Transaction Id</th>
              <th className="pb-3 font-medium">Mode</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((tx, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-4">
                  <div>
                    <div className="font-medium text-gray-900">{tx.name}</div>
                    <div className="text-xs text-blue-500">{tx.username}</div>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <div className="text-blue-600 font-medium">{tx.id}</div>
                    <div className="text-xs text-gray-500">{tx.date}</div>
                  </div>
                </td>
                <td className="py-4 text-gray-900">{tx.mode}</td>
                <td className="py-4 font-medium text-blue-600">{tx.amount}</td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === "Completed" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <button className="text-blue-600 text-sm hover:text-blue-700">See All</button>
      </div>
    </div>
  );
};

export default TransactionSection;