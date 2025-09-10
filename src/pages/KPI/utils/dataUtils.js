// Sample data generator with filters
export const generateSampleData = (dateFilter, userTypeFilter) => {
  const multipliers = {
    '7d': { dau: 0.8, mau: 0.7, users: 0.6 },
    '30d': { dau: 1.0, mau: 1.0, users: 1.0 },
    '90d': { dau: 1.2, mau: 1.3, users: 1.4 },
    '1y': { dau: 1.5, mau: 1.6, users: 1.8 }
  };
  
  const userMultipliers = {
    'all': 1.0,
    'new': 0.3,
    'returning': 0.6,
    'premium': 0.2
  };
  
  const mult = multipliers[dateFilter] || multipliers['30d'];
  const userMult = userMultipliers[userTypeFilter] || 1.0;
  
  return {
    dauMauData: [
      { date: '2024-01', dau: Math.round(15420 * mult.dau * userMult), mau: Math.round(45680 * mult.mau * userMult), ratio: 33.7 },
      { date: '2024-02', dau: Math.round(16230 * mult.dau * userMult), mau: Math.round(48920 * mult.mau * userMult), ratio: 33.2 },
      { date: '2024-03', dau: Math.round(17840 * mult.dau * userMult), mau: Math.round(52340 * mult.mau * userMult), ratio: 34.1 },
      { date: '2024-04', dau: Math.round(19650 * mult.dau * userMult), mau: Math.round(56780 * mult.mau * userMult), ratio: 34.6 },
      { date: '2024-05', dau: Math.round(21320 * mult.dau * userMult), mau: Math.round(61450 * mult.mau * userMult), ratio: 34.7 },
      { date: '2024-06', dau: Math.round(23890 * mult.dau * userMult), mau: Math.round(67230 * mult.mau * userMult), ratio: 35.5 },
      { date: '2024-07', dau: Math.round(25670 * mult.dau * userMult), mau: Math.round(72840 * mult.mau * userMult), ratio: 35.2 },
      { date: '2024-08', dau: Math.round(27430 * mult.dau * userMult), mau: Math.round(78950 * mult.mau * userMult), ratio: 34.7 }
    ],
    monthlySignupsData: [
      { month: 'Jan', newUsers: Math.round(2450 * mult.users * userMult), churnUsers: Math.round(380 * mult.users * userMult), netGrowth: Math.round(2070 * mult.users * userMult) },
      { month: 'Feb', newUsers: Math.round(2780 * mult.users * userMult), churnUsers: Math.round(420 * mult.users * userMult), netGrowth: Math.round(2360 * mult.users * userMult) },
      { month: 'Mar', newUsers: Math.round(3120 * mult.users * userMult), churnUsers: Math.round(460 * mult.users * userMult), netGrowth: Math.round(2660 * mult.users * userMult) },
      { month: 'Apr', newUsers: Math.round(3450 * mult.users * userMult), churnUsers: Math.round(520 * mult.users * userMult), netGrowth: Math.round(2930 * mult.users * userMult) },
      { month: 'May', newUsers: Math.round(3890 * mult.users * userMult), churnUsers: Math.round(580 * mult.users * userMult), netGrowth: Math.round(3310 * mult.users * userMult) },
      { month: 'Jun', newUsers: Math.round(4230 * mult.users * userMult), churnUsers: Math.round(640 * mult.users * userMult), netGrowth: Math.round(3590 * mult.users * userMult) },
      { month: 'Jul', newUsers: Math.round(4580 * mult.users * userMult), churnUsers: Math.round(710 * mult.users * userMult), netGrowth: Math.round(3870 * mult.users * userMult) },
      { month: 'Aug', newUsers: Math.round(4920 * mult.users * userMult), churnUsers: Math.round(780 * mult.users * userMult), netGrowth: Math.round(4140 * mult.users * userMult) }
    ]
  };
};

// Static data for signup funnel
export const signupPhaseData = [
  { phase: 'Email Verification', users: 12450, percentage: 85.2, dropOff: 14.8 },
  { phase: 'Profile Setup', users: 9870, percentage: 67.5, dropOff: 32.5 },
  { phase: 'Onboarding', users: 8230, percentage: 56.3, dropOff: 43.7 },
  { phase: 'First Action', users: 6540, percentage: 44.7, dropOff: 55.3 },
  { phase: 'Complete Setup', users: 5890, percentage: 40.3, dropOff: 59.7 }
];

// Static data for retention analysis
export const churnRetentionData = [
  { period: 'Day 1', retention: 78.5, churn: 21.5 },
  { period: 'Day 7', retention: 65.2, churn: 34.8 },
  { period: 'Day 30', retention: 45.8, churn: 54.2 },
  { period: 'Day 90', retention: 32.4, churn: 67.6 },
  { period: 'Day 180', retention: 28.1, churn: 71.9 },
  { period: 'Day 365', retention: 24.7, churn: 75.3 }
];

// Helper function for calculating KPI values with filters
export const getKPIValue = (base, dateFilter, userTypeFilter, multiplier = 1) => {
  const dateMultipliers = { '7d': 0.8, '30d': 1.0, '90d': 1.2, '1y': 1.5 };
  const userMultipliers = { 'all': 1.0, 'new': 0.3, 'returning': 0.6, 'premium': 0.2 };
  
  const dateMult = dateMultipliers[dateFilter] || 1.0;
  const userMult = userMultipliers[userTypeFilter] || 1.0;
  
  return Math.round(base * dateMult * userMult * multiplier);
};