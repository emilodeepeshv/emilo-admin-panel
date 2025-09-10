import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  BarChart, 
  Bar 
} from 'recharts';
import { 
  RefreshCw, 
  MoreVertical, 
  Search, 
  Calendar, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  ListFilter,
  ChevronDown
} from 'lucide-react';
import exportSVG from '/export-bold-svgrepo-com.svg';

const PageDashboard = () => {
  const [dateRange, setDateRange] = useState('Last 7 days: Feb 1, 2024 - Feb 7, 2024');
  const [pageCategoryPeriod, setPageCategoryPeriod] = useState('Last 7 Days');
  const [adsRunningPeriod, setAdsRunningPeriod] = useState('Last 1 Month');
  const [contentsPeriod, setContentsPeriod] = useState('Last 1 Month');
  const [transactionPeriod, setTransactionPeriod] = useState('Last 7 Days');

  // Sample data for charts
  const pagesData = [
    { name: 'Week1', allPages: 28500000, activePages: 11200000, newPages: 1100000, deletedPages: 9200 },
    { name: 'Week2', allPages: 28200000, activePages: 11400000, newPages: 1120000, deletedPages: 9300 },
    { name: 'Week3', allPages: 28100000, activePages: 11300000, newPages: 1110000, deletedPages: 9250 },
    { name: 'Week4', allPages: 28300000, activePages: 11450000, newPages: 1125000, deletedPages: 9180 },
    { name: 'Week5', allPages: 28600000, activePages: 11500000, newPages: 1135000, deletedPages: 9150 },
    { name: 'Week6', allPages: 28753637, activePages: 11533409, newPages: 1139772, deletedPages: 9428 }
  ];

  const pageCategoriesData = [
    { date: '18 July', all: 2500, publicFigure: 1800, business: 1400 },
    { date: '19 July', all: 2600, publicFigure: 1850, business: 1450 },
    { date: '20 July', all: 2800, publicFigure: 1900, business: 1500 },
    { date: '21 July', all: 3200, publicFigure: 1950, business: 1550 },
    { date: '22 July', all: 2900, publicFigure: 1900, business: 1480 },
    { date: '23 July', all: 2700, publicFigure: 1850, business: 1520 },
    { date: '24 July', all: 3860, publicFigure: 1895, business: 1495 }
  ];

  const adsRunningData = [
    { day: 1, ads: 1800 },
    { day: 5, ads: 2200 },
    { day: 10, ads: 2800 },
    { day: 15, ads: 3400 },
    { day: 20, ads: 2300 },
    { day: 25, ads: 2100 },
    { day: 30, ads: 3860 }
  ];

  const contentsData = [
    { name: 'Ads', value: 280, color: '#10B981' },
    { name: 'Flix', value: 220, color: '#3B82F6' },
    { name: 'Videos', value: 100, color: '#8B5CF6' },
    { name: 'Memes', value: 135, color: '#6B7280' },
    { name: 'Stories', value: 190, color: '#F59E0B' },
    { name: 'GIFs', value: 150, color: '#EF4444' },
    { name: 'Best Clips', value: 145, color: '#F97316' }
  ];

  const transactionData = [
    {
      id: 1,
      pageName: 'Praveen Dubey',
      email: '@praveendubey',
      transactionId: '12456757687852',
      mode: 'Wallet',
      date: '27 Feb, 2024',
      amount: '₹ 6,000.00',
      status: 'Completed'
    },
    {
      id: 2,
      pageName: 'Praveen Dubey',
      email: '@praveendubey',
      transactionId: '12456757687852',
      mode: 'Net Banking',
      date: '27 Feb, 2024',
      amount: '₹ 25,000.00',
      status: 'Failed'
    },
    {
      id: 3,
      pageName: 'Praveen Dubey',
      email: '@praveendubey',
      transactionId: '12456757687852',
      mode: 'UPI',
      date: '27 Feb, 2024',
      amount: '₹ 15,000.00',
      status: 'Completed'
    },
    {
      id: 4,
      pageName: 'Praveen Dubey',
      email: '@praveendubey',
      transactionId: '12456757687852',
      mode: 'Wallet',
      date: '27 Feb, 2024',
      amount: '₹ 10,000.00',
      status: 'Completed'
    },
    {
      id: 5,
      pageName: 'Praveen Dubey',
      email: '@praveendubey',
      transactionId: '12456757687852',
      mode: 'Wallet',
      date: '27 Feb, 2024',
      amount: '₹ 10,000.00',
      status: 'Completed'
    }
  ];

  const StatCard = ({ title, value, change, color, bgColor, textColor, trendColor }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <div className="relative h-16 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pagesData.slice(-6)}>
            <Line 
              type="monotone" 
              dataKey={title.toLowerCase().replace(' ', '')} 
              stroke={color} 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Last 6 Months</p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</h2>
          <div className={`flex items-center text-sm ${trendColor}`}>
            {change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(change)}% vs previous 1 month
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border border-gray-200 p-3 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900">Page Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg p-1 px-3">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh
          </button>
          <button className="text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search and Date Range */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4 ">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search & Filter"
              className="pl-10 pr-[360%] py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-600 border border-gray-200 shadow bg-white px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4 mr-2" />
            {dateRange}
          </div>
          <button className="flex items-center text-gray-600 hover:text-gray-800 bg-white px-4 py-2 border border-gray-200 shadow rounded-lg p-1">
            
            <img src={exportSVG} alt={exportSVG} className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Page Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 border border-gray-300 shadow rounded-xl bg-white p-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-600 flex items-center">
              All Pages
              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
            </h3>
          </div>
          <div className="relative h-16 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pagesData.slice(-6)}>
                <Line 
                  type="monotone" 
                  dataKey="allPages" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Last 6 Months</p>
            <h2 className="text-3xl font-bold text-gray-900">28,753,637</h2>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              18% vs previous 1 month
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-600">Active Pages</h3>
          </div>
          <div className="relative h-16 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pagesData.slice(-6)}>
                <Line 
                  type="monotone" 
                  dataKey="activePages" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Last 6 Months</p>
            <h2 className="text-3xl font-bold text-gray-900">11,533,409</h2>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              7% vs previous 1 month
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-600">New Pages</h3>
          </div>
          <div className="relative h-16 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pagesData.slice(-6)}>
                <Line 
                  type="monotone" 
                  dataKey="newPages" 
                  stroke="#06B6D4" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Last 6 Months</p>
            <h2 className="text-3xl font-bold text-gray-900">1,139,772</h2>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              19% vs previous 1 month
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-600">Deleted Pages</h3>
          </div>
          <div className="relative h-16 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pagesData.slice(-6)}>
                <Line 
                  type="monotone" 
                  dataKey="deletedPages" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Last 6 Months</p>
            <h2 className="text-3xl font-bold text-gray-900">9,428</h2>
            <div className="flex items-center text-sm text-red-600">
              <TrendingDown className="w-4 h-4 mr-1" />
              7% vs previous 1 month
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Page Categories and Ads Running */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Page Categories */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6 border-b border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Page Categories</h3>
            <div className="relative flex gap-1">
                <Calendar className="w-5 h-5 my-auto text-blue-500" />
              <select 
                value={pageCategoryPeriod}
                onChange={(e) => setPageCategoryPeriod(e.target.value)}
                className="appearance-none bg-white  rounded-lg px-4 py-1 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex space-x-6 mb-6">
            <div className="text-center">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">
                <span className="text-lg font-bold">37.84k</span>
              </div>
              <p className="text-sm text-gray-600">All</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2">
                <span className="text-lg font-bold">9.34k</span>
              </div>
              <p className="text-sm text-gray-600">Public Figure</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 px-4 py-2 rounded-lg mb-2">
                <span className="text-lg font-bold text-blue-500">1.14k</span>
              </div>
              <p className="text-sm  text-blue-500">Business</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pageCategoriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="all" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="business" stroke="#06B6D4" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pages Running Ads */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6 border-b border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Pages Running Ads</h3>
            <div className="relative flex gap-1">
             <Calendar className="w-5 h-5 my-auto text-blue-500" />

              <select 
                value={adsRunningPeriod}
                onChange={(e) => setAdsRunningPeriod(e.target.value)}
                className="appearance-none bg-white  border-gray-300 rounded-lg px-4  pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Last 1 Month</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="mb-6">
            <div className="text-2xl font-bold text-gray-900">15.84k</div>
            <div className="text-sm text-gray-600 mb-2">Active Ads</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              14% vs previous 7 days
            </div>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adsRunningData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="ads" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Third Row - Contents and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contents By Pages */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6 border-b border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Contents By Pages</h3>
            <div className="relative flex gap-1">
                                <Calendar className="w-5 h-5 my-auto text-blue-500" />

              <select 
                value={contentsPeriod}
                onChange={(e) => setContentsPeriod(e.target.value)}
                className="appearance-none bg-white  border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Last 1 Month</option>
                <option>Last 3 Months</option>
                <option>Last 6 Months</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 300]} />
                <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transaction */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Transaction</h3>
              <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select 
                  value={transactionPeriod}
                  onChange={(e) => setTransactionPeriod(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <button className="flex items-center text-black hover:text-gray-800 border border-gray-300 rounded-lg px-3 py-2">
                <ListFilter className="w-4 h-4 mr-1" />
                Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Page Name/ID</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Transaction Id</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Mode</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Amount</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div>
                        <div className="font-medium text-gray-900">{transaction.pageName}</div>
                        <div className="text-sm text-blue-500">{transaction.email}</div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-blue-500 text-sm">{transaction.transactionId}</div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="text-sm text-gray-900">{transaction.mode}</div>
                      <div className="text-xs text-gray-500">{transaction.date}</div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="font-medium text-gray-900">{transaction.amount}</div>
                    </td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4">
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDashboard;