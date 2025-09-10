import React, { useState } from "react";
import { Calendar, SlidersHorizontal, ChevronDown, Download, X, Filter, User, Hash, FileText, Tag, Users } from "lucide-react";
import exportSVG from '/export-bold-svgrepo-com.svg'

// ReportFilterModal Component
const ReportFilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [activeFilterSection, setActiveFilterSection] = useState('dateRange');
  const [filters, setFilters] = useState({
    dateRange: {
      startDate: '',
      endDate: ''
    },
    user: '',
    totalReportUserId: '',
    totalReportContent: '',
    reportCategory: ''
  });

  const filterSections = [
    { id: 'dateRange', label: 'Date Range', icon: Calendar },
    { id: 'user', label: 'User', icon: User },
    { id: 'totalReportUserId', label: 'Total Report User ID', icon: Hash },
    { id: 'totalReportContent', label: 'Total Report Content', icon: FileText },
    { id: 'reportCategory', label: 'Report Category', icon: Tag }
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFilters(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      dateRange: {
        startDate: '',
        endDate: ''
      },
      user: '',
      totalReportUserId: '',
      totalReportContent: '',
      reportCategory: ''
    });
  };

  const renderFilterContent = () => {
    switch (activeFilterSection) {
      case 'dateRange':
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Date Range</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={filters.dateRange.startDate}
                  onChange={(e) => handleInputChange('dateRange.startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={filters.dateRange.endDate}
                  onChange={(e) => handleInputChange('dateRange.endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 'user':
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">User</h3>
            <input
              type="text"
              placeholder="Enter user name or ID"
              value={filters.user}
              onChange={(e) => handleInputChange('user', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      
      case 'totalReportUserId':
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Total Report User ID</h3>
            <input
              type="text"
              placeholder="Enter report user ID"
              value={filters.totalReportUserId}
              onChange={(e) => handleInputChange('totalReportUserId', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      
      case 'totalReportContent':
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Total Report Content</h3>
            <input
              type="text"
              placeholder="Enter report content keywords"
              value={filters.totalReportContent}
              onChange={(e) => handleInputChange('totalReportContent', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      
      case 'reportCategory':
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Report Category</h3>
            <select
              value={filters.reportCategory}
              onChange={(e) => handleInputChange('reportCategory', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="spam">Spam</option>
              <option value="harassment">Harassment</option>
              <option value="inappropriate-content">Inappropriate Content</option>
              <option value="fake-account">Fake Account</option>
              <option value="copyright">Copyright Violation</option>
              <option value="other">Other</option>
            </select>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center showFooter__">
      <div className="bg-white rounded-xl border border-gray-300 shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Report Filters</h2>
          </div>
          
          <div className="space-y-2">
            {filterSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveFilterSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded-lg transition-colors ${
                    activeFilterSection === section.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">Configure Filters</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderFilterContent()}
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Reset All
            </button>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main SearchFilterBar Component
const SearchFilterBar = ({ search, setSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(null);

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    console.log('Applied filters:', filters);
    // Here you can handle the filter logic or pass it to parent component
  };

  const exportSvg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHA...";

  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-5xl">
            <input
              type="text"
              placeholder="Search User Name/ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-blue-600 border border-gray-200 rounded-lg hover:bg-gray-50 relative"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {appliedFilters && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </button>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar className="w-5 h-4.5 text-blue-500" />
            April 1, 2024 - April 18, 2024
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-black border border-gray-300 rounded-lg hover:bg-gray-50">
          <img src={exportSVG} alt="Export" className="w-4.5 h-4.5" />
          Export
        </button>
      </div>

      {/* Modal */}
      <ReportFilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};

export default SearchFilterBar;