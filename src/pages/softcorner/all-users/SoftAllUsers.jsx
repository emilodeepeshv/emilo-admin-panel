import React, { useState } from 'react';
import { RefreshCcw, MoreVertical, Search, ArrowUpDown,ChevronDown, ChevronLeft, ChevronRight,ChevronsRight, ChevronsLeft } from 'lucide-react';

const AllUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 'praveen-dubey',
      name: 'Praveen Dubey',
      username: '@praveendubey',
      email: 'praveendubey123@example.com',
      mobile: '+91 12548 42548',
      age: 30,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'nishant-singhania',
      name: 'Nishant Singhania',
      username: '@nishantsinghania',
      email: 'nishantsinghania.123@example.com',
      mobile: '+91 57878 54346',
      age: 30,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'aarushi-dhingra',
      name: 'Aarushi Dhingra',
      username: '@aarushigra',
      email: 'vineeta09@yahoo.com',
      mobile: '+91 89562 74523',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Female',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'naval-bal',
      name: 'Naval Bal',
      username: '@navalal',
      email: 'qbehl@yahoo.co.in',
      mobile: '+91 65848 55655',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'binoya-deshmukh',
      name: 'Binoya Deshmukh',
      username: '@binoyukh',
      email: 'sodhani.abbas@anthony.ac.in',
      mobile: '+91 99599 54888',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'akhii-somani',
      name: 'Akhii Somani',
      username: '@akhihi',
      email: 'xusman@rediffmail.com',
      mobile: '+91 32546 95452',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Blocked',
      statusColor: 'bg-red-200 text-red-800'
    },
    {
      id: 'iqbal-kata',
      name: 'Iqbal Kata',
      username: '@iqbalkta',
      email: 'subhash.natti@yahoo.com',
      mobile: '+91 85656 95501',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Blocked',
      statusColor: 'bg-red-200 text-red-800'
    },
    {
      id: 'deep-basak',
      name: 'Deep Basak',
      username: '@deepbaak',
      email: 'brock.wagie@bhattacharyya.com',
      mobile: '+91 84512 75954',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Verified',
      statusColor: 'bg-blue-200 text-blue-800'
    },
    {
      id: 'mukul-sani',
      name: 'Mukul Sani',
      username: '@mukuani',
      email: 'priyanka75@hotmail.com',
      mobile: '+91 65847 54844',
      age: 31,
      dob: 'Aug 8, 1992',
      gender: 'Male',
      status: 'Blocked',
      statusColor: 'bg-red-200 text-red-800'
    }
  ]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedUserIds.length === users.length) {
      setSelectedUserIds([]);
    } else {
      setSelectedUserIds(users.map(user => user.id));
    }
  };

  const toggleSelectUser = (id) => {
    setSelectedUserIds(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(userId => userId !== id)
        : [...prevSelected, id]
    );
  };

  const isSelected = (id) => selectedUserIds.includes(id);
  const isAllSelected = selectedUserIds.length === users.length;

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.mobile.includes(searchTerm)
  );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const renderPaginationButtons = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button key="first" className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 mx-1" onClick={() => setCurrentPage(1)}>
          &lt;&lt;
        </button>
      );
    }

    if (currentPage > 1) {
      pages.push(
        <button key="prev" className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 mx-1" onClick={() => setCurrentPage(prev => prev - 1)}>
          &lt;
        </button>
      );
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`h-9 w-9 flex items-center justify-center rounded-full mx-1 ${currentPage === i ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button key="next" className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 mx-1" onClick={() => setCurrentPage(prev => prev + 1)}>
          &gt;
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <button key="last" className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 mx-1" onClick={() => setCurrentPage(totalPages)}>
          &gt;&gt;
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex items-center justify-between p-3 rounded-xl bg-white shadow border border-gray-200 ">
        <h2 className="text-xl font-semibold text-gray-800">Soft Corner</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 text-gray-600 border border-gray-200">
            <RefreshCcw size={16} />
            <span className="hidden sm:inline ">Refresh</span>
          </button>
          <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-600 border border-gray-200">
            <span className="sr-only">More options</span>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      {/* Search and Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1 w-full sm:w-auto bg-white">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search & Filter"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 shadow rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative inline-block">
            <button className="flex items-center px-4 py-2 bg-white shadow text-gray-700 rounded-md">
              <span className="mr-2 hidden sm:inline">Last 7 days:</span> Feb 1, 2024 - Feb 7, 2024
              <ChevronDown className="ml-2" size={16} />
            </button>
          </div>
          <button className="flex gap-2 items-center px-4 py-2 bg-white text-black rounded-md hover:bg-blue-100 shadow">
            <img src="/export-bold-svgrepo-com.svg" alt="" className='w-4 h-4' />
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Soft Corner ID</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Email ID</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Mobile</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Age</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Gender</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  <button className="flex items-center space-x-1 p-2 rounded-md border-gray-200">
                    <span>Status</span>
                    <ArrowUpDown size={12} className="ml-1 w-6 h-6 p-1 bg-white rounded" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-md font-semibold text-black tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded"
                      checked={isSelected(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.username}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>{user.age}</div>
                    <div className="text-gray-500">{user.dob}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-4 border py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.statusColor}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-500 hover:text-gray-900">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
  <div className="flex items-center space-x-2 text-sm text-gray-700">
    <div className="relative inline-block">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 py-2 pl-3 pr-8 rounded-md shadow"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={12} />
      </div>
    </div>
    <span>Items Per Page</span>
  </div>

  <div className="flex items-center space-x-2">
    <button
      className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-50"
      onClick={() => setCurrentPage(1)}
      disabled={currentPage === 1}
    >
      <ChevronsLeft size={16} />
    </button>
    <button
      className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-50"
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      <ChevronLeft size={16} />
    </button>
    {renderPaginationButtons()}
    <button
      className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-50"
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      <ChevronRight size={16} />
    </button>
    <button
      className="h-9 w-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-50"
      onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}
    >
      <ChevronsRight size={16} />
    </button>
  </div>

  <div className="flex items-center space-x-2 text-sm text-gray-700">
    <span>Jump to Page</span>
    <div className="relative w-16">
      <input
        type="number"
        value={currentPage}
        onChange={(e) => {
          const page = Number(e.target.value);
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
        className="w-full pl-3 pr-2 py-1 border rounded-md text-center shadow"
      />
    </div>
    <div className="relative inline-block">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 py-2 pl-3 pr-8 rounded-md shadow"
        value={currentPage}
        onChange={(e) => setCurrentPage(Number(e.target.value))}
      >
        {[...Array(totalPages)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={12} />
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default AllUsers;