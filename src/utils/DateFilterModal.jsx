import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

const DateFilterModal = ({ isOpen, onClose, onApply }) => {
  const [dateRange, setDateRange] = useState({
    from: 'Jan 01, 2020',
    to: 'Dec 31, 2028'
  });
  
  const [selectedRange, setSelectedRange] = useState('Yearly');
  
  const rangeOptions = ['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'];

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  const handleDateChange = (field, value) => {
    setDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClearAll = () => {
    setDateRange({
      from: 'Jan 01, 2020',
      to: 'Dec 31, 2028'
    });
    setSelectedRange('Yearly');
  };

  const handleApply = () => {
    onApply({
      dateRange,
      selectedRange
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center showFooter__">
      <div className="bg-white rounded-2xl p-6 w-96 max-w-md mx-4 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Date Filters</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Date Section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Date</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">From</label>
              <div className="relative">
                <input
                  type="text"
                  value={dateRange.from}
                  onChange={(e) => handleDateChange('from', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                  placeholder="Jan 01, 2020"
                />
                <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">To</label>
              <div className="relative">
                <input
                  type="text"
                  value={dateRange.to}
                  onChange={(e) => handleDateChange('to', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                  placeholder="Dec 31, 2028"
                />
                <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Range Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Range</h3>
          <div className="grid grid-cols-3 gap-3">
            {rangeOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleRangeChange(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRange === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClearAll}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFilterModal;