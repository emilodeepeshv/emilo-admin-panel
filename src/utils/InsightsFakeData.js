// Mock data
export const insightsCards = {
  reportsReceived: 28020,
  actionsTaken: 28010,
  pendingActions: 1240,
  breakdown: [
    { label: 'Blocked', value: '3,637' },
    { label: 'Muted', value: '1,637' },
    { label: 'Warnings', value: '2,452' },
    { label: 'Freezed', value: '2,452' }
  ]
};

export const cityData = [
  { city: 'Mumbai', count: 872 },
  { city: 'Delhi', count: 823 },
  { city: 'Pune', count: 822 },
  { city: 'Sikkim', count: 762 },
  { city: 'Hyderabad', count: 748 },
  { city: 'Raipur', count: 658 },
  { city: 'Assam', count: 634 },
  { city: 'Jammu', count: 559 },
  { city: 'Kashmir', count: 548 },
  { city: 'Sikkim', count: 762 },
  { city: 'Patna', count: 748 },
  { city: 'Chennai', count: 658 },
  { city: 'Indore', count: 634 }
];

export const transparencyData = [
  { category: 'Posts', received: 2034, taken: 1924 },
  { category: 'Comments', received: 3795, taken: 3796 },
  { category: 'Profiles', received: 1253, taken: 1003 },
  { category: 'Messages', received: 3289, taken: 3269 },
  { category: 'Events', received: 1504, taken: 1570 },
  { category: 'Ads', received: 2500, taken: 2500 },
  { category: 'Others', received: 1257, taken: 1257 }
];

export const actionsData = [
  {
    label: "Posts Removed",
    value: 1200,
    color: "#ef4444",
    trend: [
      { value: 100 },
      { value: 200 },
      { value: 150 },
      { value: 300 },
      { value: 250 },
    ],
  },
  {
    label: "Accounts Suspended",
    value: 850,
    color: "#3b82f6",
    trend: [
      { value: 80 },
      { value: 150 },
      { value: 200 },
      { value: 180 },
      { value: 240 },
    ],
  },
  {
    label: "Warnings Issued",
    value: 640,
    color: "#10b981",
    trend: [
      { value: 50 },
      { value: 120 },
      { value: 90 },
      { value: 200 },
      { value: 180 },
    ],
  },
  {
    label: "Profiles Flagged",
    value: 420,
    color: "#f59e0b",
    trend: [
      { value: 40 },
      { value: 80 },
      { value: 60 },
      { value: 100 },
      { value: 140 },
    ],
  },
];
