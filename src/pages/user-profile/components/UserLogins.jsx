import React, { useState } from "react";
import { Search, Calendar, Upload, ChevronUp, ChevronDown, SlidersHorizontal } from "lucide-react";

const UserLogins = () => {
  const [todayExpanded, setTodayExpanded] = useState(true);
  const [yesterdayExpanded, setYesterdayExpanded] = useState(true);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-gray-900">Login History</h1>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search User Name/ID"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
        </div>

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg">
          <Calendar className="w-4 h-4 text-blue-600 " />
          <span className="text-sm text-gray-700">April 1 – 15, 2024</span>
        </div>

        <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Upload className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">Export</span>
        </button>
      </div>

      {/* Today Section */}
      <div className="mb-4  rounded-lg overflow-hidden">
        <div
          className="flex items-center justify-between bg-blue-100 px-4 py-2 cursor-pointer rounded-md"
          onClick={() => setTodayExpanded(!todayExpanded)}
        >
          <h2 className="text-sm font-medium text-gray-900">Today</h2>
          {todayExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>

        {todayExpanded && (
          <div className="px-4 pb-4 space-y-4">
            {/* Mac OS Login */}
            <div className="flex items-start justify-between py-3 border-b border-gray-200 last:border-b-0">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">Mac OS</span>
                  <span className="text-xs text-gray-500">(1 Hour 12 Min Session)</span>
                </div>
                <div className="text-xs text-black mb-1">IP: <span className="text-blue-500">192.168.1.38</span></div>
                <div className="text-xs text-gray-500">Raipur, Chhattisgarh, India</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Safari Browser</div>
                <div className="text-xs font-normal text-gray-500">March 4, 2024 • 12:00 PM</div>
              </div>
            </div>

            {/* Samsung Galaxy Fold 2 Login */}
            <div className="flex items-start justify-between py-3 border-b border-gray-200 last:border-b-0">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">Samsung Galaxy Fold 2</span>
                  <span className="text-xs text-gray-500">(2 Hour 28 Min Session)</span>
                </div>
                <div className="text-xs text-black mb-1">IP: <span className="text-blue-500">192.168.1.38</span></div>
                <div className="text-xs text-gray-500">Raipur, Chhattisgarh, India</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">eMilo App</div>
                <div className="text-xs font-normal text-gray-500">March 4, 2024 • 12:00 PM</div>
              </div>
            </div>

            {/* Mac OS Login 2 */}
            <div className="flex items-start justify-between py-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">Mac OS</span>
                  <span className="text-xs text-gray-500">(1 Hour 12 Min Session)</span>
                </div>
                <div className="text-xs text-black mb-1">IP: <span className="text-blue-500">192.168.1.38</span></div>
                <div className="text-xs text-gray-500">Raipur, Chhattisgarh, India</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Safari Browser</div>
                <div className="text-xs font-normal text-gray-500">March 4, 2024 • 12:00 PM</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Yesterday Section */}
      <div className=" rounded-lg overflow-hidden">
        <div
          className="flex items-center justify-between bg-blue-100 px-4 py-2 cursor-pointer rounded-md"
          onClick={() => setYesterdayExpanded(!yesterdayExpanded)}
        >
          <h2 className="text-sm font-medium text-gray-900">Yesterday</h2>
          {yesterdayExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </div>

        {yesterdayExpanded && (
          <div className="px-4 pb-4">
            {/* Samsung Galaxy Fold 2 Login */}
            <div className="flex items-start justify-between py-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-900">Samsung Galaxy Fold 2</span>
                  <span className="text-xs text-gray-500">(2 Hour 28 Min Session)</span>
                </div>
                <div className="text-xs text-black mb-1">IP: <span className="text-blue-500">192.168.1.38</span></div>
                <div className="text-xs text-gray-500">Raipur, Chhattisgarh, India</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">eMilo App</div>
                <div className="text-xs font-normal text-gray-500">March 4, 2024 • 12:00 PM</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogins;
