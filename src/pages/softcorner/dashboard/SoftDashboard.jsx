import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { RefreshCw,Cake, EllipsisVertical, Calendar, ListFilter, Info, Users, Search, UserPlus, UserX, Heart, UserMinus, Edit, Gift, MessageSquare, TrendingUp, X, ChevronDown } from 'lucide-react';

const SoftDashboard = () => {
  const [dateRange, setDateRange] = useState('Last 7 days');
  const [selectedAreas, setSelectedAreas] = useState(['Karnataka (India)', 'Hunan (China)', 'Gandaki (Nepal)']);

  // User metrics data
  const userMetrics = [
    { title: 'All Users', count: '28,753,637', change: '18%', color: 'bg-purple-100', lineColor: '#8B5CF6' },
    { title: 'Active Users', count: '11,533,409', change: '11%', color: 'bg-green-100', lineColor: '#10B981' },
    { title: 'New Users', count: '1,139,772', change: '11%', color: 'bg-blue-100', lineColor: '#3B82F6' },
    { title: 'Deleted Users', count: '9,428', change: '11%', color: 'bg-red-100', lineColor: '#EF4444' },
    { title: 'Matched', count: '53,637', change: '11%', color: 'bg-yellow-100', lineColor: '#F59E0B' }
  ];

  const matchMetrics = [
    { title: 'Match Pending', count: '39,837', change: '19%', color: 'bg-orange-100', lineColor: '#F97316' },
    { title: 'Requested', count: '39,772', change: '11%', color: 'bg-cyan-100', lineColor: '#06B6D4' },
    { title: 'Not Requested', count: '9,428', change: '11%', color: 'bg-red-100', lineColor: '#EF4444' },
    { title: 'Date Planned', count: '39,772', change: '11%', color: 'bg-pink-100', lineColor: '#EC4899' },
    { title: 'Removed (Breakup)', count: '39,772', change: '11%', color: 'bg-purple-100', lineColor: '#A855F7' }
  ];

  // Chart data
  const userEditsData = [
    { date: '18 July', all: 2400, first: 2000, second: 1800, third: 1200 },
    { date: '19 July', all: 2600, first: 2100, second: 1900, third: 1300 },
    { date: '20 July', all: 2800, first: 2200, second: 2000, third: 1400 },
    { date: '21 July', all: 3200, first: 2400, second: 2100, third: 1500 },
    { date: '22 July', all: 2900, first: 2300, second: 2000, third: 800 },
    { date: '23 July', all: 2700, first: 2200, second: 1900, third: 1600 },
    { date: '24 July', all: 3860, first: 1895, second: 1895, third: 1895 }
  ];

  const giftData = [
    { date: '18 July', value: 1400 },
    { date: '19 July', value: 1600 },
    { date: '20 July', value: 2200 },
    { date: '21 July', value: 2800 },
    { date: '22 July', value: 2400 },
    { date: '23 July', value: 1800 },
    { date: '24 July', value: 3860 }
  ];

  const profileReportedData = [
    { date: '18 July', value: 1400 },
    { date: '19 July', value: 1800 },
    { date: '20 July', value: 2200 },
    { date: '21 July', value: 3000 },
    { date: '22 July', value: 2200 },
    { date: '23 July', value: 1800 },
    { date: '24 July', value: 3860 }
  ];

  const lifePartnerData = [
    { date: '18 July', all: 2600, completed: 2100, requested: 2000 },
    { date: '19 July', all: 2400, completed: 2000, requested: 1900 },
    { date: '20 July', all: 2800, completed: 2200, requested: 2000 },
    { date: '21 July', all: 3200, completed: 2500, requested: 2300 },
    { date: '22 July', all: 2900, completed: 2100, requested: 2000 },
    { date: '23 July', all: 2700, completed: 2000, requested: 1900 },
    { date: '24 July', all: 3860, completed: 1895, requested: 1895 }
  ];

  const postsData = [
    { date: '18 July', value: 1600 },
    { date: '19 July', value: 1700 },
    { date: '20 July', value: 2400 },
    { date: '21 July', value: 2800 },
    { date: '22 July', value: 2600 },
    { date: '23 July', value: 2000 },
    { date: '24 July', value: 3860 }
  ];

  const trendingGifts = [
    { name: 'Emilo Ring', id: '124580576', category: 'Rings', date: '27 Feb, 2024', price: '₹ 1,999.00', quantity: '4,207' },
    { name: 'Pink Teddy', id: '124580576', category: 'Soft Toys', date: '27 Feb, 2024', price: '₹ 999.00', quantity: '3,588' },
    { name: 'Love Band Keyring', id: '124580576', category: 'Rings', date: '27 Feb, 2024', price: '₹ 150.00', quantity: '3,246' },
    { name: 'Pink Rose Bukey', id: '124580576', category: 'Bukey', date: '27 Feb, 2024', price: '₹ 899.00', quantity: '3,242' }
  ];

  const MetricCard = ({ title, count, change, color, lineColor, showChart = true }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-md text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{count}</h3>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">{change}</span>
            <span className="text-sm text-gray-500 ml-1">vs previous 1 month</span>
          </div>
        </div>
      </div>
      {showChart && (
        <div className="h-12">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userEditsData.slice(-6)}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor} stopOpacity={0.3}/>
                  <stop offset="90%" stopColor={lineColor} stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="all" 
                stroke={lineColor} 
                fill={`url(#gradient-${title})`}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );

  const ChartSection = ({ title, data, children, timeframe = "Last 1 Month", hasFilters = false }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6 border-b pb-2 border-gray-300">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center px-3 py-1  rounded-md text-sm">
            <Calendar className="w-4.5 h-4.5 mr-2 text-blue-500" />
            {timeframe}
          </div>
          <div className=" items-center px-3 py-1  rounded-md text-sm flex gap-2"><Cake className='w-5 h-5 text-blue-500 items-center' />Age <ChevronDown className='w-4.5 h-4.5  items-center'/></div>
          <div className=" items-center px-3 py-1  rounded-md text-sm flex gap-2"><ListFilter className='w-5 h-5 text-blue-500 items-center' />Gender <ChevronDown className='w-4.5 h-4.5 items-center'/></div>
          
        </div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border border-gray-200 p-3 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold text-gray-900">Soft Corner</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md border border-gray-200">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md border border-gray-200">
            <EllipsisVertical className='w-5 h-5'/>
          </button>
        </div>
      </div>

      {/* Search and Date Range */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search & Filter"
            className="pl-10 pr-220 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-3">
            <Search className='w-5 h-5 '/>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center px-3 py-2 bg-white border border-gray-200 shadow  text-blue-600 rounded-md">
            <Calendar className="w-4 h-4 mr-2" />
            Last 7 days: Feb 1, 2024 - Feb 7, 2024
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-200 shadow bg-white rounded-md hover:bg-gray-50">
            <img src='/export-bold-svgrepo-com.svg' className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Users Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mr-2">Users</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {userMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {matchMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Edits */}
        <ChartSection title="User Edits" hasFilters={true}>
          <div className="flex space-x-4 mb-4">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">37.84k <div>All</div></div>
            <div className="bg-gray-200 text-gray-900 text-sm px-4 py-2 rounded-md font-medium">9.34k <div>1st Edit</div></div>
            <div className="bg-gray-200 text-gray-900 text-sm px-4 py-2 rounded-md font-medium">1.14k <div>2nd Edit</div></div>
            <div className="bg-gray-200 text-gray-900 text-sm px-4 py-2 rounded-md font-medium">1.14k <div>3rd Edit</div></div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userEditsData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Line type="monotone" dataKey="all" stroke="#4F46E5" strokeWidth={3} dot={{ fill: '#4F46E5', r: 6 }} />
                <Line type="monotone" dataKey="first" stroke="#F59E0B" strokeWidth={2} dot={{ fill: '#F59E0B', r: 4 }} />
                <Line type="monotone" dataKey="second" stroke="#EF4444" strokeWidth={2} dot={{ fill: '#EF4444', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartSection>

        {/* Gift Purchased */}
        <ChartSection title="Gift Purchased" hasFilters={true}>
          <div className="mb-4">
            <div className="flex  flex-wrap gap-2 mb-4">
              {selectedAreas.map((area) => (
                <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {area}
                  <X className="w-3 h-3 ml-2 cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={giftData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartSection>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Profile Reported */}
        <ChartSection title="Profile Reported" hasFilters={true}>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedAreas.map((area) => (
                <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {area}
                  <X className="w-3 h-3 ml-2 cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profileReportedData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartSection>

        {/* Life Partner */}
        <ChartSection title="Life Partner" hasFilters={true}>
          <div className="flex space-x-4 mb-4">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">37.84k <div>All</div></div>
            <div className="bg-gray-100 text-black  px-4 py-2 rounded-md text-sm font-medium">9.34k <div>Completed</div></div>
            <div className="bg-gray-100 text-black  px-4 py-2 rounded-md text-sm font-medium">1.14k <div>Requested</div></div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lifePartnerData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Line type="monotone" dataKey="all" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 6 }} />
                <Line type="monotone" dataKey="completed" stroke="#F59E0B" strokeWidth={2} dot={{ fill: '#F59E0B', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartSection>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Gifts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Trending Gifts</h3>
              <p className="text-sm text-gray-500">Lorem ipsum is simply dummy text.</p>
            </div>
            <div className="flex items-center space-x-3">
              <select className="text-sm border border-gray-200 rounded-md px-3 py-1">
                <option>Last 7 Days</option>
              </select>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Item Name</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Item Id</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Category</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Price</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">Sell Qty.</th>
                </tr>
              </thead>
              <tbody>
                {trendingGifts.map((gift, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 text-sm text-gray-900">{gift.name}</td>
                    <td className="py-4 text-sm text-blue-600">{gift.id}</td>
                    <td className="py-4 text-sm text-gray-600">
                      <div>{gift.category}</div>
                      <div className="text-xs text-gray-400">{gift.date}</div>
                    </td>
                    <td className="py-4 text-sm text-gray-900">{gift.price}</td>
                    <td className="py-4 text-sm text-gray-900">{gift.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-blue-600 text-sm hover:underline">See All</button>
          </div>
        </div>

        {/* Number of Posts */}
        <ChartSection title="Number of Posts" hasFilters={true} timeframe="1 Month">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-4">Lorem ipsum is simply dummy text.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedAreas.map((area) => (
                <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {area}
                  <X className="w-3 h-3 ml-2 cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={postsData}>
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartSection>
      </div>
    </div>
  );
};

export default SoftDashboard;