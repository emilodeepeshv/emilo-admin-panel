import React from "react";
import { MessageSquare, Users, MessageCircle, Flag, FileText } from "lucide-react";
import TopStats from "../TopStats"; // Adjust path as needed
import Ads from "./Flag"; // Your flagged posts grid component

const defaultStats = [
  { label: "Posts", value: 3800, icon: FileText, color: "bg-orange-100", iconColor: "text-orange-600" },
  { label: "Comments", value: 9830, icon: MessageCircle, color: "bg-green-100", iconColor: "text-green-600" },
  { label: "Profiles", value: 756, icon: Users, color: "bg-blue-100", iconColor: "text-blue-600" },
  { label: "Messages", value: 5600, icon: MessageSquare, color: "bg-purple-100", iconColor: "text-purple-600" },
  { label: "Flag", value: 139, icon: Flag, color: "bg-red-100", iconColor: "text-red-600" },
];

const FlaggedPostsPage = ({ stats = defaultStats }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with stats - similar to your Reports page */}
      <div className="p-4 sm:p-6">
        <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-4 mb-6 rounded-lg">
          <h2 className="text-base font-semibold text-gray-800">Reports</h2>
        </div>
        <TopStats stats={stats} />
      </div>
      
      {/* Flagged Posts Grid - This will show the Ads component content */}
      <div className="px-4 sm:px-6">
        <Ads />
      </div>
    </div>
  );
};

export default FlaggedPostsPage;