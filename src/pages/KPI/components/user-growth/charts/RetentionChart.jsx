import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../../shared/SharedComponents';
import { churnRetentionData } from '../../../utils/dataUtils';

// Sample retention data matching the image format
const retentionData = [
  { period: 'D0', retention: 100 },
  { period: 'D1', retention: 40 },
  { period: 'D7', retention: 25 },
  { period: 'D30', retention: 12 }
];

// Retention Chart Component - Modified to match image
const RetentionChart = ({ chartView }) => {
  const renderChart = () => {
    const commonProps = {
      data: retentionData,
      margin: { top: 20, right: 30, left: 20, bottom: 20 }
    };

    switch (chartView) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="period" 
              stroke="#6b7280" 
              fontSize={12} 
              axisLine={true}
              tickLine={true}
            />
            <YAxis 
              stroke="#6b7280" 
              fontSize={12} 
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              axisLine={true}
              tickLine={true}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Retention']} />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="retention" 
              stroke="#F59E0B" 
              fill="#F59E0B" 
              fillOpacity={0.6} 
              strokeWidth={2}
              name="Retention %" 
              dot={{ fill: '#F59E0B', r: 4, strokeWidth: 2, stroke: '#F59E0B' }}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="period" 
              stroke="#6b7280" 
              fontSize={12} 
              axisLine={true}
              tickLine={true}
            />
            <YAxis 
              stroke="#6b7280" 
              fontSize={12} 
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              axisLine={true}
              tickLine={true}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Retention']} />
            <Legend />
            <Bar 
              dataKey="retention" 
              fill="#F59E0B" 
              radius={[4, 4, 0, 0]} 
              name="Retention %" 
            />
          </BarChart>
        );
      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="period" 
              stroke="#6b7280" 
              fontSize={12} 
              axisLine={true}
              tickLine={true}
            />
            <YAxis 
              stroke="#6b7280" 
              fontSize={12} 
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              axisLine={true}
              tickLine={true}
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Retention']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="retention" 
              stroke="#F59E0B" 
              strokeWidth={3} 
              dot={{ fill: '#F59E0B', r: 5, strokeWidth: 2, stroke: '#F59E0B' }} 
              name="Retention %" 
            />
          </LineChart>
        );
    }
  };

  return (
    <ChartContainer
      title="User Retention Rate"
      actions={
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Retention</span>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={350}>
        {renderChart()}
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// Churn Chart Component - No changes
const ChurnChart = ({ chartView }) => {
  const renderChart = () => {
    const commonProps = {
      data: churnRetentionData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartView) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="period" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip formatter={(value) => [`${value}%`, '']} />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="churn" 
              stroke="#EF4444" 
              fill="#EF4444" 
              fillOpacity={0.6} 
              name="Churn %" 
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="period" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="churn" 
              fill="#EF4444" 
              radius={[4, 4, 0, 0]} 
              name="Churn %" 
            />
          </BarChart>
        );
      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="period" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} />
            <Tooltip formatter={(value) => [`${value}%`, '']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="churn" 
              stroke="#EF4444" 
              strokeWidth={3} 
              dot={{ fill: '#EF4444', r: 5 }} 
              name="Churn %" 
            />
          </LineChart>
        );
    }
  };

  return (
    <ChartContainer
      title="User Churn Rate"
      actions={
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Churn</span>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={350}>
        {renderChart()}
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// Export both components
export { RetentionChart, ChurnChart };

// If you want to use them together in a parent component:
const RetentionChurnDashboard = ({ chartView = 'line' }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RetentionChart chartView={chartView} />
      <ChurnChart chartView={chartView} />
    </div>
  );
};

export default RetentionChurnDashboard;