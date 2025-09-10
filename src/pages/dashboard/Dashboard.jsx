import React from "react";

import UsersSection from "./components/UsersSection";
import AdsSection from "./components/AdsSection";
import ContentsSection from "./components/ContentsSection";
import PendingTasks from "./components/PendingTasks";
import TransactionSection from "./components/TransactionSection";
import ReportsSection from "./components/ReportsSection";

export const Dashboard = () => {
  // Icon component for consistent styling
  const Icon = ({ src, alt, size = 16 }) => (
    <img 
      src={src} 
      alt={alt} 
      className="object-contain"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );

  return (
    <div className="space-y-6 bg-gray-50 p-4 sm:p-6">
      {/* Header */}
      <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-lg">
        <h2 className="text-base font-semibold text-gray-800">Dashboard</h2>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <Icon src="/export-bold-svgrepo-com.svg" alt="Export" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <Icon src="/noun-desktop-publish-4304185.svg" alt="Publish Report" />
            <span className="hidden sm:inline">Publish Report</span>
          </button>
        </div>
      </div>

      {/* Sections */}
      <UsersSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdsSection />
        <ContentsSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingTasks />
        <TransactionSection />
      </div>

      <ReportsSection />
    </div>
  );
};

export default Dashboard;