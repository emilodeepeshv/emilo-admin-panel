import React, { useState } from "react";
import { X, ChevronLeft, Search, ChevronDown } from "lucide-react";

const FilterModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Campaigns");
  const [filters, setFilters] = useState({
    campaigns: {
      "Awareness Campaign": true,
      "Lead Campaigns": false,
      "Engagement Campaign": false,
      "Active Campaign": false,
      "Inactive Campaign": false,
      "Video views": false,
      "Post engagement": false
    },
    user: {
      search: "",
      country: "",
      state: ""
    },
    budget: {
      min: 0,
      max: 2
    },
    status: {
      active: false,
      inactive: false,
      paused: false,
      completed: false
    },
    reachImpression: {
      minReach: "",
      maxReach: "",
      minImpression: "",
      maxImpression: ""
    }
  });

  const handleFilterChange = (category, key, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      campaigns: {
        "Awareness Campaign": false,
        "Lead Campaigns": false,
        "Engagement Campaign": false,
        "Active Campaign": false,
        "Inactive Campaign": false,
        "Video views": false,
        "Post engagement": false
      },
      user: {
        search: "",
        country: "",
        state: ""
      },
      budget: {
        min: 0,
        max: 2
      },
      status: {
        active: false,
        inactive: false,
        paused: false,
        completed: false
      },
      reachImpression: {
        minReach: "",
        maxReach: "",
        minImpression: "",
        maxImpression: ""
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 showFooter__ p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[600px] flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 bg-gray-50 flex flex-col">
          {/* Header with back arrow and title */}
          <div className="flex items-center gap-3 p-4 bg-gray-50">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 pb-4">
            <div className="space-y-1">
              {["Campaigns", "User", "Date", "Campaigns Name", "Status", "Reach and Impression"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Clear All button */}
          <div className="px-4 pb-4">
            <button 
              onClick={clearAllFilters}
              className="text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div></div> {/* Empty div for spacing */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "Campaigns" && (
              <div className="space-y-4">
                {Object.entries(filters.campaigns).map(([campaign, checked]) => (
                  <div key={campaign} className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => handleFilterChange("campaigns", campaign, e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded ${
                        checked 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'border-gray-300 bg-white'
                      } flex items-center justify-center cursor-pointer`}>
                        {checked && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label className="text-gray-800 text-sm font-medium cursor-pointer">
                      {campaign}
                    </label>
                  </div>
                ))}

                {/* Budget Slider */}
                <div className="pt-8 space-y-4">
                  <h3 className="text-gray-900 font-medium">Budget</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium">
                        {String(filters.budget.min).padStart(2, '0')}:00
                      </span>
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium">
                        {String(filters.budget.max).padStart(2, '0')}:00
                      </span>
                      <span className="ml-auto text-sm text-gray-500">24:00</span>
                    </div>
                    <div className="relative px-2">
                      {/* Track */}
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      
                      {/* Active range */}
                      <div 
                        className="absolute top-0 h-2 bg-blue-500 rounded-full" 
                        style={{
                          left: `${8 + (filters.budget.min / 24) * (100 - 16)}%`,
                          width: `${((filters.budget.max - filters.budget.min) / 24) * (100 - 16)}%`
                        }}
                      ></div>
                      
                      {/* Min handle */}
                      <div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full cursor-pointer z-20"
                        style={{left: `${8 + (filters.budget.min / 24) * (100 - 16)}%`}}
                      ></div>
                      
                      {/* Max handle */}
                      <div 
                        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full cursor-pointer z-10"
                        style={{left: `${8 + (filters.budget.max / 24) * (100 - 16)}%`}}
                      ></div>
                      
                      {/* Min range input */}
                      <input
                        type="range"
                        min="0"
                        max="24"
                        value={filters.budget.min}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (value <= filters.budget.max) {
                            handleFilterChange("budget", "min", value);
                          }
                        }}
                        className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 opacity-0 cursor-pointer z-30"
                        style={{background: 'transparent'}}
                      />
                      
                      {/* Max range input */}
                      <input
                        type="range"
                        min="0"
                        max="24"
                        value={filters.budget.max}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (value >= filters.budget.min) {
                            handleFilterChange("budget", "max", value);
                          }
                        }}
                        className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 opacity-0 cursor-pointer z-20"
                        style={{background: 'transparent'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "User" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by user name or User ID"
                      value={filters.user.search}
                      onChange={(e) => handleFilterChange("user", "search", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Country</label>
                  <div className="relative">
                    <select 
                      value={filters.user.country}
                      onChange={(e) => handleFilterChange("user", "country", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Country</option>
                      <option value="us">United States</option>
                      <option value="in">India</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">State</label>
                  <div className="relative">
                    <select 
                      value={filters.user.state}
                      onChange={(e) => handleFilterChange("user", "state", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select State</option>
                      <option value="ca">California</option>
                      <option value="ny">New York</option>
                      <option value="tx">Texas</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Date" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeTab === "Campaigns Name" && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Campaign Name</label>
                <input
                  type="text"
                  placeholder="Search Campaign Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {activeTab === "Status" && (
              <div className="space-y-4">
                {["Active", "Inactive", "Paused", "Completed"].map((status) => (
                  <div key={status} className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={filters.status[status.toLowerCase()]}
                        onChange={(e) => handleFilterChange("status", status.toLowerCase(), e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded ${
                        filters.status[status.toLowerCase()] 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'border-gray-300 bg-white'
                      } flex items-center justify-center cursor-pointer`}>
                        {filters.status[status.toLowerCase()] && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <label className="text-gray-800 text-sm font-medium cursor-pointer">
                      {status}
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Reach and Impression" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-gray-900 font-medium">Reach</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Min Reach</label>
                      <input
                        type="number"
                        placeholder="0"
                        value={filters.reachImpression.minReach}
                        onChange={(e) => handleFilterChange("reachImpression", "minReach", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Reach</label>
                      <input
                        type="number"
                        placeholder="10000"
                        value={filters.reachImpression.maxReach}
                        onChange={(e) => handleFilterChange("reachImpression", "maxReach", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-gray-900 font-medium">Impression</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Min Impression</label>
                      <input
                        type="number"
                        placeholder="0"
                        value={filters.reachImpression.minImpression}
                        onChange={(e) => handleFilterChange("reachImpression", "minImpression", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Impression</label>
                      <input
                        type="number"
                        placeholder="50000"
                        value={filters.reachImpression.maxImpression}
                        onChange={(e) => handleFilterChange("reachImpression", "maxImpression", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;