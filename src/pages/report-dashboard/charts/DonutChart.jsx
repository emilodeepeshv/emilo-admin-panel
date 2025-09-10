import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const DonutChart = ({ data }) => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={45}
        outerRadius={85}
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center text-sm">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-gray-600 mr-2">{item.name}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DonutChart;
