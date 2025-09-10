import React from "react";
import { Info } from "lucide-react";

const ActionsTakenCard = ({ value, breakdown }) => {
  // Generate SVG path for curved line chart
  const generateCurvePath = (index) => {
    const points = [
      [0, 20 + Math.random() * 10],
      [20, 15 + Math.random() * 8],
      [40, 25 + Math.random() * 6],
      [60, 10 + Math.random() * 12],
      [80, 18 + Math.random() * 8]
    ];
    
    let path = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev[0] + curr[0]) / 2;
      path += ` Q ${cpx} ${prev[1]} ${curr[0]} ${curr[1]}`;
    }
    return path;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-row justify-between align-center mb-4">
        <div className="flex items-center gap-2 mb-2">
        <img src="/noun-click-5696069.svg" alt="Actions Taken" className="w-5 h-5 text-gray-600" />
        <span className="text-md text-black font-semibold">Actions Taken</span>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {value.toLocaleString()}
      </h2>
      </div>
      <div className="flex justify-between items-end gap-4">
        {breakdown.map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            {/* Mini Chart with Curve and Gradient */}
            <div className="w-20 h-12 mb-2 relative">
              <svg viewBox="0 0 80 40" className="w-full h-full">
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Fill Area under curve */}
                <path
                  d={`${generateCurvePath(idx)} L 80 35 L 0 35 Z`}
                  fill={`url(#gradient-${idx})`}
                  className="opacity-60"
                />
                
                {/* Curve Line */}
                <path
                  d={generateCurvePath(idx)}
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  className="drop-shadow-sm"
                />
              </svg>
            </div>
            
            {/* Value and Label */}
            <div className="text-lg font-bold text-gray-900">
              {item.value.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsTakenCard;