import React from 'react';
import { TrendingUp } from 'lucide-react';

// Shared ChartContainer component
const ChartContainer = ({ title, actions, children }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {actions}
      </div>
      {children}
    </div>
  );
};

// Updated data without Email Verification
const signupPhaseData = [
  { phase: 'Profile Photo', users: 9870, percentage: 100.0 }, // Starting point
  { phase: 'Bio & Interests', users: 8230, percentage: 83.4 },
  { phase: 'Complete Profile', users: 6540, percentage: 66.3 },
];

const ProfileCompletionFunnelChart = () => {
  return (
    <ChartContainer 
      title="User Profile Completion"
      actions={
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs bg-blue-100 text-blue-700 rounded-lg font-medium">Monthly</button>
          <button className="px-3 py-1.5 text-xs bg-gray-100 text-gray-600 rounded-lg">Weekly</button>
        </div>
      }
    >
      <div className="space-y-4">
        {signupPhaseData.map((item, index) => (
          <div key={item.phase} className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{item.phase}</span>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{item.users.toLocaleString()}</span>
                <span className="text-xs text-gray-500 ml-2">({item.percentage}%)</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            {index < signupPhaseData.length - 1 && (
              <div className="flex items-center justify-center mt-2">
                <TrendingUp size={16} className="text-gray-400 rotate-180" />
                <span className="text-xs text-red-500 ml-1">
                  -{(signupPhaseData[index].percentage - signupPhaseData[index + 1].percentage).toFixed(1)}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </ChartContainer>
  );
};

export default ProfileCompletionFunnelChart;