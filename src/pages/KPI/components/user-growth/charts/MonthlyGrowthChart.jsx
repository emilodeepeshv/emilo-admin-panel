import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../../shared/SharedComponents';

const MonthlyGrowthChart = ({ chartView, data }) => {
  const renderChart = () => {
    const commonProps = {
      data: data.monthlySignupsData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartView) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            <Legend />
            <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} name="New Users" />
            <Area type="monotone" dataKey="churnUsers" stackId="2" stroke="#EF4444" fill="#EF4444" fillOpacity={0.8} name="Churned Users" />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="newUsers" fill="#10B981" radius={[4, 4, 0, 0]} name="New Users" />
            <Bar dataKey="churnUsers" fill="#EF4444" radius={[4, 4, 0, 0]} name="Churned Users" />
            <Bar dataKey="netGrowth" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Net Growth" />
          </BarChart>
        );
      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            <Legend />
            <Line type="monotone" dataKey="newUsers" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} name="New Users" />
            <Line type="monotone" dataKey="churnUsers" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', r: 5 }} name="Churned Users" />
            <Line type="monotone" dataKey="netGrowth" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 5 }} name="Net Growth" />
          </LineChart>
        );
    }
  };

  return (
    <ChartContainer 
      title="Monthly User Growth"
      actions={
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">New Users</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Churn</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Net Growth</span>
          </div>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={350}>
        {renderChart()}
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default MonthlyGrowthChart;