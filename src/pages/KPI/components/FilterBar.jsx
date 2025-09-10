import { Calendar, ListFilter, BarChart3 } from 'lucide-react';

const FilterBar = ({ dateFilter, setDateFilter, userTypeFilter, setUserTypeFilter, chartView, setChartView }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        {/* <Calendar size={20} className="text-blue-500" /> */}
        <select 
          value={dateFilter} 
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
          <option value="1y">Last Year</option>
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        {/* <ListFilter size={20} className="text-blue-500" /> */}
        <select 
          value={userTypeFilter} 
          onChange={(e) => setUserTypeFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="all">All Users</option>
          <option value="new">New Users</option>
          <option value="returning">Returning Users</option>
          <option value="premium">Premium Users</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        {/* <BarChart3 size={20} className="text-blue-500" /> */}
        <select 
          value={chartView} 
          onChange={(e) => setChartView(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="line">Line Chart</option>
          <option value="area">Area Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
      </div>
    </div>
  </div>
);

export default FilterBar;