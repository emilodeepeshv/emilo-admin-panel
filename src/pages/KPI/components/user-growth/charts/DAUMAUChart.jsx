import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../../shared/SharedComponents';

const DAUMAUChart = ({ chartView, data }) => {
  const renderChart = () => {
    const commonProps = {
      data: data.dauMauData,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartView) {
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis 
              yAxisId="left"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value, name) => {
                if (name === 'Ratio %') {
                  return [`${value}%`, name];
                }
                return [value.toLocaleString(), name];
              }}
            />
            <Legend />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="mau" 
              stackId="1" 
              stroke="#10B981" 
              fill="#10B981" 
              fillOpacity={0.6} 
              name="MAU" 
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="dau" 
              stackId="1" 
              stroke="#3B82F6" 
              fill="#3B82F6" 
              fillOpacity={0.8} 
              name="DAU" 
            />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="ratio" 
              stroke="#8B5CF6" 
              fill="#8B5CF6" 
              fillOpacity={0.4} 
              name="Ratio %" 
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis 
              yAxisId="left"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'Ratio %') {
                  return [`${value}%`, name];
                }
                return [value.toLocaleString(), name];
              }}
            />
            <Legend />
            <Bar 
              yAxisId="left"
              dataKey="dau" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]} 
              name="DAU" 
            />
            <Bar 
              yAxisId="left"
              dataKey="mau" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]} 
              name="MAU" 
            />
            <Bar 
              yAxisId="right"
              dataKey="ratio" 
              fill="#8B5CF6" 
              radius={[4, 4, 0, 0]} 
              name="Ratio %" 
            />
          </BarChart>
        );
      default:
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis 
              yAxisId="left"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#6b7280" 
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              formatter={(value, name) => {
                if (name === 'Ratio %') {
                  return [`${value}%`, name];
                }
                return [value.toLocaleString(), name];
              }}
            />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="dau" 
              stroke="#3B82F6" 
              strokeWidth={3} 
              dot={{ fill: '#3B82F6', r: 4 }} 
              name="DAU" 
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="mau" 
              stroke="#10B981" 
              strokeWidth={3} 
              dot={{ fill: '#10B981', r: 4 }} 
              name="MAU" 
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="ratio" 
              stroke="#8B5CF6" 
              strokeWidth={3} 
              dot={{ fill: '#8B5CF6', r: 4 }} 
              name="Ratio %" 
            />
          </LineChart>
        );
    }
  };

  return (
    <ChartContainer 
      title="DAU/MAU Trends"
      actions={
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-600">DAU</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">MAU</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Ratio</span>
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

export default DAUMAUChart;