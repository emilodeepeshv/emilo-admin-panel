import {useState,React} from 'react';
import { Search, Calendar, ListFilter } from 'lucide-react'; 
import FilterModal from "../../../../utils/FilterModal";


const SearchFilter = ({ searchQuery, onSearchChange, activeTab, dateRange = "Last 7 days: Feb 1, 2024 - Feb 7, 2024" }) => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1 max-w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search & Filter"
          value={searchQuery}
          onClick={() => setOpenFilter(true)}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
      </div>
      {activeTab === 'rejected' && (
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
          <ListFilter className="w-4 h-4" />
        </button>
      )}
      <div className="flex items-center gap-2 px-3 py-2 border border-blue-300 bg-blue-50 rounded-lg text-sm text-blue-700 min-w-fit">
        <Calendar className="w-5 h-4.5 text-blue-500" />
        <span className="font-medium">Last 7 days:</span>
        <span>Feb 1, 2024 - Feb 7, 2024</span>
      </div>
      <FilterModal isOpen={openFilter} onClose={() => setOpenFilter(false)} />
    </div>
  );
};

export default SearchFilter;