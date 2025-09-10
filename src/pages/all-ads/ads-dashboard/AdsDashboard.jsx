// AdsDashboard.jsx
import React from 'react';
import { Share2, FileText } from 'lucide-react';

// Components
import KpiCards from './components/KpiCards';
import ImpressionsChart from './components/ImpressionsChart';
import UsersCampaignsTable from './components/UsersCampaignsTable';
import PaymentHistoryTable from './components/PaymentHistoryTable';
import exportSvg from '/export-bold-svgrepo-com.svg';
import publishSvg from '/noun-desktop-publish-4304185.svg';
import AdsSvg from '/Ads.svg';

// Data
import { kpiCards, campaignData, userCampaigns, paymentHistory, chartData } from './dashboardData';

const AdsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-lg">
          <h2 className="text-base font-semibold text-gray-800">Dashboard</h2>
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center space-x-1 border px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <img src={exportSvg} className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex items-center space-x-1 border px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <img src={publishSvg} className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">Publish Report</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <KpiCards kpiCards={kpiCards} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Impressions Chart */}
          <ImpressionsChart chartData={chartData} campaignData={campaignData} />

          {/* Campaign Status */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <img src={AdsSvg} alt={AdsSvg} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Campaigns Status</h3>
                <p className="text-sm text-gray-600">• 4 Active • 2 Pending</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border border-gray-200 rounded p-1.5">
                <span className="text-black font-semibold  ">Active campaigns</span>
                <span className="font-semibold">15,200</span>
              </div>
              <div className="flex justify-between items-center border border-gray-200 rounded p-1.5">
                <span className="text-black font-semibold">Pending campaigns</span>
                <span className="font-semibold">780</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Last 7 days</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Spent</span>
                  <span className="font-semibold">₹ 950,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Percent spent in learning phase</span>
                  <span className="font-semibold">0%</span>
                </div>
              </div>
            </div>
          </div>

            <div className="mt-6 border border-gray-200 bg-white shadow rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Pending Campaign</h4>
              <p className="text-sm text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">88% completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua. Ut
                enim ad minim veniam, quis
              </p>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  View All
                </button>
                <button className="px-4 py-2 text-blue-600 text-sm hover:bg-blue-50 rounded-lg">Learn more</button>
              </div>
            </div>
          </div>
        </div>

        {/* Users Campaigns Table */}
        <UsersCampaignsTable userCampaigns={userCampaigns} />

        {/* Payment History */}
        <PaymentHistoryTable paymentHistory={paymentHistory} />
      </div>
    </div>
  );
};

export default AdsDashboard;