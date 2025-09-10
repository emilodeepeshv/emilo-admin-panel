import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";

const MonthlyReportsChart = ({ data }) => (
  <div className="w-full bg-white rounded-2xl p-4 shadow-sm">
    <h2 className="text-lg font-semibold mb-2">Contents</h2>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        {/* Background grid lines */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />

        {/* X Axis */}
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />

        {/* Y Axis with scale */}
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />

        {/* Tooltip */}
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const d = payload[0].payload;
              return (
                <div
                  className="text-xs font-medium text-white px-2 py-1 rounded text-center shadow-lg"
                  style={{ backgroundColor: d.color, minWidth: "60px" }}
                >
                  <div>{label}</div>
                  <div className="font-semibold">
                    {d.value.toLocaleString()}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />

        {/* Bars */}
        <Bar dataKey="value" radius={[12, 12, 12, 12]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyReportsChart;
