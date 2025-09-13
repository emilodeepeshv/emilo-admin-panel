import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, MoreHorizontal, Eye, Calendar, MoreVertical, Monitor, User, MessageSquare } from 'lucide-react';

const statConfig = {
  "Posts": {
    path: null,
    icon: "/noun-feed-5095062.svg",
    bgColor: "bg-orange-100",
    iconBgColor: "bg-orange-500"
  },
  "Comments": {
    path: null,
    icon: "/noun-comments-2374383.svg",
    bgColor: "bg-green-100",
    iconBgColor: "bg-green-500"
  },
  "Profiles": {
    path: "/reportusers",
    icon: "/noun-user-3855315.svg",
    bgColor: "bg-blue-100",
    iconBgColor: "bg-blue-500"
  },
  "Messages": {
    path: null,
    icon: "/noun-messages-6693803.svg",
    bgColor: "bg-purple-100",
    iconBgColor: "bg-purple-500"
  },
  "Flag": {
    path: "/reports/flagged",
    icon: "/flag-2-svgrepo-com.svg",
    bgColor: "bg-red-100",
    iconBgColor: "bg-red-500"
  }
};

const BlockedFreezed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedRows, setExpandedRows] = useState({});

  const statsData = [
    { type: 'Posts', count: 3800 },
    { type: 'Comments', count: 9830 },
    { type: 'Profiles', count: 756 },
    { type: 'Messages', count: 5600 },
    { type: 'Flag', count: 139 }
  ];

  const userData = [
    {
      id: '1245857576871952',
      name: 'Praveen Dubey',
      reportedUsers: ['Sandeep Singh', 'Ritu Kaur', 'Manish Thakur'],
      moreCount: 2,
      reportCategory: 'Multiple',
      reportTopic: 'Multiple',
      severity: 5,
      status: 'Blocked',
      reports: [
        { time: '7:20 PM', date: 'Apr 24, 2024', reporter: 'Sandeep Singh', username: '@sandeepsingh', category: 'Posts', topic: 'Inappropriate Content' },
        { time: '6:58 PM', date: 'Apr 24, 2024', reporter: 'Ritu Kaur', username: '@ritukaur123', category: 'Profile', topic: 'Fake' },
        { time: '8:12 PM', date: 'Apr 23, 2024', reporter: 'Manish Thakur', username: '@manishthakur165', category: 'Comments', topic: 'Harassment' },
        { time: '3:22 PM', date: 'Apr 23, 2024', reporter: 'Ravi Pandey', username: '@ravipandey433', category: 'Posts', topic: 'Inappropriate Content' },
        { time: '4:30 PM', date: 'Apr 22, 2024', reporter: 'Gokul Prasad', username: '@gokulprasad007', category: 'Posts', topic: 'Inappropriate Content' }
      ]
    },
    {
      id: '1245857576871953',
      name: 'Rohit Sahu',
      reportedUsers: ['Anita Sharma', 'Vikash Kumar'],
      moreCount: 1,
      reportCategory: 'Posts',
      reportTopic: 'Spam',
      severity: 4,
      status: 'Blocked',
      reports: [
        { time: '9:15 AM', date: 'Apr 25, 2024', reporter: 'Anita Sharma', username: '@anitasharma', category: 'Posts', topic: 'Spam' },
        { time: '2:30 PM', date: 'Apr 24, 2024', reporter: 'Vikash Kumar', username: '@vikashkumar', category: 'Posts', topic: 'Inappropriate Content' },
        { time: '5:45 PM', date: 'Apr 23, 2024', reporter: 'Priya Singh', username: '@priyasingh', category: 'Comments', topic: 'Harassment' }
      ]
    },
    {
      id: '1245857576871954',
      name: 'Siddharth Sharma',
      reportedUsers: ['Deepak Verma', 'Kavita Patel'],
      moreCount: 0,
      reportCategory: 'Profile',
      reportTopic: 'Inappropriate Content',
      severity: 3,
      status: 'Freezed',
      reports: [
        { time: '11:20 AM', date: 'Apr 26, 2024', reporter: 'Deepak Verma', username: '@deepakverma', category: 'Profile', topic: 'Inappropriate Content' },
        { time: '4:15 PM', date: 'Apr 25, 2024', reporter: 'Kavita Patel', username: '@kavitapatel', category: 'Posts', topic: 'Inappropriate Content' }
      ]
    }
  ];

  const SeverityDots = ({ level }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level 
                ? level >= 4 ? 'bg-red-500' : 'bg-orange-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  const toggleRowExpansion = (userId) => {
    setExpandedRows(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'posts':
        return <Monitor className="w-4 h-4" />;
      case 'profile':
        return <User className="w-4 h-4" />;
      case 'comments':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 p-4 border border-gray-200 rounded-lg shadow bg-white px-4">
          <h1 className="text-lg font-semibold text-gray-900">Blocked/Freezed</h1>
          <MoreVertical className="w-7 h-7 border rounded border-gray-300 p-1 text-gray-900" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {statsData.map((stat) => {
            const config = statConfig[stat.type];
            return (
              <div key={stat.type} className={` rounded-xl p-4 flex items-center gap-3 border border-gray-200 shadow bg-white`}>
                <div className={`${config.iconBgColor} p-2 rounded-lg`}>
                  <img src={config.icon} alt={stat.type} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.count.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{stat.type}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative bg-white">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
              <input
                type="text"
                placeholder="Search User Name/ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-290"
              />
            </div>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg border border-gray-300 bg-white">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 p-2 rounded-lg bg-white">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span>April 1, 2024 ~ April 18, 2024</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 bg-white">
              <img src="/export-bold-svgrepo-com.svg" alt="Export" className="w-5 h-5" />
              <span className="text-sm font-medium">Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900 w-8">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    User Name/ID
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Reported Users
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Report Category
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Report Topic
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Severity
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Status
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <React.Fragment key={user.id}>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer" onClick={() => toggleRowExpansion(user.id)}>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-red-600">{user.name}</div>
                        <div className="text-sm text-gray-500">ID: {user.id}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {user.reportedUsers.slice(0, 3).map((reporter, idx) => (
                          <span key={idx} className="text-sm text-gray-700">
                            {reporter}{idx < Math.min(user.reportedUsers.length, 3) - 1 ? ',' : ''}
                          </span>
                        ))}
                        {user.moreCount > 0 && (
                          <span className="text-sm text-blue-600">
                            +{user.moreCount} More
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{user.reportCategory}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{user.reportTopic}</td>
                    <td className="py-4 px-4">
                      <SeverityDots level={user.severity} />
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Blocked' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Details - Shows individual reports for the specific user */}
                  {expandedRows[user.id] && user.reports && (
                    <tr className="bg-gray-50">
                      <td colSpan="8" className="p-0">
                        <div className="border-l-4 border-blue-500 bg-white">
                          {/* Individual Reports */}
                          {user.reports.map((report, idx) => (
                            <div key={idx} className="grid grid-cols-8 gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 items-center">
                              {/* Checkbox column (empty for reports) */}
                              <div className="flex justify-center">
                                <div className="text-sm text-gray-500">
                                  <div className="font-medium">{report.time}</div>
                                  <div>{report.date}</div>
                                </div>
                              </div>
                              
                              {/* User Name/ID column - Reporter info */}
                              <div>
                                <div className="font-medium text-blue-600">{report.reporter}</div>
                                <div className="text-sm text-gray-500">{report.username}</div>
                              </div>
                              
                              {/* Reported Users column - empty for individual reports */}
                              <div></div>
                              
                              {/* Report Category column */}
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                                  report.category === 'Posts' ? 'bg-blue-100 text-blue-800' :
                                  report.category === 'Profile' ? 'bg-purple-100 text-purple-800' :
                                  report.category === 'Comments' ? 'bg-green-100 text-green-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {getCategoryIcon(report.category)}
                                  {report.category}
                                </span>
                              </div>
                              
                              {/* Report Topic column */}
                              <div className="text-sm text-gray-700">{report.topic}</div>
                              
                              {/* Severity column - empty for individual reports */}
                              <div></div>
                              
                              {/* Status column - empty for individual reports */}
                              <div></div>
                              
                              {/* Action column */}
                              <div className="flex justify-center">
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  See Detail
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <select 
                value={itemsPerPage} 
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">Items Per Page</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 text-gray-400 hover:text-gray-600">‹‹</button>
              <button className="px-2 py-1 text-gray-400 hover:text-gray-600">‹</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">2</button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">58</button>
              <button className="px-2 py-1 text-gray-400 hover:text-gray-600">›</button>
              <button className="px-2 py-1 text-gray-400 hover:text-gray-600">››</button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Jump To Page</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm w-16">
                <option value={1}>1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockedFreezed;