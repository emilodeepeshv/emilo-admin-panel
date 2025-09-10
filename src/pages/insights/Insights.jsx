import React from "react";
import TopCard from "./components/TopCard";
import ActionsTakenCard from "./components/ActionsTakenCard";
import GeoInsights from "./components/GeoInsights";
import TransparencyReports from "./components/TransparencyReports";
import { insightsCards, transparencyData, cityData } from "../../utils/InsightsFakeData";

const InsightsDashboard = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-lg">
        <h2 className="text-base font-semibold text-gray-800">Insights</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center space-x-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <span className="hidden sm:inline">:</span>
          </button>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mdx:grid-cols-3 gap-6 mb-6 mt-4">
        <TopCard
          icon="/Group 44333.svg" // Reports Received
          title="Reports Received"
          value={insightsCards.reportsReceived}
          breakdown={[
            { label: "Posts", value: 3800 },
            { label: "Messages", value: 5600 },
            { label: "Comments", value: 9830 },
            { label: "Others", value: 7800 },
            { label: "Profiles", value: 756 },
          ]}
        />

        <ActionsTakenCard value={insightsCards.actionsTaken} breakdown={insightsCards.breakdown} />

        <TopCard
          icon="/noun-accruals-5571090.svg" // Pending Actions
          title="Pending Actions"
          value={insightsCards.pendingActions}
          breakdown={[
            { label: "Posts", value: 3800 },
            { label: "Messages", value: 5600 },
            { label: "Comments", value: 9830 },
            { label: "Others", value: 7800 },
            { label: "Profiles", value: 756 },
          ]}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeoInsights cityData={cityData} />
        <TransparencyReports data={transparencyData} />
      </div>
    </div>
  );
};

export default InsightsDashboard;