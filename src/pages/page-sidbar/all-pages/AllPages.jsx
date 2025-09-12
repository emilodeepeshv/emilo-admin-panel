import React, { useState, useRef, useEffect } from 'react';
import { Search, MoreHorizontal, RefreshCw, Download, ArrowDownUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, SlidersHorizontal, MoreVertical } from 'lucide-react';

const AllPages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [openPopup, setOpenPopup] = useState(null);
  const [headerPopup, setHeaderPopup] = useState(false);
  const popupRef = useRef(null);
  const headerPopupRef = useRef(null);

  const data = [
    {
      id: 1,
      pageName: 'Sparkling Vista',
      handle: '@sparklingvista',
      email: 'praveendubey123@example.com',
      mobile: '+91 12548 42548',
      pageOwner: 'Praveen Dubey',
      ownerHandle: '@praveendubey',
      city: 'Durg',
      pageAge: '2 yr'
    },
    {
      id: 2,
      pageName: 'Whispering Willow',
      handle: '@whisperingwillow',
      email: 'nishantsinghania123@example.com',
      mobile: '+91 57878 64346',
      pageOwner: 'Nishant Singhania',
      ownerHandle: '@nishantsinghania',
      city: 'Durg',
      pageAge: '2 yr'
    },
    {
      id: 3,
      pageName: 'Nexus Realm',
      handle: '@nexusrealm',
      email: 'vineeta09@yahoo.com',
      mobile: '+91 89562 74523',
      pageOwner: 'Aarushi Dhingra',
      ownerHandle: '@aarushid',
      city: 'Durg',
      pageAge: '2 yr'
    },
    {
      id: 4,
      pageName: 'Mystic Trails',
      handle: '@mystictrails',
      email: 'qbeth@yahoo.co.in',
      mobile: '+91 66848 55655',
      pageOwner: 'Naval Bal',
      ownerHandle: '@navalal',
      city: 'Durg',
      pageAge: '2 yr'
    },
    {
      id: 5,
      pageName: 'Radiant Glimmer',
      handle: '@radiantglimmer',
      email: 'sodhani.abbas@anthony.ac.in',
      mobile: '+91 99599 54888',
      pageOwner: 'Binoya Deshmukh',
      ownerHandle: '@binoyakd',
      city: 'Bilaspur',
      pageAge: '1 yr'
    },
    {
      id: 6,
      pageName: 'Serene Journey',
      handle: '@serenejourney',
      email: 'xusman@rediffmail.com',
      mobile: '+91 32546 96452',
      pageOwner: 'Akhil Somani',
      ownerHandle: '@akhils',
      city: 'Mumbai',
      pageAge: '3 yr'
    },
    {
      id: 7,
      pageName: 'Celestial Echo',
      handle: '@celestialecho',
      email: 'subhash.natt@yahoo.com',
      mobile: '+91 85656 95501',
      pageOwner: 'Iqbal Kata',
      ownerHandle: '@iqbalkta',
      city: 'Durg',
      pageAge: '1 yr'
    },
    {
      id: 8,
      pageName: 'Tranquil Quest',
      handle: '@tranquilquest',
      email: 'brock.wagle@bhattacharyya.com',
      mobile: '+91 84512 75954',
      pageOwner: 'Deep Basak',
      ownerHandle: '@deepbasak',
      city: 'Bhilai',
      pageAge: '2 yr'
    },
    {
      id: 9,
      pageName: 'HarmonyHaven',
      handle: '@harmonyhaven',
      email: 'priyanka75@hotmail.com',
      mobile: '+91 65847 54844',
      pageOwner: 'Mukul Sani',
      ownerHandle: '@mukulsani',
      city: 'Mumbai',
      pageAge: '1 yr'
    }
  ];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenPopup(null);
      }
      if (headerPopupRef.current && !headerPopupRef.current.contains(event.target)) {
        setHeaderPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ArrowDownUp className="w-6 h-6 ml-1 bg-white rounded p-1" /> : <ArrowDownUp className="w-6 h-6 ml-1 bg-white rounded p-1" />;
    }
    return <ArrowDownUp className="w-6 h-6 ml-1 bg-white rounded p-1" />;
  };

  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map(item => item.id)));
    }
  };

  const getPageAgeStyle = (pageAge) => {
    if (pageAge.includes('yr')) {
      return 'text-gray-600';
    }
    return 'text-blue-600';
  };

  const getPageAgeDate = (pageAge) => {
    const dates = {
      '2 yr': 'Aug 8, 199',
      '1 yr': 'July 10, 20',
      '3 yr': 'July 8, 20'
    };
    return dates[pageAge] || '';
  };

  const handleActionClick = (action, rowId) => {
    console.log(`Action: ${action} for row ID: ${rowId}`);
    setOpenPopup(null);
    // Add your action logic here
  };

  const ActionPopup = ({ rowId, onClose }) => (
    <div 
      ref={popupRef}
      className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50"
    >
      <button
        onClick={() => handleActionClick('Give Reward', rowId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Give Reward
      </button>
      <button
        onClick={() => handleActionClick('Give Coupon', rowId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Give Coupon
      </button>
      <button
        onClick={() => handleActionClick('Add Credit', rowId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Add Credit
      </button>
      
    </div>
  );

  const HeaderActionPopup = () => (
    <div 
      ref={headerPopupRef}
      className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50"
    >
      <button
        onClick={() => console.log('Bulk Give Reward')}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Bulk Give Reward
      </button>
      <button
        onClick={() => console.log('Bulk Give Coupon')}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Bulk Give Coupon
      </button>
      <button
        onClick={() => console.log('Bulk Add Credit')}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Bulk Add Credit
      </button>
      
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen m-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border border-gray-200 p-3 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">All Pages</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg p-1 px-3">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh
          </button>
          <div className="relative">
            <button 
              onClick={() => setHeaderPopup(!headerPopup)}
              className="text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg p-1"
            >
              <MoreVertical className="w-4 h-4 text-gray-600" />
            </button>
            {headerPopup && <HeaderActionPopup />}
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 border-b border-gray-100 gap-4">
        <div className="relative w-full lg:flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search & Filter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
            <SlidersHorizontal className="w-8 h-8 p-1.5 border border-gray-200 rounded text-blue-500" />
          <button className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-gray-200">
            <span className="text-sm">Last 7 days:</span>
            <span className="text-sm font-medium">Feb 1, 2024 - Feb 7, 2024</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg">
            <img src='/export-bold-svgrepo-com.svg' className="w-4 h-4 text-gray-600"/>
            <span className="text-sm text-gray-600">Export</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('pageName')}
                  className="flex items-center hover:text-gray-700"
                >
                  Page Name/ID
                  {getSortIcon('pageName')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('email')}
                  className="flex items-center hover:text-gray-700"
                >
                  Email ID
                  {getSortIcon('email')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('mobile')}
                  className="flex items-center hover:text-gray-700"
                >
                  Mobile
                  {getSortIcon('mobile')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('pageOwner')}
                  className="flex items-center hover:text-gray-700"
                >
                  Page Owner/Profile
                  {getSortIcon('pageOwner')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('city')}
                  className="flex items-center hover:text-gray-700"
                >
                  City
                  {getSortIcon('city')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <button
                  onClick={() => handleSort('pageAge')}
                  className="flex items-center hover:text-gray-700"
                >
                  Page Age
                  {getSortIcon('pageAge')}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-md font-medium text-black">
                <div className="flex items-center gap-1 relative">
                  Action 
                  <div className="relative">
                    <button
                      onClick={() => setHeaderPopup(!headerPopup)}
                      className="w-6 h-6 rounded bg-white p-1 hover:bg-gray-50"
                    >
                      <MoreVertical className='w-full h-full'/>
                    </button>
                  </div>
                </div>
              </th> 
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-50 ${
                  selectedRows.has(row.id) ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{row.pageName}</div>
                    <div className="text-xs text-blue-600">{row.handle}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                    {row.email}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.mobile}</td>
                <td className="px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{row.pageOwner}</div>
                    <div className="text-xs text-blue-600">{row.ownerHandle}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.city}</td>
                <td className="px-4 py-3">
                  <div className={`text-sm ${getPageAgeStyle(row.pageAge)}`}>
                    {row.pageAge}
                    {row.pageAge.includes('yr') && (
                      <div className="text-xs text-gray-400">
                        {getPageAgeDate(row.pageAge)}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="relative">
                    <button 
                      onClick={() => setOpenPopup(openPopup === row.id ? null : row.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                    {openPopup === row.id && (
                      <ActionPopup 
                        rowId={row.id} 
                        onClose={() => setOpenPopup(null)} 
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-600">Items Per Page</span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50">
            <ChevronsLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-1 px-2">
            <button className="px-2 py-1 text-sm text-blue-600 bg-blue-50 rounded">1</button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">3</button>
            <span className="px-1 text-gray-400">...</span>
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">58</button>
          </div>

          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronsRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Jump To Page</span>
          <select className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllPages;