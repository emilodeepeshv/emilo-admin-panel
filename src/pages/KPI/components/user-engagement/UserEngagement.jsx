import React, { useState } from 'react';
import { MessageSquare, Clock, Bell, Heart, Share, MessageCircle, TrendingUp, Users, Eye, BarChart3, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const UserEngagement = () => {
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const [userFilter, setUserFilter] = useState('All Users');

  // Chart view states
  const [sessionChartType, setSessionChartType] = useState('Line');
  const [engagementChartType, setEngagementChartType] = useState('Area');
  const [notificationChartType, setNotificationChartType] = useState('Bar');
  const [userEngagementChartType, setUserEngagementChartType] = useState('Line');

  // Sample data
  const sessionData = [
    { date: '2024-01', avgSession: 28, sessions: 145 },
    { date: '2024-02', avgSession: 31, sessions: 167 },
    { date: '2024-03', avgSession: 33, sessions: 189 },
    { date: '2024-04', avgSession: 35, sessions: 203 },
    { date: '2024-05', avgSession: 34, sessions: 195 },
    { date: '2024-06', avgSession: 36, sessions: 218 },
    { date: '2024-07', avgSession: 35, sessions: 232 },
    { date: '2024-08', avgSession: 37, sessions: 245 }
  ];

  const engagementData = [
    { date: '2024-01', likes: 12500, shares: 3200, comments: 8900 },
    { date: '2024-02', likes: 13800, shares: 3600, comments: 9400 },
    { date: '2024-03', likes: 15200, shares: 4100, comments: 10200 },
    { date: '2024-04', likes: 16800, shares: 4500, comments: 11100 },
    { date: '2024-05', likes: 18200, shares: 4900, comments: 11800 },
    { date: '2024-06', likes: 19600, shares: 5300, comments: 12600 },
    { date: '2024-07', likes: 21100, shares: 5800, comments: 13400 },
    { date: '2024-08', likes: 22500, shares: 6200, comments: 14200 }
  ];

  const notificationData = [
    { type: 'Push', openRate: 68, sent: 125000 },
    { type: 'Email', openRate: 24, sent: 89000 },
    { type: 'In-App', openRate: 85, sent: 67000 },
    { type: 'SMS', openRate: 92, sent: 23000 }
  ];

  const reelCompletionData = [
    { name: '0-25%', value: 15, color: '#ef4444' },
    { name: '26-50%', value: 22, color: '#f97316' },
    { name: '51-75%', value: 28, color: '#eab308' },
    { name: '76-100%', value: 35, color: '#22c55e' }
  ];

  const userEngagementTrends = [
    { date: 'Week 1', likesPerUser: 8.2, sharesPerUser: 2.1, commentsPerUser: 5.8 },
    { date: 'Week 2', likesPerUser: 8.9, sharesPerUser: 2.3, commentsPerUser: 6.2 },
    { date: 'Week 3', likesPerUser: 9.4, sharesPerUser: 2.6, commentsPerUser: 6.7 },
    { date: 'Week 4', likesPerUser: 10.1, sharesPerUser: 2.8, commentsPerUser: 7.1 }
  ];

  // Chart type selector component
  const ChartTypeSelector = ({ currentType, onTypeChange }) => {
    const chartTypes = [
      { type: 'Line', icon: TrendingUp, label: 'Line Chart' },
      { type: 'Bar', icon: BarChart3, label: 'Bar Chart' },
      { type: 'Area', icon: Activity, label: 'Area Chart' }
    ];

    return (
      <div className="flex items-center bg-gray-100 rounded-lg p-1">
        {chartTypes.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              currentType === type
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            title={label}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{type}</span>
          </button>
        ))}
      </div>
    );
  };

  // Generic chart renderer function
  const renderChart = (data, chartType, config) => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartType) {
      case 'Line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={config.xKey} 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={3}
                dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: line.color }}
              />
            ))}
          </LineChart>
        );

      case 'Bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={config.xKey}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.lines.map((line) => (
              <Bar
                key={line.key}
                dataKey={line.key}
                fill={line.color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        );

      case 'Area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={config.xKey}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.lines.map((line) => (
              <Area
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={2}
                fill={line.color}
                fillOpacity={0.1}
              />
            ))}
          </AreaChart>
        );

      default:
        return null;
    }
  };

  // Chart configurations
  const sessionConfig = {
    xKey: 'date',
    lines: [
      { key: 'avgSession', color: '#3b82f6' },
      { key: 'sessions', color: '#10b981' }
    ]
  };

  const engagementConfig = {
    xKey: 'date',
    lines: [
      { key: 'likes', color: '#ef4444' },
      { key: 'shares', color: '#3b82f6' },
      { key: 'comments', color: '#10b981' }
    ]
  };

  const notificationConfig = {
    xKey: 'type',
    lines: [
      { key: 'openRate', color: '#8b5cf6' }
    ]
  };

  const userEngagementConfig = {
    xKey: 'date',
    lines: [
      { key: 'likesPerUser', color: '#ef4444' },
      { key: 'sharesPerUser', color: '#3b82f6' },
      { key: 'commentsPerUser', color: '#10b981' }
    ]
  };

  // Special pie chart renderer
  const renderPieChart = () => (
    <PieChart>
      <Pie 
        data={reelCompletionData} 
        dataKey="value" 
        nameKey="name" 
        label={({ value }) => `${value}%`}
        labelStyle={{ fontSize: 12, fontWeight: 'bold' }}
      >
        {reelCompletionData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );

  // Components
  const MetricCard = ({ icon: Icon, title, value, change, color, subtitle }) => (
    <div className="bg-white rounded-xl py-2 px-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <div>
              <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
              {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
            </div>
          </div>
          <div className="">
            <div className='flex justify-between'>
              <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-blue-500" />
            </div>
            </div>
            <div
              className={`flex items-center text-sm ${
                change?.startsWith('+') ? 'text-green-600' :
                change?.startsWith('-') ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChartCard = ({ title, children, className = "", chartSelector = null }) => (
    <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {chartSelector}
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-1 bg-gray-0 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center  gap-4">
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>

          <select
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>All Users</option>
            <option>New Users</option>
            <option>Active Users</option>
            <option>Premium Users</option>
          </select>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
            Configure Metrics
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard icon={Clock} title="Average Session Time" subtitle="Minutes per session" value="35.2" change="+8.3%" color="bg-blue-200" />
        <MetricCard icon={Users} title="Sessions per Day" subtitle="Daily average" value="245" change="+12.1%" color="bg-green-200" />
        <MetricCard icon={Heart} title="Engagement Rate" subtitle="Likes + Comments + Shares" value="68.4%" change="+5.7%" color="bg-pink-200" />
        <MetricCard icon={Bell} title="Push Open Rate" subtitle="Notification engagement" value="68.0%" change="-2.1%" color="bg-purple-200" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard 
          title="Session Trends"
          chartSelector={
            <ChartTypeSelector
              currentType={sessionChartType}
              onTypeChange={setSessionChartType}
            />
          }
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart(sessionData, sessionChartType, sessionConfig)}
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard 
          title="Engagement Actions"
          chartSelector={
            <ChartTypeSelector
              currentType={engagementChartType}
              onTypeChange={setEngagementChartType}
            />
          }
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart(engagementData, engagementChartType, engagementConfig)}
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard 
          title="Push Notification Performance"
          chartSelector={
            <ChartTypeSelector
              currentType={notificationChartType}
              onTypeChange={setNotificationChartType}
            />
          }
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart(notificationData, notificationChartType, notificationConfig)}
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Reel Completion Rate">
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              {renderPieChart()}
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {reelCompletionData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-gray-600">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard 
          title="Engagement Per User"
          chartSelector={
            <ChartTypeSelector
              currentType={userEngagementChartType}
              onTypeChange={setUserEngagementChartType}
            />
          }
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart(userEngagementTrends, userEngagementChartType, userEngagementConfig)}
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Extra Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard icon={Heart} title="Likes per Post" subtitle="Average engagement" value="156.3" change="+15.2%" color="bg-red-200" />
        <MetricCard icon={Share} title="Shares per Post" subtitle="Viral content rate" value="42.7" change="+23.4%" color="bg-blue-200" />
        <MetricCard icon={MessageCircle} title="Comments per Post" subtitle="Discussion engagement" value="89.1" change="+9.8%" color="bg-green-200" />
        <MetricCard icon={Eye} title="View Duration" subtitle="Content completion" value="78.5%" change="+4.2%" color="bg-purple-200" />
      </div>
    </div>
  );
};

export default UserEngagement;