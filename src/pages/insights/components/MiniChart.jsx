import React from "react";

export const MiniChart = ({ color = "bg-blue-500" }) => (
  <div className="w-12 h-6 flex items-end gap-0.5">
    {["h-2","h-4","h-3","h-5","h-2","h-6","h-4"].map((h, i) => (
      <div key={i} className={`w-1 ${h} ${color} rounded-sm`} />
    ))}
  </div>
);
