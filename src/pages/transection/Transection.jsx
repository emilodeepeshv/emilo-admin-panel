import React, { useState, useMemo } from 'react';
import {
  RefreshCcw,
  MoreVertical,
  Search,
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
  Calendar,
  Columns3,
  SlidersHorizontal,
  Download,
  ListFilter
} from 'lucide-react';

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Ad',
      mode: 'Wallet',
      type: 'Received',
      amount: 6000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 2,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Ad',
      mode: 'Net Banking',
      type: 'Received',
      amount: 25000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 3,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Monitization',
      mode: 'UPI',
      type: 'Paid',
      amount: 15000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 4,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Gifting',
      mode: 'Wallet',
      type: 'Received',
      amount: 10000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 5,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Monitization',
      mode: 'Wallet',
      type: 'Paid',
      amount: 6000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 6,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Gifting',
      mode: 'Net Banking',
      type: 'Received',
      amount: 25000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 7,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Monitization',
      mode: 'UPI',
      type: 'Paid',
      amount: 15000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
    {
      id: 8,
      name: 'Praveen Dubey',
      username: '@praveendubey',
      transactionId: '124586757687852',
      date: '27 Feb, 2024',
      account: 'Monitization',
      mode: 'Wallet',
      type: 'Paid',
      amount: 10000,
      statusColor: 'bg-blue-50 text-blue-500',
    },
  ]);
  const [selectedTransactionIds, setSelectedTransactionIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    if (selectedTransactionIds.length === transactions.length) {
      setSelectedTransactionIds([]);
    } else {
      setSelectedTransactionIds(transactions.map((transaction) => transaction.id));
    }
  };

  const toggleSelectTransaction = (id) => {
    setSelectedTransactionIds((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
    );
  };

  const isSelected = (id) => selectedTransactionIds.includes(id);
  const isAllSelected = selectedTransactionIds.length === transactions.length;

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = useMemo(() => {
    return Math.ceil(filteredTransactions.length / itemsPerPage);
  }, [filteredTransactions.length, itemsPerPage]);

  const renderPaginationButtons = () => {
    const pages = [];
    const maxPageButtons = 5;
    const halfMax = Math.floor(maxPageButtons / 2);

    if (totalPages <= maxPageButtons + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= halfMax + 1) {
        for (let i = 1; i <= maxPageButtons; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfMax) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - maxPageButtons + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - halfMax; i <= currentPage + halfMax; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages.map((page, index) =>
      page === '...' ? (
        <span key={index} className="px-1 text-gray-500">
          ...
        </span>
      ) : (
        <button
          key={page}
          className={`h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 ${
            currentPage === page
              ? 'bg-blue-500 text-white shadow'
              : 'bg-white hover:bg-gray-100'
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-white shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Transactions</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 text-gray-600 border border-gray-200">
            <RefreshCcw size={16} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-600 border border-gray-200">
            <span className="sr-only">More options</span>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Search and Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1 w-full sm:w-auto bg-white rounded-md shadow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search & Filter"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative inline-block">
            <button className="flex items-center px-4 py-2 bg-white shadow text-gray-700 rounded-md ">
              <Calendar className="mr-2 text-blue-500" size={16} />
              <span className="hidden sm:inline text-blue-500">Last 7 days:</span> <span className='text-blue-500'>Feb 1, 2024 - Feb 7, 2024</span>
            </button>
          </div>
          
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Sub-header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 mb-4 space-y-2 sm:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800">Payment History</h3>
            <p className="text-sm text-gray-500">Lorem ipsum is simply dummy text of the industry.</p>
          </div>
          <div className="flex flex-wrap items-center space-x-2 space-y-2 sm:space-y-0">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow">
              Spent <ChevronDown size={18} className="ml-2 text-blue-500" />
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow">
              Last 7 Days <ChevronDown size={18} className="ml-2 text-blue-500" />
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow">
              <ListFilter size={18} className="mr-2" /> Filters
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow">
              <Columns3 size={18} className="mr-2" /> Customize columns
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm shadow">
              Reset Columns
            </button>
            <button className="flex gap-2 items-center px-4 py-2 bg-white text-gray-600 rounded-md hover:bg-blue-100 shadow border border-gray-200">
            <img src='/export-bold-svgrepo-com.svg' className="w-4 h-4" />
            <span className='text-sm'>Export</span>
          </button>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-md font-medium text-black tracking-wider">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    checked={isAllSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black">
                  <div className="flex items-center">
                    User Name/ID <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black">
                  <div className="flex items-center">
                    Transaction Id <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black ">
                  <div className="flex items-center">
                    Date <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black ">
                  <div className="flex items-center">
                    Account <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black ">
                  <div className="flex items-center">
                    Mode <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black ">
                  <div className="flex items-center">
                    Type <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-md font-medium text-black ">
                  <div className="flex items-center">
                    Amount <ArrowUpDown size={25} className="bg-white p-1 ml-1 rounded" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedTransactions.map((transaction, index) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded"
                      checked={isSelected(transaction.id)}
                      onChange={() => toggleSelectTransaction(transaction.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{transaction.name}</div>
                    <div className="text-sm text-gray-500">{transaction.username}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {transaction.transactionId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.account}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.mode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    ₹ {transaction.amount.toLocaleString('en-IN')}
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

export default Transaction;