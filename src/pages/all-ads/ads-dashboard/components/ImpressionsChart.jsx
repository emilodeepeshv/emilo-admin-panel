// components/ImpressionsChart.jsx
import React, { useState } from 'react';
import { ListFilter, Settings, ChevronDown, Calendar } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const ImpressionsChart = ({ chartData, campaignData }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 Days');
  const [campaignToggles, setCampaignToggles] = useState({
    awareness: true,
    lead: true,
    engagement: true,
  });

  const toggleCampaign = (campaign) => {
    setCampaignToggles((prev) => ({
      ...prev,
      [campaign]: !prev[campaign],
    }));
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Impressions</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex flex-row gap-2 border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm bg-white">
            <div>
              <Calendar className=" mt-0.5 w-4.5 h-4.5 text-blue-500  pointer-events-none" />
            </div>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className=""
              >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            {/* <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" /> */}
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <ListFilter className="w-5 h-5" />
            
            Filters
          </button>
          <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded">
            <Settings className="w-5 h-5 " />
          </button>
        </div>
      </div>

      {/* Campaign Toggle Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {campaignData.map((campaign) => (
          <button
            key={campaign.key}
            onClick={() => toggleCampaign(campaign.key)}
            className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              campaignToggles[campaign.key]
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-gray-100 border-gray-200 text-gray-500'
            }`}
          >
            {campaign.name}
            <span
              className={`ml-2 px-2 py-1 rounded text-xs ${
                campaign.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {campaign.status}
            </span>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => `${value}k`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ImpressionsChart;