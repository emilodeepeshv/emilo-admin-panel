import React from "react";
import { Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { contentsData } from "../../../utils/DashboardFakeData";

const ContentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Contents</h3>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-sm text-gray-500">Last 1 Month</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={contentsData}
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, 300]}
              ticks={[0, 50, 100, 150, 200, 250, 300]}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar
              dataKey={() => 300}
              fill="#E5E7EB"
              radius={[3, 3, 0, 0]}
              barSize={24}
              stroke="none"
            />
            <Bar
              dataKey="value"
              radius={[3, 3, 0, 0]}
              barSize={24}
              stroke="none"
            >
              {contentsData.map((entry, index) => (
                <Bar key={`bar-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentsSection;