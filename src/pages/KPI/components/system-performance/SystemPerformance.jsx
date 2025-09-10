import React from 'react';
import { Activity, Clock, Server, Zap, Database, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

const SystemPerformance = () => {
  // Sample data for charts
  const responseTimeData = [
    { time: '00:00', value: 120 },
    { time: '04:00', value: 110 },
    { time: '08:00', value: 150 },
    { time: '12:00', value: 130 },
    { time: '16:00', value: 140 },
    { time: '20:00', value: 125 },
    { time: '23:59', value: 115 }
  ];

  const uptimeData = [
    { day: 'Mon', uptime: 99.98 },
    { day: 'Tue', uptime: 99.95 },
    { day: 'Wed', uptime: 100 },
    { day: 'Thu', uptime: 99.92 },
    { day: 'Fri', uptime: 99.97 },
    { day: 'Sat', uptime: 99.99 },
    { day: 'Sun', uptime: 99.96 }
  ];

  const crashRateData = [
    { time: 'Week 1', crashes: 0.8, sessions: 10000 },
    { time: 'Week 2', crashes: 1.2, sessions: 12000 },
    { time: 'Week 3', crashes: 0.9, sessions: 11500 },
    { time: 'Week 4', crashes: 1.4, sessions: 13000 }
  ];

  const latencyData = [
    { region: 'US-East', latency: 45 },
    { region: 'US-West', latency: 52 },
    { region: 'EU', latency: 38 },
    { region: 'Asia', latency: 65 },
    { region: 'AU', latency: 78 }
  ];

  const MetricCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        
        
      </div>
      <div className=" items-end justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className='flex justify-between'>
          <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        </div>
        <div className={`flex items-center text-sm font-medium ${
          changeType === 'positive' ? 'text-green-600' : 
          changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
        }`}>
          {changeType === 'positive' && <TrendingUp className="w-3 h-3 mr-1" />}
          {changeType === 'negative' && <TrendingDown className="w-3 h-3 mr-1" />}
          {change}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6  min-h-screen">
      

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <MetricCard
          title="App Crash Rate"
          value="1.2%"
          change="+0.3%"
          changeType="negative"
          icon={Activity}
          color="bg-red-200"
        />
        <MetricCard
          title="API Response Time"
          value="125ms"
          change="-15ms"
          changeType="positive"
          icon={Clock}
          color="bg-blue-200"
        />
        <MetricCard
          title="Server Uptime"
          value="99.95%"
          change="-0.02%"
          changeType="negative"
          icon={Server}
          color="bg-green-200"
        />
        <MetricCard
          title="CDN Latency"
          value="52ms"
          change="+3ms"
          changeType="negative"
          icon={Zap}
          color="bg-yellow-200"
        />
        <MetricCard
          title="Dedup Efficiency"
          value="94.8%"
          change="+2.1%"
          changeType="positive"
          icon={Database}
          color="bg-purple-200"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Response Time Trends */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">API Response Time</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Response Time (ms)</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseTimeData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  domain={['dataMin - 10', 'dataMax + 10']}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Server Uptime */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Server Uptime</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Uptime %</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={uptimeData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  domain={[99.8, 100.05]}
                />
                <Area 
                  type="monotone" 
                  dataKey="uptime" 
                  stroke="#10B981" 
                  fill="url(#uptimeGradient)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Crash Rate Analysis */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">App Crash Analysis</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Crash Rate %</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={crashRateData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  domain={[0, 2]}
                />
                <Line 
                  type="monotone" 
                  dataKey="crashes" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm text-red-700">
                Target: &lt;1.5% crash rate
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* CDN Latency by Region */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">CDN Latency by Region</h3>
          <div className="space-y-3">
            {latencyData.map((region, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{region.region}</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${(region.latency / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{region.latency}ms</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health Summary */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-green-900">Database Performance</span>
              </div>
              <span className="text-sm font-semibold text-green-700">Optimal</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-yellow-900">Memory Usage</span>
              </div>
              <span className="text-sm font-semibold text-yellow-700">High (78%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-red-900">Error Rate</span>
              </div>
              <span className="text-sm font-semibold text-red-700">Above Target</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-blue-900">Cache Hit Rate</span>
              </div>
              <span className="text-sm font-semibold text-blue-700">96.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemPerformance;