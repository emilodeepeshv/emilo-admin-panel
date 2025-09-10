import { Users, User, BarChart3, UserPlus, UserMinus, RotateCcw, TrendingUp } from 'lucide-react';
import { StatCard } from '../shared/SharedComponents';
import { generateSampleData, getKPIValue } from '../../utils/dataUtils';
import DAUMAUChart from './charts/DAUMAUChart';
import MonthlyGrowthChart from './charts/MonthlyGrowthChart';
import SignupFunnelChart from './charts/SignupFunnelChart';
import RetentionChart from './charts/RetentionChart';
import MetricsTable from './MetricsTable';

const UserAnalytics = ({ dateFilter, userTypeFilter, chartView }) => {
  const data = generateSampleData(dateFilter, userTypeFilter);
  
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Daily Active Users" 
          value={getKPIValue(27430, dateFilter, userTypeFilter).toLocaleString()} 
          percentage="+12.5%" 
          trend="up"
          icon={Users} 
          color="blue"
        />
        <StatCard 
          title="Monthly Active Users" 
          value={getKPIValue(78950, dateFilter, userTypeFilter).toLocaleString()} 
          percentage="+8.3%" 
          trend="up"
          icon={User} 
          color="green"
        />
        <StatCard 
          title="DAU/MAU Ratio" 
          value="34.7%" 
          percentage="-0.8%" 
          trend="down"
          icon={BarChart3} 
          color="yellow"
        />
        <StatCard 
          title="New Signups" 
          value={getKPIValue(164, dateFilter, userTypeFilter).toString()} 
          percentage="+23.1%" 
          trend="up"
          icon={UserPlus} 
          color="purple"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DAUMAUChart chartView={chartView} data={data} />
        <RetentionChart chartView={chartView} />
        
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <MonthlyGrowthChart chartView={chartView} data={data} />
        <SignupFunnelChart />
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Churn Rate" 
          value="12.3%" 
          percentage="-2.1%" 
          trend="up"
          icon={UserMinus} 
          color="red"
        />
        
        <StatCard 
          title="User Conversion Rate" 
          value="40.3%" 
          percentage="+3.7%" 
          trend="up"
          icon={TrendingUp} 
          color="green"
        />
        <StatCard 
          title="Inactive Users" 
          value={getKPIValue(5892, dateFilter, userTypeFilter).toLocaleString()} 
          percentage="+8.9%" 
          trend="down"
          icon={UserMinus} 
          color="orange"
        />
      </div>

      {/* Detailed Table */}
      <MetricsTable dateFilter={dateFilter} userTypeFilter={userTypeFilter} />
    </div>
  );
};

export default UserAnalytics;