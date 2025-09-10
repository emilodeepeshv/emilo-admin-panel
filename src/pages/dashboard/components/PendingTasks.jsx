import React from "react";
import { Calendar } from "lucide-react";

const PendingTasks = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Pending Tasks</h3>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-sm text-gray-500">Last 1 Month</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {["Posts", "Soft Corner", "Ads", "Flix"].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-3 rounded-lg flex items-center justify-between"
          >
            <div>
              <div className="text-xs text-gray-500">{item}</div>
              <div className="text-lg font-bold text-indigo-600">2,286</div>
            </div>
            <button className="text-sm text-blue-600">View All</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingTasks;