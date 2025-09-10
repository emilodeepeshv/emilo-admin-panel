import React from "react";
import { Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { adsData } from "../../../utils/DashboardFakeData";

const AdsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Ads</h3>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-sm text-gray-500">Last 1 Month</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">15.84k</div>
        <div className="text-sm text-blue-600 mb-1">Active Ads</div>
        <div className="flex items-center">
          <span className="text-sm text-green-500">▲ 14%</span>
          <span className="text-sm text-gray-500 ml-1">vs previous 7 days</span>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={adsData}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, 4000]}
              ticks={[0, 1000, 2000, 3000, 4000]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdsSection;