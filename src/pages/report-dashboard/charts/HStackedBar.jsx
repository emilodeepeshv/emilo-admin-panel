import React from "react";

const HStackedBar = ({ data }) => (
  <div className="space-y-3">
    {data.map((item, index) => {
      const total = item.completed + item.pending;
      const completedPercent = (item.completed / total) * 100;
      const pendingPercent = (item.pending / total) * 100;

      return (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">{item.completed}</span>
            <span className="text-gray-600">{item.pending}</span>
          </div>
          <div className="flex h-6 bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-blue-500" style={{ width: `${completedPercent}%` }}></div>
            <div className="bg-red-500" style={{ width: `${pendingPercent}%` }}></div>
          </div>
        </div>
      );
    })}
    <div className="flex justify-between items-center mt-4 text-xs">
      <div className="flex items-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-gray-600">Completed</span>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        <span className="text-gray-600">Pending</span>
      </div>
    </div>
  </div>
);

export default HStackedBar;
