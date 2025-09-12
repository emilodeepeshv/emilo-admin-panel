import React, { useState } from 'react';
import { Calendar, SlidersHorizontal, Download, MoreVertical, X } from 'lucide-react';

const UserCustomData = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('Yearly');
  
  const timeframes = ['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'];
  
  const filterTags = [
    'Created Date', 'Age', 'Gender', 'Marital Status', 'Country', 
    'States', 'City', 'Locality', 'Profession', 'Language', 
    'Platform', 'Peak Days', 'Peak Hour', 'Flix'
  ];

  const userData = [
    { year: 2020, users: 1504, color: '#4F46E5' },
    { year: 2021, users: 2756, color: '#4F46E5' },
    { year: 2022, users: 9830, color: '#4F46E5' },
    { year: 2023, users: 1257, color: '#4F46E5' },
    { year: 2024, users: 2500, color: '#4F46E5' },
    { year: 2025, users: 1504, color: '#4F46E5' },
    { year: 2026, users: 2756, color: '#4F46E5' },
    { year: 2027, users: 9830, color: '#4F46E5' },
    { year: 2028, users: 3800, color: '#4F46E5' },
  ];

  const maxUsers = Math.max(...userData.map(d => d.users));

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border p-3 border-gray-300 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-gray-900 bg-white">Custom Data</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
            <SlidersHorizontal size={16} />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <MoreVertical size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Date Range and Time Filter */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5 border p-3 rounded-xl border-gray-300 shadow">
          <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-2">
            <Calendar size={16} className="text-blue-500" />
            <span className="text-blue-700 text-bold">Jan 1, 2020 - Dec 31, 2028</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {timeframes.map((timeframe) => (
              <label
                key={timeframe}
                className="flex items-center space-x-2 cursor-pointer border-2 border-blue-300 p-2 rounded-full"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="timeframe"
                    checked={activeTimeframe === timeframe}
                    onChange={() => setActiveTimeframe(timeframe)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    activeTimeframe === timeframe
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 bg-white'
                  }`}>
                    {activeTimeframe === timeframe && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className={`text-sm font-medium ${
                  activeTimeframe === timeframe ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {timeframe}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-8 mb-8">
          <div className='flex gap-3 border p-3 border-gray-200 rounded-xl shadow bg-white'>
            <span className="text-gray-500 text-sm m-auto">Total Users</span>
            <div className="text-xl font-semibold ">10,283</div>
          </div>
          <div className='flex gap-3 border p-3 border-gray-200 rounded-xl shadow bg-white'>
            <span className="text-gray-500 text-sm m-auto">MAU</span>
            <div className="text-xl font-semibold">7,285</div>
          </div>
          <div className='flex gap-3 border p-3 border-gray-200 rounded-xl shadow bg-white'>
            <span className="text-gray-500 text-sm m-auto">DAU</span>
            <div className="text-xl font-semibold">3,580</div>
          </div>
        </div>
      </div>

      <div className='border border-gray-200 p-8 rounded-xl shadow bg-white'>
        {/* Reports Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-semibold text-gray-900">Reports</h2>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center space-x-2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200"
            >
              <span>{tag}</span>
              <X size={16} className="cursor-pointer hover:text-red-800 text-red-500 font-bold " />
            </div>
          ))}
        </div>
      </div>

      {/* Users Chart */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Users</h3>
        <div className="space-y-4">
          {userData.map((data) => (
            <div key={data.year} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{data.year}</div>
              <div className="flex-1 relative">
                <div className="bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${(data.users / maxUsers) * 100}%`,
                      background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)'
                    }}
                  />
                </div>
              </div>
              <div className="w-16 text-right text-sm font-medium text-gray-900">
                {data.users.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        
        {/* Scale */}
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          {Array.from({ length: 13 }, (_, i) => (
            <span key={i}>{i === 0 ? '0' : `${i}M`}</span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserCustomData;