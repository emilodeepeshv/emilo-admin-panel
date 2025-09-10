import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex-shrink-0 px-29.5 shadow border border-gray-200 py-4 text-md font-semibold transition-colors rounded-2xl m-4 ${
              activeTab === tab.key
                ? 'text-white bg-blue-600'
                : 'text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === tab.key
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;