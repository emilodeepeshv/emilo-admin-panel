import React, { useState } from "react";
import { Search, Calendar, Upload, ChevronUp, ChevronDown } from "lucide-react";
import exportSvg from "/export-bold-svgrepo-com.svg";


const UserActivity = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-gray-900">Activity</h1>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search User Name/ID"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-sm text-gray-700">April 1 - 15, 2024</span>
        </div>
        
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
        <img src={exportSvg} alt={exportSvg} className="w-4 h-4 text-gray-600"/>
          <span className="text-sm text-gray-700">Export</span>
        </button>
      </div>

      {/* Today Section */}
      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <h2 className="text-sm font-medium text-gray-900">Today</h2>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </div>

      {/* Activity Items */}
      {isExpanded && (
        <div className="space-y-0">
          {/* Visit bhavnakashyap Profile */}
          <div className="flex items-start justify-between py-4 border-b border-gray-100">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-gray-900">Visited </span>
                <span className="text-sm text-blue-600 font-medium">@bhavnakashyap</span>
                <span className="text-sm text-gray-900"> Profile</span>
              </div>
              <div className="text-sm text-gray-900 font-medium">IP: <span className="text-blue-500">192.168.1.38</span></div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Engaged for 3 min</div>
              <div className="text-sm font-medium text-gray-900">6:45 PM</div>
            </div>
          </div>

          {/* Posted Image */}
          <div className="flex items-start justify-between py-4 border-b border-gray-100">
            <div className="flex-1">
              <div className="text-sm text-gray-900 mb-2">Posted Image</div>
              <div className="text-sm text-gray-900 font-medium">IP: <span className="text-blue-500">192.168.1.38</span></div>
            </div>
            <div className="text-right flex flex-col items-end">
              <img 
                src="https://picsum.photos/60/60?random=1" 
                alt="Posted image"
                className="w-12 h-12 rounded mb-2 object-cover"
              />
              <div className="text-sm font-medium text-gray-900">5:12 PM</div>
            </div>
          </div>

          {/* Visit ruchiverma Profile */}
          <div className="flex items-start justify-between py-4 border-b border-gray-100">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-gray-900">Visited </span>
                <span className="text-sm text-blue-600 font-medium">@ruchiverma</span>
                <span className="text-sm text-gray-900"> Profile</span>
              </div>
              <div className="text-sm text-gray-900 font-medium">IP: <span className="text-blue-500">192.168.1.38</span></div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Engaged for 7 min</div>
              <div className="text-sm font-medium text-gray-900">5:10 PM</div>
            </div>
          </div>

          {/* Posted Image 2 */}
          <div className="flex items-start justify-between py-4 border-b border-gray-100">
            <div className="flex-1">
              <div className="text-sm text-gray-900 mb-2">Posted Image</div>
              <div className="text-sm text-gray-900 font-medium">IP: <span className="text-blue-500">192.168.1.38</span></div>
            </div>
            <div className="text-right flex flex-col items-end">
              <img 
                src="https://picsum.photos/60/60?random=2" 
                alt="Posted image"
                className="w-12 h-12 rounded mb-2 object-cover"
              />
              <div className="text-sm font-medium text-gray-900">4:41 PM</div>
            </div>
          </div>

          {/* Comment */}
          <div className="flex items-start justify-between py-4">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-gray-900">Commented </span>
                <span className="text-sm text-blue-600 font-medium">@tulika01</span>
                <span className="text-sm text-gray-900"> Post</span>
              </div>
              <div className="text-sm text-gray-900 font-medium mb-2">IP: <span className="text-blue-500">192.168.1.38</span></div>
            </div>
            <div className="text-right">
                            <div className="text-sm text-gray-500 italic">"Lorem ipsum dolor sit amet, consectetur..."</div>
              <div className="text-sm font-medium text-gray-900">4:03 PM</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserActivity;