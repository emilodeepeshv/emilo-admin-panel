import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Calendar, ChevronDown, Info, FileText } from "lucide-react";

const TransparencyReports = () => {
  const chartData = [
    { category: "Posts", received: 2000, taken: 1800 },
    { category: "Comments", received: 4000, taken: 3800 },
    { category: "Profiles", received: 1000, taken: 800 },
    { category: "Groups", received: 3200, taken: 3000 },
    { category: "Messages", received: 1500, taken: 1300 },
    { category: "Ads", received: 2500, taken: 2300 },
    { category: "Others", received: 1200, taken: 1000 }
  ];

  const statsData = [
    { label: "Posts", native: 2034, received: 1634, taken: "-", color: "bg-blue-500" },
    { label: "Comments", native: 3765, received: 3765, taken: "-", color: "bg-yellow-500" },
    { label: "Profiles", native: 1263, received: 1093, taken: "-", color: "bg-orange-500" },
    { label: "Messages", native: 3283, received: 3283, taken: "-", color: "bg-cyan-400" },
    { label: "Groups", native: 1804, received: 1370, taken: "-", color: "bg-teal-500" },
    { label: "Ads", native: 2500, received: 2500, taken: "-", color: "bg-yellow-600" },
    { label: "Others", native: 1287, received: 1287, taken: "-", color: "bg-gray-500" }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-2 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Transparency Reports</h3>
        </div>
        <div className="flex items-center gap-2 text-sm px-3 py-1 bg-gray-50 rounded-md">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-gray-700">Last 1 Week</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600 font-medium">Reports Received/Actions Taken</span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Schedule Publish
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Publish Now
          </button>
        </div>
      </div>

      <div className="shadow-md p-5 rounded-2xl border border-gray-100">
        <div className="flex gap-8 items-start">
        {/* Left Side - Chart */}
        <div className="flex-1">
          <div className="h-90 ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 40, right: 20, left: 40, bottom: 30 }} barCategoryGap="30%">
                <XAxis 
                  dataKey="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                  height={60}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis 
                  domain={[0, 4000]}
                  ticks={[0, 1000, 2000, 3000, 4000]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  width={50}
                />
                <Bar dataKey="received" fill="#8B5CF6" radius={[2, 2, 0, 0]} barSize={12} />
                <Bar dataKey="taken" fill="#3B82F6" radius={[2, 2, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          
        </div>

        {/* Right Side - Stats */}
        <div className="w-80">
          {/* Headers */}
          <div className="flex text-sm font-medium text-gray-500 mb-4 pb-2">
            <div className="flex-1"></div>
            <div className="w-20 text-center">Reports Native</div>
            <div className="w-20 text-center">Reports Received</div>
            <div className="w-20 text-center">Actions Taken</div>
          </div>

          {/* Stats List */}
          <div className="space-y-3">
            {statsData.map((item, idx) => (
              <div key={idx} className="flex items-center text-sm">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
                <div className="w-20 text-center font-semibold text-gray-900">{item.native}</div>
                <div className="w-20 text-center font-semibold text-blue-600">{item.received}</div>
                <div className="w-20 text-center font-medium text-gray-400">{item.taken}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>

<div className="shadow-md p-5 rounded-2xl border border-gray-100 mt-4">
        {/* Progress Bars */}
      <div className="mt-8 space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Reports Received</span>
            <span className="font-bold text-gray-900">15,592</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-purple-600 rounded-full" style={{ width: "96%" }} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Actions Taken</span>
            <span className="font-bold text-gray-900">15,108</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: "94%" }} />
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 flex items-center text-sm gap-6">
        <div>
          <span className="text-gray-600">Actions Taken </span>
          <span className="font-bold text-gray-900 text-xl">96%</span>
        </div>
        <div>
          <span className="text-gray-600">Change vs previous month </span>
          <span className="text-green-600 font-bold">▲ 6%</span>
        </div>
      </div>
</div>
    </div>
  );
};

export default TransparencyReports;