import React, { useState } from 'react';
import { 
  MessageCircle, 
  TrendingUp, 
  Eye, 
  Share, 
  Star, 
  Copy, 
  BarChart3, 
  LineChart, 
  AreaChart,
  ArrowUpDown,
  Users,
  Clock,
  Heart,
  Bookmark,
  Play
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  AreaChart as RechartsAreaChart, 
  BarChart as RechartsBarChart,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Line,
  Area,
  Bar
} from 'recharts';

const ContentPerformance = () => {
  const [chartType, setChartType] = useState('line');
  
  // Sample data for charts
  const uploadData = [
    { day: 'Mon', uploads: 0.45, activeUsers: 1000 },
    { day: 'Tue', uploads: 0.38, activeUsers: 1200 },
    { day: 'Wed', uploads: 0.52, activeUsers: 980 },
    { day: 'Thu', uploads: 0.41, activeUsers: 1100 },
    { day: 'Fri', uploads: 0.48, activeUsers: 1300 },
    { day: 'Sat', uploads: 0.35, activeUsers: 900 },
    { day: 'Sun', uploads: 0.43, activeUsers: 1050 }
  ];

  const performanceData = [
    { month: 'Jan', views: 125000, shares: 3200, saves: 2100 },
    { month: 'Feb', views: 142000, shares: 13800, saves: 12400 },
    { month: 'Mar', views: 158000, shares: 54200, saves: 12800 },
    { month: 'Apr', views: 134000, shares: 43600, saves: 92300 },
    { month: 'May', views: 167000, shares: 94800, saves: 13100 },
    { month: 'Jun', views: 189000, shares: 65200, saves: 93400 }
  ];

  const contentTypeData = [
    {
      type: 'Video',
      category: 'Viral (Top 1%)',
      views: '25.2K',
      shares: '6.2%',
      saves: '2.1%',
      watchTime: '78%',
      completion: '72%',
      status: 'viral'
    },
    {
      type: 'Image',
      category: 'Boostable (Top 5%)',
      views: '12.8K',
      shares: '2.8%',
      saves: '1.7%',
      watchTime: '-',
      completion: '65%',
      status: 'boostable'
    },
    {
      type: 'Carousel',
      category: 'Trending (Top 25%)',
      views: '4.2K',
      shares: '1.2%',
      saves: '0.9%',
      watchTime: '-',
      completion: '58%',
      status: 'trending'
    },
    {
      type: 'Story',
      category: 'Average',
      views: '800',
      shares: '0.3%',
      saves: '0.4%',
      watchTime: '-',
      completion: '45%',
      status: 'average'
    }
  ];

  const creatorTypeData = [
    {
      type: 'Nano',
      followers: '<5K',
      viewRate: '18%',
      avgViews: '850',
      engagement: '12.5%'
    },
    {
      type: 'Lower Middle',
      followers: '5-10K',
      viewRate: '12%',
      avgViews: '1.2K',
      engagement: '8.7%'
    },
    {
      type: 'Mid',
      followers: '10-50K',
      viewRate: '7.5%',
      avgViews: '3.8K',
      engagement: '6.2%'
    },
    {
      type: 'Higher',
      followers: '50K-100K',
      viewRate: '6.2%',
      avgViews: '6.1K',
      engagement: '5.1%'
    }
  ];

  const viralityData = [
    { name: 'Downloads per Share', value: 42, target: 40, color: '#10b981' },
    { name: 'Shares per Impression', value: 80, target: 100, color: '#3b82f6' },
    { name: 'Duplicate Content', value: 85, target: 100, color: '#f59e0b' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'viral': return 'bg-green-100 text-green-800';
      case 'boostable': return 'bg-blue-100 text-blue-800';
      case 'trending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderChart = (data, dataKey, color = '#3b82f6') => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartType) {
      case 'area':
        return (
          <RechartsAreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <defs>
              <linearGradient id="colorUploads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fillOpacity={1} 
              fill="url(#colorUploads)" 
            />
          </RechartsAreaChart>
        );
      case 'bar':
        return (
          <RechartsBarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill={color} />
          </RechartsBarChart>
        );
      default:
        return (
          <RechartsLineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2} 
            />
          </RechartsLineChart>
        );
    }
  };

  return (
    <div className="p-6 space-y-6  min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        
        {/* Chart Type Selector */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow">
          <button
            onClick={() => setChartType('line')}
            className={`p-2 flex gap-1 rounded ${chartType === 'line' ? 'bg-blue-100 text-blue-600' : 'text-black hover:text-gray-700'}`}
          >
            Line<LineChart className="w-4  py-auto" />
          </button>
          <button
            onClick={() => setChartType('area')}
            className={`p-2 flex gap-1 rounded ${chartType === 'area' ? 'bg-blue-100 text-blue-600' : 'text-black hover:text-gray-700'}`}
          >
            Area<AreaChart className="w-4  py-auto" />
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`p-2 flex gap-1 rounded ${chartType === 'bar' ? 'bg-blue-100 text-blue-600' : 'text-black hover:text-gray-700'}`}
          >
            Bar<BarChart3 className="w-4  py-auto" />
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upload Rate</p>
              <p className="text-3xl font-bold text-gray-900">0.43</p>
              <p className="text-xs text-gray-500">per daily active user</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Views/Upload</p>
              <p className="text-3xl font-bold text-gray-900">8.2K</p>
              <p className="text-xs text-green-600 flex gap-1"><TrendingUp className='w-4 h-4'/> 12% vs last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Virality Rate</p>
              <p className="text-3xl font-bold text-gray-900">1.2%</p>
              <p className="text-xs text-green-600 flex gap-1"><TrendingUp className='w-4 h-4'/> 0.2% target achieved</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Share className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Duplicate Content</p>
              <p className="text-3xl font-bold text-gray-900">8.5%</p>
              <p className="text-xs text-green-600 flex gap-1"><TrendingUp className='w-4 h-4'/> Below 10% threshold</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Copy className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            {renderChart(uploadData, 'uploads', '#10b981')}
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="shares" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="saves" stroke="#f59e0b" strokeWidth={2} />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Virality Metrics */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Virality Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {viralityData.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { value: metric.value, fill: metric.color },
                        { value: Math.max(0, metric.target - metric.value), fill: '#e5e7eb' }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold">{(metric.value/metric.target*100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-500">of target</div>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">{metric.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Performance Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Content Performance by Type</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider flex gap-1">Content Type <ArrowUpDown className='rounded w-5 h-5 bg-white p-1'/></th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Views </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Shares</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Saves</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Watch Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Completion</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contentTypeData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.shares}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.saves}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.watchTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Creator Tiers Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Creator Performance by Tier</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider flex gap-2"><div>Creator Type</div> <ArrowUpDown className='w-5 h-5 p-1 bg-white rounded'/></th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Followers</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">View Rate</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Avg Views</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black tracking-wider">Engagement</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {creatorTypeData.map((creator, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{creator.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{creator.followers}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{creator.viewRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{creator.avgViews}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{creator.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentPerformance;