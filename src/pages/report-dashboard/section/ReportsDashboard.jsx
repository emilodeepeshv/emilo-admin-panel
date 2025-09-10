import React from "react";
import { categoryWise, topicWise, reportsStatus, monthlyReports, topTopics } from "../../../utils/ReportDashboardFake";

import TopStats from "./components/TopStats";
import ReportsAnalysis from "./components/ReportsAnalysis";
import TopicWise from "./components/TopicWise";
import ReportsStatus from "./components/ReportsStatus";
import MonthlyReportsSection from "./components/MonthlyReportsSection";
import TopTopics from "./components/TopTopics";

// Custom icon component for local SVGs
const LocalIcon = ({ src, alt = "icon", className = "w-4 h-4" }) => (
  <img src={src} alt={alt} className={className} />
);

const reportsTop = [
  { 
    label: "Posts", 
    value: 3800, 
    icon: () => <LocalIcon src="/public/FileText.svg" alt="Posts" className="w-4 h-4" />, 
    color: "bg-orange-100", 
    iconColor: "text-orange-600" 
  },
  { 
    label: "Comments", 
    value: 9830, 
    icon: () => <LocalIcon src="/public/Share2.svg" alt="Comments" className="w-4 h-4" />, 
    color: "bg-green-100", 
    iconColor: "text-green-600" 
  },
  { 
    label: "Profiles", 
    value: 756, 
    icon: () => <LocalIcon src="/public/Admin Users.svg" alt="Profiles" className="w-4 h-4" />, 
    color: "bg-blue-100", 
    iconColor: "text-blue-600" 
  },
  { 
    label: "Messages", 
    value: 5600, 
    icon: () => <LocalIcon src="/public/menu (14).svg" alt="Messages" className="w-4 h-4" />, 
    color: "bg-purple-100", 
    iconColor: "text-purple-600" 
  },
  { 
    label: "Flag", 
    value: 139, 
    icon: () => <LocalIcon src="/public/Suspicious Activity.svg" alt="Flag" className="w-4 h-4" />, 
    color: "bg-red-100", 
    iconColor: "text-red-600" 
  },
];

export const Reports = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-lg">
          <h2 className="text-base font-semibold text-gray-800">Dashboard</h2>
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center space-x-1 border px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <LocalIcon src="/public/export-bold-svgrepo-com.svg" alt="Export" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex items-center space-x-1 border px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <LocalIcon src="/public/noun-desktop-publish-4304185.svg" alt="Publish Report" />
              <span className="hidden sm:inline">Publish Report</span>
            </button>
          </div>
        </div>

        {/* Top Stats */}
        <TopStats stats={reportsTop} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ReportsAnalysis categoryData={categoryWise} topicData={topicWise} />
        <TopTopics data={topTopics} />
          </div>
          <div className="space-y-6">
            <ReportsStatus data={reportsStatus} />
            <MonthlyReportsSection data={monthlyReports} />
          </div>
        </div>

        {/* Top Topics */}
      </div>
    </div>
  );
};

export default Reports;