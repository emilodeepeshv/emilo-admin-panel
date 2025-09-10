import React from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const ReportsStatus = () => {
  // Data matching the image exactly
  const statusData = [
    { category: "Posts", completed: 3180, pending: 620, completedColor: "#8B5CF6", pendingColor: "#EF4444" },
    { category: "Comments", completed: 9020, pending: 810, completedColor: "#EAB308", pendingColor: "#EF4444" },
    { category: "Profiles", completed: 453, pending: 303, completedColor: "#FB923C", pendingColor: "#EF4444" },
    { category: "Messages", completed: 4240, pending: 1360, completedColor: "#06B6D4", pendingColor: "#EF4444" },
    { category: "Others", completed: 5990, pending: 1810, completedColor: "#10B981", pendingColor: "#EF4444" }
  ];

  const legendData = [
    { name: "Posts", value: 3800, color: "#8B5CF6" },
    { name: "Comments", value: 9830, color: "#EAB308" },
    { name: "Profiles", value: 756, color: "#FB923C" },
    { name: "Messages", value: 5600, color: "#06B6D4" },
    { name: "Others", value: 7800, color: "#10B981" }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Reports Status</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-gray-600">Pending</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-100">
            <span>Last 7 Days</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="bg-gray-100 p-1.5 rounded-md">
            <SlidersHorizontal className="w-4 h-4 text-[#007ee6]" />
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-6">
        <div className="space-y-6">
          {statusData.map((item, index) => {
            const total = item.completed + item.pending;
            const completedWidth = (item.completed / total) * 100;
            const pendingWidth = (item.pending / total) * 100;
            
            return (
              <div key={index} className="relative">
                {/* Completed value label */}
                <div className="absolute -top-6 left-0 text-xs font-medium text-green-600">
                  {item.completed}
                </div>
                {/* Pending value label */}
                <div className="absolute -top-6 right-0 text-xs font-medium text-red-600">
                  {item.pending}
                </div>
                
                {/* Stacked bar */}
                <div className="flex h-6 rounded-full overflow-hidden bg-gray-200">
                  <div 
                    className="h-full rounded-l-full"
                    style={{ 
                      width: `${completedWidth}%`, 
                      backgroundColor: item.completedColor 
                    }}
                  />
                  <div 
                    className="h-full rounded-r-full"
                    style={{ 
                      width: `${pendingWidth}%`, 
                      backgroundColor: item.pendingColor 
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {legendData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
            <span className="text-sm font-semibold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsStatus;