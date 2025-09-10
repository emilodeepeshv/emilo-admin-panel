import React from "react";
import { ChevronDown } from "lucide-react";
import MonthlyReportsChart from "./MonthlyReportsChart";

const MonthlyReportsSection = ({ data }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 pb-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Monthly Reports</h3>
      <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-100">
        <span>8 Months</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
      <MonthlyReportsChart data={data} />
    </div>
  </div>
);

export default MonthlyReportsSection;