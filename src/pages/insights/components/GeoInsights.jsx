import React from "react";
import { Calendar, ChevronDown, Globe } from "lucide-react";

const GeoInsights = ({ cityData }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex flex-wrap items-center justify-between mb-6 gap-2 pb-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-gray-600" />
        <h3 className="font-semibold text-gray-900">Geographical Insights</h3>
      </div>
      <div className="flex items-center gap-2 text-sm px-3 py-1 bg-gray-50 rounded-md">
        <Calendar className="w-5 h-4.5 text-blue-500" />
        <span className="text-gray-700">Last 1 Week</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>

    <div className="flex gap-6">
      {/* Left Side - India Map */}
      <div className="flex-1">
        <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* India Map SVG Placeholder with heat spots */}
          <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 300 400" className="w-full h-full max-w-64">
              {/* Simplified India outline */}
              <path
                d="M150 50 L180 60 L200 80 L210 120 L220 160 L210 200 L200 240 L180 280 L160 320 L140 350 L120 360 L100 350 L80 320 L70 280 L60 240 L50 200 L45 160 L50 120 L70 80 L100 60 L130 50 Z"
                fill="#f3f4f6"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              
              {/* Heat map dots representing cities */}
              <circle cx="120" cy="180" r="8" fill="#ef4444" opacity="0.7" />
              <circle cx="140" cy="200" r="6" fill="#ef4444" opacity="0.6" />
              <circle cx="160" cy="160" r="7" fill="#ef4444" opacity="0.8" />
              <circle cx="110" cy="220" r="5" fill="#ef4444" opacity="0.5" />
              <circle cx="180" cy="140" r="6" fill="#ef4444" opacity="0.7" />
              <circle cx="90" cy="260" r="4" fill="#ef4444" opacity="0.4" />
              <circle cx="170" cy="190" r="5" fill="#ef4444" opacity="0.6" />
              <circle cx="130" cy="240" r="6" fill="#ef4444" opacity="0.7" />
              <circle cx="200" cy="170" r="4" fill="#ef4444" opacity="0.5" />
              <circle cx="100" cy="190" r="5" fill="#ef4444" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1">
        <div className="flex items-center gap-1 text-sm font-medium text-gray-600 mb-3">
            <span>Posts</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        {/* Headers - Posts, City, and Count as separate sections */}
        <div className="mb-4">
          {/* Posts Header */}
          
          
          {/* City and Count Headers */}
          <div className="flex items-center text-sm font-medium text-gray-600 pb-2 border-b border-gray-100">
            <div className="flex items-center gap-1 flex-1">
              <span>City</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
            <div className="flex items-center gap-1 w-20 justify-end">
              <span>Count</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* City List */}
        <div className="space-y-2 max-h-64 overflow-y-auto hide-scrollbar">
          {cityData.slice(0, 12).map((city, idx) => (
            <div key={idx} className="flex items-center text-sm py-1">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-700">{city.city}</span>
              </div>
              <div className="w-20 text-right">
                <span className="font-semibold text-gray-900">{city.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="text-blue-600 text-sm font-medium mt-4 hover:text-blue-700">
          View All
        </button>
      </div>
    </div>
  </div>
);

export default GeoInsights;