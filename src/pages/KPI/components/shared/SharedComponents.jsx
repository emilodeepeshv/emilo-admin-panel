import { TrendingUp } from 'lucide-react';

// Reusable StatCard Component
export const StatCard = ({ title, value, percentage, icon: IconComponent, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
          {percentage && (
            <div className="flex items-center gap-1">
              {trend === 'up' && <TrendingUp size={16} className="text-green-500" />}
              {trend === 'down' && <TrendingUp size={16} className="text-red-500 rotate-180" />}
              <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                {percentage}
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <IconComponent size={24} />
        </div>
      </div>
    </div>
  );
};

// Reusable ChartContainer Component
export const ChartContainer = ({ title, children, actions }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
    {children}
  </div>
);

// Placeholder Dashboard Section Component
export const PlaceholderSection = ({ icon: IconComponent, title, description, buttonText }) => (
  <div className="text-center py-12">
    <div className="max-w-md mx-auto">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent size={32} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">
        {description}
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
        {buttonText}
      </button>
    </div>
  </div>
);