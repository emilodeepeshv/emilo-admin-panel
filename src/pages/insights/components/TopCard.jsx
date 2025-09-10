import React from "react";
import { Info } from "lucide-react";

const TopCard = ({ icon, title, value, breakdown }) => {
  const isString = typeof icon === 'string';
  const Icon = !isString ? icon : null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-row justify-between align-center mb-6">
        <div className="flex items-center gap-2 mb-2">
        {isString ? (
          <img src={icon} alt={title} className="w-5 h-5 text-gray-600" />
        ) : (
          <Icon className="w-5 h-5 text-gray-600" />
        )}
        <span className="text-md font-semibold text-black">{title}</span>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {value.toLocaleString()}
      </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-md">
        {breakdown.map((item, i) => (
          <div key={i}>
            <div className="font-bold text-gray-900">{item.value}</div>
            <div className="text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCard;