import React, { useState } from 'react';
import { CreditCard, DollarSign, Eye, MousePointer, ShoppingCart, Users, TrendingUp, TrendingDown, BarChart3, LineChart as LineChartIcon, Activity, X } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [chartTypes, setChartTypes] = useState({
    arpu: 'line',
    adPerformance: 'area',
    revenueBreakdown: 'pie',
    revenueVsPayouts: 'bar',
    impressions: 'line',
    ctrCpm: 'area'
  });

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', arpu: 7.2, inApp: 12500, adRevenue: 8900, creatorPayout: 3400 },
    { month: 'Feb', arpu: 7.8, inApp: 15200, adRevenue: 9600, creatorPayout: 4100 },
    { month: 'Mar', arpu: 8.1, inApp: 18900, adRevenue: 11200, creatorPayout: 4800 },
    { month: 'Apr', arpu: 8.5, inApp: 21400, adRevenue: 12800, creatorPayout: 5500 },
    { month: 'May', arpu: 8.3, inApp: 19800, adRevenue: 13500, creatorPayout: 5200 },
    { month: 'Jun', arpu: 8.7, inApp: 23100, adRevenue: 14200, creatorPayout: 6100 }
  ];

  const adMetrics = [
    { date: '1', impressions: 125000, ctr: 2.4, cpm: 3.2 },
    { date: '7', impressions: 142000, ctr: 2.7, cpm: 3.5 },
    { date: '14', impressions: 138000, ctr: 2.5, cpm: 3.3 },
    { date: '21', impressions: 156000, ctr: 2.9, cpm: 3.8 },
    { date: '28', impressions: 161000, ctr: 3.1, cpm: 4.0 }
  ];

  const revenueBreakdown = [
    { name: 'In-App Purchases', value: 45, amount: 98500 },
    { name: 'Ad Revenue', value: 32, amount: 70200 },
    { name: 'Subscriptions', value: 18, amount: 39400 },
    { name: 'Other', value: 5, amount: 10900 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  const ChartTypeSelector = ({ chartId, currentType, onTypeChange }) => {
    const types = chartId === 'revenueBreakdown' 
      ? [{ type: 'pie', icon: Activity, label: 'Pie' }]
      : [
          { type: 'line', icon: LineChartIcon, label: 'Line' },
          { type: 'bar', icon: BarChart3, label: 'Bar' },
          { type: 'area', icon: Activity, label: 'Area' }
        ];

    return (
      <div className="flex space-x-1">
        {types.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => onTypeChange(chartId, type)}
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              currentType === type
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={`${label} View`}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    );
  };

  const StatCard = ({ title, value, change, icon: Icon, color = "blue" }) => {
    const isPositive = change > 0;
    const colorClasses = {
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      purple: 'bg-purple-50',
      orange: 'bg-orange-50',
      indigo: 'bg-indigo-50'
    };

    const iconColorClasses = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      indigo: 'text-indigo-600'
    };

    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <div className='flex justify-between'><p className="text-3xl font-bold text-gray-900">{value}</p>
          <div className={`p-3 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${iconColorClasses[color]}`} />
          </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className={`w-3 h-3 mr-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
            
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderChart = (chartId, data, config) => {
    const type = chartTypes[chartId];
    
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey={config.xKey} 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            {config.rightYAxis && (
              <YAxis 
                yAxisId="right" 
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
            )}
            <Tooltip 
              formatter={config.tooltipFormatter}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.legend && <Legend />}
            {config.lines.map((line, index) => (
              <Line
                key={line.key}
                yAxisId={line.yAxisId || "left"}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={2}
                dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: line.color, strokeWidth: 2 }}
                name={line.name}
              />
            ))}
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey={config.xKey}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <Tooltip 
              formatter={config.tooltipFormatter}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.legend && <Legend />}
            {config.bars ? config.bars.map((bar, index) => (
              <Bar key={bar.key} dataKey={bar.key} fill={bar.color} name={bar.name} radius={[2, 2, 0, 0]} />
            )) : config.lines.map((line, index) => (
              <Bar key={line.key} dataKey={line.key} fill={line.color} name={line.name} radius={[2, 2, 0, 0]} />
            ))}
          </BarChart>
        );
      
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey={config.xKey}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            {config.rightYAxis && (
              <YAxis 
                yAxisId="right" 
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
            )}
            <Tooltip 
              formatter={config.tooltipFormatter}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            {config.legend && <Legend />}
            {config.areas ? config.areas.map((area, index) => (
              <Area
                key={area.key}
                yAxisId={area.yAxisId || "left"}
                type="monotone"
                dataKey={area.key}
                stackId={area.stackId}
                stroke={area.color}
                fill={area.color}
                fillOpacity={area.opacity || 0.6}
                name={area.name}
              />
            )) : config.lines.map((line, index) => (
              <Area
                key={line.key}
                yAxisId={line.yAxisId || "left"}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                fill={line.color}
                fillOpacity={0.6}
                name={line.name}
              />
            ))}
          </AreaChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
          </PieChart>
        );
      
      default:
        return null;
    }
  };

  const handleChartTypeChange = (chartId, newType) => {
    setChartTypes(prev => ({
      ...prev,
      [chartId]: newType
    }));
  };

  return (
    <div className="p-6  min-h-screen">
      {/* Header */}
      

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="ARPU (Monthly)"
          value="$8.50"
          change={5.2}
          icon={DollarSign}
          color="blue"
        />
        <StatCard
          title="Ad Impressions"
          value="2.1M"
          change={8.7}
          icon={Eye}
          color="green"
        />
        <StatCard
          title="CTR"
          value="2.8%"
          change={12.4}
          icon={MousePointer}
          color="purple"
        />
        <StatCard
          title="CPM"
          value="$3.65"
          change={-2.1}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* ARPU Trends */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">ARPU Trends</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">ARPU</span>
                </div>
              </div>
            </div>
            <ChartTypeSelector
              chartId="arpu"
              currentType={chartTypes.arpu}
              onTypeChange={handleChartTypeChange}
            />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            {renderChart('arpu', revenueData, {
              xKey: 'month',
              tooltipFormatter: (value) => [`$${value}`, 'ARPU'],
              lines: [{ key: 'arpu', color: '#3b82f6', name: 'ARPU' }]
            })}
          </ResponsiveContainer>
        </div>

        {/* Ad Performance */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Ad Performance</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">CTR</span>
                </div>
              </div>
            </div>
            <ChartTypeSelector
              chartId="ctrCpm"
              currentType={chartTypes.ctrCpm}
              onTypeChange={handleChartTypeChange}
            />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            {renderChart('ctrCpm', adMetrics, {
              xKey: 'date',
              tooltipFormatter: (value, name) => [
                name === 'CTR' ? `${value}%` : `$${value}`,
                name === 'CTR' ? 'Click-through Rate' : 'Cost Per Mille'
              ],
              lines: [
                { key: 'ctr', color: '#f59e0b', name: 'CTR' }
              ],
              areas: [
                { key: 'ctr', color: '#f59e0b', name: 'CTR', opacity: 0.6 }
              ]
            })}
          </ResponsiveContainer>
        </div>

        {/* Revenue vs Payouts */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Revenue vs Payouts</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Payouts</span>
                </div>
              </div>
            </div>
            <ChartTypeSelector
              chartId="revenueVsPayouts"
              currentType={chartTypes.revenueVsPayouts}
              onTypeChange={handleChartTypeChange}
            />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            {renderChart('revenueVsPayouts', revenueData, {
              xKey: 'month',
              tooltipFormatter: (value) => [`$${(value / 1000).toFixed(1)}K`, ''],
              bars: [
                { key: 'creatorPayout', color: '#ef4444', name: 'Creator Payouts' }
              ],
              lines: [
                { key: 'creatorPayout', color: '#ef4444', name: 'Creator Payouts' }
              ],
              areas: [
                { key: 'creatorPayout', color: '#ef4444', name: 'Creator Payouts', opacity: 0.6 }
              ]
            })}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Breakdown */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Revenue Breakdown</h3>
            <ChartTypeSelector
              chartId="revenueBreakdown"
              currentType={chartTypes.revenueBreakdown}
              onTypeChange={handleChartTypeChange}
            />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            {renderChart('revenueBreakdown', revenueBreakdown, {})}
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {revenueBreakdown.map((item, index) => (
              <div key={item.name} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">${(item.amount / 1000).toFixed(1)}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impressions Trend */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Ad Impressions</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Impressions</span>
                </div>
              </div>
            </div>
            <ChartTypeSelector
              chartId="impressions"
              currentType={chartTypes.impressions}
              onTypeChange={handleChartTypeChange}
            />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            {renderChart('impressions', adMetrics, {
              xKey: 'date',
              tooltipFormatter: (value) => [`${(value / 1000).toFixed(0)}K`, 'Impressions'],
              lines: [{ key: 'impressions', color: '#10b981', name: 'Impressions' }]
            })}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Total Revenue (This Month)</h4>
          <p className="text-2xl font-bold text-gray-900">$219,000</p>
          <p className="text-sm text-green-600 mt-1">+18.5% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Creator Payouts</h4>
          <p className="text-2xl font-bold text-gray-900">$61,200</p>
          <p className="text-sm text-gray-500 mt-1">28% of total revenue</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Net Revenue</h4>
          <p className="text-2xl font-bold text-gray-900">$157,800</p>
          <p className="text-sm text-gray-500 mt-1">After payouts & costs</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;