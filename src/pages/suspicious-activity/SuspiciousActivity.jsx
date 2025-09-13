import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ArrowUpDown, Calendar, MoreVertical, Monitor, Smartphone, MapPin, Globe, Clock, Eye, Upload } from 'lucide-react';

const SuspiciousActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedRows, setExpandedRows] = useState({});

  const activityData = [
    {
      id: '1',
      userNameId: 'Praveen Dubey',
      email: 'praveen35@example.com',
      activity: '12 Login Attempt',
      location: '108.139.129.173',
      locationDetail: 'Open Map',
      device: 'Windows',
      deviceDetail: 'Windows 11',
      platform: 'Browser',
      platformDetail: 'Chrome',
      profileStatus: 'Profile Active',
      isSelected: false,
      userAvatar: 'https://placehold.co/40x40/d1e7dd/0a3622?text=PD',
      reports: [
        { time: '7:20 PM', date: 'Apr 24, 2024', reporter: 'Sandeep Singh', username: '@sandeepsingh', category: 'Posts', topic: 'Inappropriate Content', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=SS' },
        { time: '6:58 PM', date: 'Apr 24, 2024', reporter: 'Ritu Kaur', username: '@ritukaur123', category: 'Profile', topic: 'Fake', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=RK' },
        { time: '8:12 PM', date: 'Apr 23, 2024', reporter: 'Manish Thakur', username: '@manishthakur165', category: 'Comments', topic: 'Harassment', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=MT' },
        { time: '3:22 PM', date: 'Apr 23, 2024', reporter: 'Ravi Pandey', username: '@ravipandey433', category: 'Posts', topic: 'Inappropriate Content', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=RP' },
        { time: '4:30 PM', date: 'Apr 22, 2024', reporter: 'Gokul Prasad', username: '@gokulprasad007', category: 'Posts', topic: 'Inappropriate Content', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=GP' }
      ]
    },
    {
      id: '2',
      userNameId: 'Praveen Dubey',
      email: 'praveen36@example.com',
      activity: '5 Login Attempt',
      location: 'Multiple IP',
      locationDetail: 'See All',
      device: 'Multiple Device',
      deviceDetail: '',
      platform: 'Multiple Platform',
      platformDetail: '',
      profileStatus: 'Profile Active',
      isSelected: true,
      userAvatar: 'https://placehold.co/40x40/d1e7dd/0a3622?text=PD',
      reports: [
        { time: '6:58 PM', date: 'Apr 24, 2024', reporter: 'Ritu Kaur', username: '@ritukaur123', category: 'Profile', topic: 'Fake', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=RK' },
        { time: '8:12 PM', date: 'Apr 23, 2024', reporter: 'Manish Thakur', username: '@manishthakur165', category: 'Comments', topic: 'Harassment', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=MT' }
      ]
    },
    
    {
      id: '8',
      userNameId: 'Praveen Dubey',
      email: 'praveen38@example.com',
      activity: '12 Login Attempt',
      location: '108.139.129.173',
      locationDetail: 'Open Map',
      device: 'Redmi Note 13',
      deviceDetail: 'Android 14',
      platform: 'App',
      platformDetail: 'eMilo',
      profileStatus: 'Profile Active',
      isSelected: false,
      userAvatar: 'https://placehold.co/40x40/d1e7dd/0a3622?text=PD',
      reports: [
        { time: '7:20 PM', date: 'Apr 24, 2024', reporter: 'Login Monitor', username: '@loginmonitor', category: 'Authentication', topic: 'Multiple Login Attempts', reporterAvatar: 'https://placehold.co/32x32/d0e2e5/04252b?text=LM' }
      ]
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Profile Active': 'bg-green-100 text-green-800',
      'Session Active': 'bg-blue-100 text-blue-800',
      'Session Closed': 'bg-red-100 text-red-800'
    };
    return statusConfig[status] || 'bg-gray-100 text-gray-800';
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
        return <Monitor className="w-3 h-3" />;
      case 'profile':
        return <Smartphone className="w-3 h-3" />;
      case 'comments':
        return <Globe className="w-3 h-3" />;
      case 'activity':
        return <Clock className="w-3 h-3" />;
      case 'network':
        return <Globe className="w-3 h-3" />;
      case 'device':
        return <Smartphone className="w-3 h-3" />;
      case 'security':
        return <Eye className="w-3 h-3" />;
      case 'authentication':
        return <Monitor className="w-3 h-3" />;
      default:
        return <Monitor className="w-3 h-3" />;
    }
  };

  const filteredActivityData = activityData.filter(activity =>
    activity.userNameId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (activity.email && activity.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 p-4 border border-gray-200 rounded-lg shadow bg-white px-4">
          <h1 className="text-lg font-semibold text-gray-900">Suspicious Activity</h1>
          <MoreVertical className="w-7 h-7 border rounded border-gray-300 p-1 text-gray-900" />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search User Name/ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-290"
              />
            </div>
            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg border border-gray-300">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span>April 1, 2024 ~ April 18, 2024</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 ">
              <img src='/export-bold-svgrepo-com.svg' className="w-4.5 h-4.5" />
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
                    Activity
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Location/IP
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Device
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Platform
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    Profile Status
                    <ArrowUpDown className="w-6 h-6 p-1 bg-white rounded text-black" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredActivityData.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <tr 
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer" 
                    onClick={() => toggleRowExpansion(activity.id)}
                  >
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300" 
                        checked={activity.isSelected}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {activity.userAvatar && (
                          <img
                            src={activity.userAvatar}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                          />
                        )}
                        <div>
                          <div className="font-medium text-red-600">{activity.userNameId}</div>
                          {activity.email && (
                            <div className="text-sm text-gray-500">{activity.email}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-700">{activity.activity}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-900">{activity.location}</div>
                          {activity.locationDetail && (
                            <div className="text-sm text-blue-600">{activity.locationDetail}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        <div className="text-gray-900">{activity.device}</div>
                        {activity.deviceDetail && (
                          <div className="text-blue-600">{activity.deviceDetail}</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        <div className="text-gray-900">{activity.platform}</div>
                        {activity.platformDetail && (
                          <div className="text-blue-600">{activity.platformDetail}</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(activity.profileStatus)}`}>
                        {activity.profileStatus}
                      </span>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                  
                  {/* Expanded Details - Shows individual reports for the specific activity */}
                  {expandedRows[activity.id] && activity.reports && (
                    <tr className="bg-gray-50">
                      <td colSpan="8" className="p-0">
                        <div className="border-l-4 border-blue-500 bg-white">
                          {/* Individual Reports */}
                          {activity.reports.map((report, idx) => (
                            <div key={idx} className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_80px_1fr] gap-4 px-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 items-center">
                              {/* Empty column for alignment */}
                              <div></div>
                              
                              {/* Time column */}
                              <div className="flex flex-col items-center">
                                <Clock className="w-5 h-5 text-gray-400 mb-1" />
                                <div className="text-sm text-gray-500 text-center">
                                  <div className="font-medium">{report.time}</div>
                                  <div>{report.date}</div>
                                </div>
                              </div>
                              
                              {/* Reporter column */}
                              <div className="flex items-center gap-3">
                                <img
                                  src={report.reporterAvatar}
                                  alt="Reporter Avatar"
                                  className="w-8 h-8 rounded-full"
                                />
                                <div>
                                  <div className="font-medium text-blue-600">{report.reporter}</div>
                                  <div className="text-sm text-gray-500">{report.username}</div>
                                </div>
                              </div>
                              
                              {/* Category column */}
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded text-sm font-medium ${
                                  report.category === 'Posts' ? 'bg-blue-100 text-blue-800' :
                                  report.category === 'Profile' ? 'bg-purple-100 text-purple-800' :
                                  report.category === 'Comments' ? 'bg-green-100 text-green-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {getCategoryIcon(report.category)}
                                  {report.category}
                                </span>
                              </div>
                              
                              {/* Topic column */}
                              <div className="text-sm text-gray-700">{report.topic}</div>
                              
                              {/* Empty columns for alignment */}
                              <div></div>
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
              <span className="text-sm text-gray-700">Items Per Page</span>
              <div className="relative">
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="appearance-none border border-gray-300 rounded px-2 pr-6 py-1 text-sm bg-white cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
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
              <div className="relative">
                <select 
                  className="appearance-none border border-gray-300 rounded px-2 pr-6 py-1 text-sm w-16 bg-white cursor-pointer"
                >
                  <option value={1}>1</option>
                </select>
                <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspiciousActivity;
