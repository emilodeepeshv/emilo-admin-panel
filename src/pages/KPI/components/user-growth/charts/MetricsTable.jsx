import { TrendingUp } from 'lucide-react';

const MetricsTable = ({ dateFilter, userTypeFilter }) => {
  const getFilteredValues = (base, multiplier) => {
    const dateMultipliers = { '7d': 0.8, '30d': 1.0, '90d': 1.2, '1y': 1.5 };
    const userMultipliers = { 'all': 1.0, 'new': 0.7, 'returning': 0.9, 'premium': 1.3 };
    
    const dateMult = dateMultipliers[dateFilter] || 1.0;
    const userMult = userMultipliers[userTypeFilter] || 1.0;
    
    return Math.round(base * dateMult * userMult * multiplier);
  };

  const tableData = [
    { metric: 'Daily Active Users', today: getFilteredValues(27430, 1).toLocaleString(), yesterday: getFilteredValues(26180, 1).toLocaleString(), change: '+4.8%', avg30d: getFilteredValues(25890, 1).toLocaleString(), trend: 'up' },
    { metric: 'New Signups', today: getFilteredValues(164, 1), yesterday: getFilteredValues(133, 1), change: '+23.1%', avg30d: getFilteredValues(147, 1), trend: 'up' },
    { metric: 'Churn Rate', today: '2.1%', yesterday: '2.3%', change: '-0.2%', avg30d: '2.4%', trend: 'up' },
    { metric: 'Retention Rate (30d)', today: '45.8%', yesterday: '44.9%', change: '+0.9%', avg30d: '44.2%', trend: 'up' },
    { metric: 'Avg Session Duration', today: '8m 42s', yesterday: '8m 15s', change: '+5.5%', avg30d: '8m 28s', trend: 'up' },
    { metric: 'Page Views per Session', today: '12.3', yesterday: '11.8', change: '+4.2%', avg30d: '11.9', trend: 'up' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900">
          Detailed User Metrics - {dateFilter.toUpperCase()} | {userTypeFilter === 'all' ? 'All Users' : userTypeFilter.charAt(0).toUpperCase() + userTypeFilter.slice(1) + ' Users'}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Metric</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Today</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Yesterday</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">30d Avg</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.metric}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{row.today}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.yesterday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-1">
                    {row.change.startsWith('+') ? (
                      <TrendingUp size={14} className="text-green-500" />
                    ) : (
                      <TrendingUp size={14} className="text-red-500 rotate-180" />
                    )}
                    <span className={row.change.startsWith('+') ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                      {row.change}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.avg30d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetricsTable;