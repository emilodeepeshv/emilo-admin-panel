import React, { useState } from 'react';
import { Search, Calendar, Edit3, RotateCcw, Trash2, Settings, BarChart3, MoreVertical, ChevronDown, ArrowUpDown,Undo2 } from 'lucide-react';
import exportSvg from "/export-bold-svgrepo-com.svg";
import EditPlacementModal from '../../utils/EditPlacementModal';

const AdPlacement = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const adData = [
    {
      id: 1,
      userName: 'Praveen Dubey',
      userId: '12458076767852',
      campaignName: 'Lead generation campaign',
      campaignType: 'Awareness',
      category: 'Sports',
      budget: '₹5,850.00',
      placement: '1st Position',
      frequency: '10x'
    },
    {
      id: 2,
      userName: 'Saleem Javed',
      userId: '12458076767852',
      campaignName: 'Leads Leap',
      campaignType: 'Post Engagement',
      category: 'Political',
      budget: '₹5,850.00',
      placement: '5th Position',
      frequency: '5x'
    },
    {
      id: 3,
      userName: 'Abhishek Gupta',
      userId: '12458076767852',
      campaignName: 'Product Launches',
      campaignType: 'Post Engagement',
      category: 'Entertainment',
      budget: '₹5,850.00',
      placement: '2nd Position',
      frequency: '2x'
    },
    {
      id: 4,
      userName: 'Rohit Sahu',
      userId: '12458076767852',
      campaignName: 'Event Excite',
      campaignType: 'Awareness',
      category: 'Sports',
      budget: '₹5,850.00',
      placement: '1st Position',
      frequency: '5x'
    },
    {
      id: 5,
      userName: 'Siddharth Sharma',
      userId: '12458076767852',
      campaignName: 'Discover & Explore',
      campaignType: 'Leads',
      category: 'Entertainment',
      budget: '₹5,850.00',
      placement: '2nd Position',
      frequency: '2x'
    },
    {
      id: 6,
      userName: 'Siddharth Sharma',
      userId: '12458076767852',
      campaignName: 'Event Excite',
      campaignType: 'Awareness',
      category: 'Political',
      budget: '₹5,850.00',
      placement: '2nd Position',
      frequency: '5x'
    },
    {
      id: 7,
      userName: 'Siddharth Sharma',
      userId: '12458076767852',
      campaignName: 'Discover & Explore',
      campaignType: 'Leads',
      category: 'Sports',
      budget: '₹5,850.00',
      placement: '10th Position',
      frequency: '2x'
    },
    {
      id: 8,
      userName: 'Siddharth Sharma',
      userId: '12458076767852',
      campaignName: 'Event Excite',
      campaignType: 'Awareness',
      category: 'Other',
      budget: '₹5,850.00',
      placement: '2nd Position',
      frequency: '5x'
    }
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(adData.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <ArrowUpDown className="w-6 h-6 bg-white rounded p-1  text-black" />;
    }
    return (
      <ArrowUpDown
        className={`w-6 h-6 bg-white rounded p-1  ${sortConfig.direction === 'asc' ? 'text-blue-600' : 'text-red-600'}`}
      />
    );
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border p-3 rounded-xl border-gray-200 shadow bg-white">
        <h1 className="text-2xl font-bold text-gray-900">Ad Placement</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 border p-1 rounded border-gray-200 ">
            <RotateCcw size={16} />
            <span>Refresh</span>
          </button>
          <button className="text-gray-600 hover:text-gray-800 border p-1 rounded border-gray-200 ">
            Clear Drafts
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 border  rounded border-gray-200 ">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* Search and Date Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-full mr-2 bg-white">
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search & Filter"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2 bg-white border border-blue-200 rounded-lg px-3 py-2 ">
          <Calendar size={16} className="text-blue-600" />
          <span className="text-blue-700 font-medium">Last 7 days:</span>
          <span className="text-blue-600">Feb 1, 2024 - Feb 7, 2024</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {/* Edit Placement Button - FIXED */}
          <button
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Edit3 size={16} />
            <span>Edit Placement</span>
          </button>

          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white">
            <RotateCcw size={16} />
            <span>Undo</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white">
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3  p-3 rounded-lg">
            <button className="flex items-center space-x-2 border shadow border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white">
              <Settings size={16} />
              <span>Customize columns</span>
              <ChevronDown size={20} className='text-blue-500'/>
            </button>
            <button className="text-gray-600 hover:text-gray-800 border shadow border-gray-300 p-2 rounded-lg bg-white">
              Reset Columns
            </button>
          </div>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white shadow">
            <BarChart3 size={16} />
            <span>Breakdown</span>
            <ChevronDown size={20} className='text-blue-500' />
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white shadow">
            <img src={exportSvg} alt="export" className='w-4 h-4'/>
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === adData.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('userName')}
                >
                  <span className="font-medium">User Name/ID</span>
                  <SortIcon column="userName" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('campaignName')}
                >
                  <span className="font-medium">Campaign Name</span>
                  <SortIcon column="campaignName" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('category')}
                >
                  <span className="font-medium">Category</span>
                  <SortIcon column="category" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('budget')}
                >
                  <span className="font-medium">Budget</span>
                  <SortIcon column="budget" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('placement')}
                >
                  <span className="font-medium">Placement</span>
                  <SortIcon column="placement" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                  onClick={() => handleSort('frequency')}
                >
                  <span className="font-medium">Frequency</span>
                  <SortIcon column="frequency" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="font-medium text-gray-600">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {adData.map((row) => (
              <tr key={row.id} className={selectedRows.includes(row.id) ? 'bg-blue-50' : 'bg-white'}>
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{row.userName}</div>
                    <div className="text-sm text-gray-500">ID: {row.userId}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <div className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">{row.campaignName}</div>
                    <div className="text-sm text-gray-500">{row.campaignType}</div>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-900">{row.category}</td>
                <td className="px-4 py-4 text-gray-900">{row.budget}</td>
                <td className="px-4 py-4 text-gray-900">{row.placement}</td>
                <td className="px-4 py-4 text-gray-900">{row.frequency}</td>
                <td className="px-4 py-4">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component - FIXED */}
      <EditPlacementModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedRows={selectedRows}
        adData={adData}
      />
    </div>
  );
};

export default AdPlacement;