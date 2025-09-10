import { useState } from 'react';
import { User, MessageSquare, MessageCircle, CreditCard, HelpCircle, BarChart3, Download, FileText } from 'lucide-react';
import FilterBar from './components/FilterBar';
import UserAnalytics from './components/user-growth/UserAnalytics';
import UserEngagement from './components/user-engagement/UserEngagement';
import ContentPerformance from './components/content-performance/ContentPerformance';
import RevenueAnalytics from './components/revenue-analysis/RevenueAnalytics';
import SystemPerformance from './components/system-performance/SystemPerformance';
import BusinessIntelligence from './components/business-analysis/BusinessIntelligence';
import exportSvg from '/export-bold-svgrepo-com.svg';

const KPI = () => {
  const [activeToggle, setActiveToggle] = useState('user');
  const [dateFilter, setDateFilter] = useState('30d');
  const [userTypeFilter, setUserTypeFilter] = useState('all');
  const [chartView, setChartView] = useState('line');

  const toggleOptions = [
    { key: 'user', name: 'User Growth', icon: User, isLucide: true },
    { key: 'engagement', name: 'User Engagement', icon: MessageSquare, isLucide: true },
    { key: 'content', name: 'Content Performance', icon: MessageCircle, isLucide: true },
    { key: 'monetization', name: 'Monetization', icon: CreditCard, isLucide: true },
    { key: 'technical', name: 'Technical', icon: HelpCircle, isLucide: true },
    { key: 'business', name: 'Business Intelligence', icon: BarChart3, isLucide: true }
  ];

  const handleToggle = (key) => {
    setActiveToggle(prev => prev === key ? null : key);
  };

  const renderActiveSection = () => {
    switch (activeToggle) {
      case 'user':
        return <UserAnalytics dateFilter={dateFilter} userTypeFilter={userTypeFilter} chartView={chartView} />;
      case 'engagement':
        return <UserEngagement />;
      case 'content':
        return <ContentPerformance />;
      case 'monetization':
        return <RevenueAnalytics />;
      case 'technical':
        return <SystemPerformance />;
      case 'business':
        return <BusinessIntelligence />;
      default:
        return (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={32} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a KPI Section</h3>
              <p className="text-gray-500 text-sm">
                Choose from the categories above to view detailed analytics and performance metrics.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Header */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Key Performance Indicators</h1>
            <p className="text-sm text-gray-500 mt-1">Monitor and analyze your platform's performance metrics</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors font-medium">
              
              <img src={exportSvg} alt={exportSvg} className='w-4 h-5'/>
              <span>Export Data</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg text-sm text-white hover:bg-blue-600 transition-colors font-medium">
              <FileText size={16} />
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {toggleOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleToggle(option.key)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl shadow border border-gray-200 transition-all duration-300 hover:shadow-md ${
                activeToggle === option.key
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className={`${activeToggle === option.key ? 'text-white' : 'text-blue-500'} transition-colors duration-300`}>
                <option.icon size={28} />
              </div>
              <span className="text-xs font-semibold text-center leading-tight mt-2">
                {option.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters - Only show for User Analytics */}
      {activeToggle === 'user' && (
        <FilterBar 
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          userTypeFilter={userTypeFilter}
          setUserTypeFilter={setUserTypeFilter}
          chartView={chartView}
          setChartView={setChartView}
        />
      )}

      {/* Active Section Content */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-100">
        {activeToggle ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="text-blue-500">
                  {(() => {
                    const option = toggleOptions.find(opt => opt.key === activeToggle);
                    return <option.icon size={32} />;
                  })()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {toggleOptions.find(opt => opt.key === activeToggle)?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {activeToggle === 'user' && `${dateFilter.toUpperCase()} | ${userTypeFilter === 'all' ? 'All Users' : userTypeFilter.charAt(0).toUpperCase() + userTypeFilter.slice(1) + ' Users'} | ${chartView.charAt(0).toUpperCase() + chartView.slice(1)} View`}
                    {activeToggle !== 'user' && 'Comprehensive analytics and insights'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveToggle(null)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
            {renderActiveSection()}
          </div>
        ) : (
          <div className="p-6">
            {renderActiveSection()}
          </div>
        )}
      </div>
    </div>
  );
};

export default KPI;