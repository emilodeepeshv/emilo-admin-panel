import React, { useState } from "react";
import { Search, SlidersHorizontal, Calendar, ArrowUpDown, Upload } from "lucide-react";
import exportSvg from "/export-bold-svgrepo-com.svg";


const UserActions = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const actionsData = [
    {
      id: 1,
      date: "July 24, 2024",
      ticketNumber: "123456456",
      action: "Post Removed",
      reason: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolor aliqua. Ut enim ad minim"
    },
    {
      id: 2,
      date: "Feb 12, 2024",
      ticketNumber: "123456456",
      action: "Comment Deleted",
      reason: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolor aliqua. Ut enim ad minim vel"
    },
    {
      id: 3,
      date: "Jan 8, 2024",
      ticketNumber: "123456456",
      action: "Profile Freezed",
      reason: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolor aliqua. Ut enim ad minim vel"
    }
  ];

  const toggleRowSelection = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllSelection = () => {
    if (selectedRows.size === actionsData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(actionsData.map(item => item.id)));
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case "Post Removed":
        return "text-blue-500";
      case "Comment Deleted":
        return "text-blue-500";
      case "Profile Freezed":
        return "text-blue-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 border- border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900 mb-5">Actions Taken History</h1>
        
        {/* Controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search User Name/ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Filter */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm text-gray-700">
              <SlidersHorizontal  className="w-4 h-4 text-blue-500" />
            </button>

            {/* Date Picker */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm text-gray-700">
              <Calendar className="w-5 h-4.5 text-blue-500" />
              <span>April 1 - 15, 2024</span>
            </button>

            {/* Export */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm text-gray-700">
              <img src={exportSvg} alt={exportSvg} className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100  rounded-2xl">
            <tr>
              <th className="w-12 px-4 py-3 text-center">
                <div
                  className={`w-4 h-4 border-2 rounded cursor-pointer mx-auto  ${
                    selectedRows.size === actionsData.length
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-blue-500'
                  }`}
                  onClick={toggleAllSelection}
                >
                  {selectedRows.size === actionsData.length && (
                    <div className="text-white text-xs leading-none">✓</div>
                  )}
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1 cursor-pointer">
                  Action Date
                  <ArrowUpDown className="w-6 h-6 p-1 text-black bg-white rounded-xs" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1 cursor-pointer">
                  Ticket Number
                  <ArrowUpDown className="w-6 h-6 p-1 text-black bg-white rounded-xs" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1 cursor-pointer">
                  Action Performed
                  <ArrowUpDown className="w-6 h-6 p-1 text-black bg-white rounded-xs" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1 cursor-pointer">
                  Action Reason
                  <ArrowUpDown className="w-6 h-6 p-1 text-black bg-white rounded-xs" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {actionsData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="w-12 px-4 py-4 text-center">
                  <div
                    className={`w-4 h-4 border-2 rounded cursor-pointer mx-auto ${
                      selectedRows.has(item.id)
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'
                    }`}
                    onClick={() => toggleRowSelection(item.id)}
                  >
                    {selectedRows.has(item.id) && (
                      <div className="text-white text-xs leading-none">✓</div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                  {item.date}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 font-mono">
                  {item.ticketNumber}
                </td>
                <td className="px-4 py-4">
                  <span className={`text-sm font-medium ${getActionColor(item.action)}`}>
                    {item.action}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 leading-relaxed max-w-md">
                  {item.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserActions;