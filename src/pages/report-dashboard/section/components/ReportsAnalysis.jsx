import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const ReportsAnalysis = () => {
  // Category data matching the image
  const categoryData = [
    { name: "Posts", value: 3800, color: "#8B5CF6" },
    { name: "Comments", value: 9830, color: "#EAB308" },
    { name: "Profiles", value: 756, color: "#FB923C" },
    { name: "Messages", value: 5600, color: "#06B6D4" },
    { name: "Others", value: 7800, color: "#10B981" }
  ];

  // Topic data matching the image
  const topicData = [
    { name: "Content", value: 2100, color: "#8B5CF6" },
    { name: "Others", value: 1430, color: "#EAB308" },
    { name: "Harassment", value: 850, color: "#84CC16" },
    { name: "Hate Speech", value: 460, color: "#F87171" },
    { name: "Fake Accounts", value: 362, color: "#EC4899" }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Reports Analysis</h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-100">
            <span>Last 7 Days</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className=" bg-gray-100 p-1.5 rounded-md">
            <SlidersHorizontal className="w-4 h-4 text-[#007ee6] " />
          </button>
        </div>
      </div>

      {/* Category Wise Section */}
      <div className="mb-8 bg-gray-50 rounded-lg p-4 shadow-sm">
        <div className="bg-white rounded-lg px-3 py-2 mb-4 inline-block">
          <p className="text-sm font-medium text-gray-700">Category Wise</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <PieChart width={200} height={200}>
              <Pie 
                data={categoryData} 
                cx={100} 
                cy={100} 
                innerRadius={50}
                outerRadius={85} 
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="space-y-3 flex-1">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Wise Section */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <div className="bg-white rounded-lg px-3 py-2 mb-4 inline-block">
          <p className="text-sm font-medium text-gray-700">Topic Wise</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <PieChart width={200} height={200}>
              <Pie 
                data={topicData} 
                cx={100} 
                cy={100} 
                innerRadius={0}
                outerRadius={85} 
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {topicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="space-y-3 flex-1">
            {topicData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalysis;