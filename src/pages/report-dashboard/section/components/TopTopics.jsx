import React from "react";

const TopTopics = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-3 pb-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900">Top Topics</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-100">
          <span>Top 10</span>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <div className="space-y-6">
          {data.map((item, index) => {
            const width = (item.value / maxValue) * 100;
            return (
              <div key={index} className="flex items-center space-x-6">
                <span className="text-base font-medium text-gray-700 w-16 flex-shrink-0">{item.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-5 relative">
                  <div className="bg-yellow-400 h-5 rounded-full" style={{ width: `${width}%` }} />
                </div>
                <span className="text-base font-bold text-gray-900 w-16 text-right flex-shrink-0">{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopTopics;