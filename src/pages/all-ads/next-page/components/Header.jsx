import React from 'react';
import { ChevronRight, RefreshCw, MoreVertical } from 'lucide-react';

const Header = ({ onRefresh }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow rounded-2xl max-w-[97%] mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Ads</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-blue-600 text-sm font-medium">End User Ads</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onRefresh}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;