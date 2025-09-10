// components/PaymentHistoryTable.jsx
import React from 'react';
import { ListFilter, ChevronDown } from 'lucide-react';

const PaymentHistoryTable = ({ paymentHistory }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow">
      <div className="p-6 border-b border-gray-200 ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
            <p className="text-sm text-gray-600">Lorem ipsum is simply dummy text of the printing industry.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm bg-white">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              <ListFilter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Transaction Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Mode
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paymentHistory.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{payment.userName}</div>
                    <div className="text-sm text-blue-600">{payment.handle}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{payment.transactionId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.mode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-3 py-2 rounded-full text-xs font-medium ${
                      payment.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-gray-200 text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">See All</button>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;