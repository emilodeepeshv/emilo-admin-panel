import React from "react";
import { Calendar } from "lucide-react";

const ReportsSection = () => {
  const reports = [
    { name: "Posts", value: 3800, color: "bg-purple-500" },
    { name: "Comments", value: 9830, color: "bg-yellow-400" },
    { name: "Profiles", value: 2756, color: "bg-orange-400" },
    { name: "Events", value: 1504, color: "bg-teal-400" },
    { name: "Ads", value: 2500, color: "bg-yellow-500" },
    { name: "Others", value: 1257, color: "bg-pink-400" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <Calendar className="w-5 h-4.5 text-blue-500" />
          <span className="text-sm text-gray-500">Last 1 Month</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-4 text-center">
        <div>
          <div className="font-bold">3,800</div>
          <div className="text-xs text-gray-500">Posts</div>
        </div>
        <div>
          <div className="font-bold">9,830</div>
          <div className="text-xs text-gray-500">Comments</div>
        </div>
        <div>
          <div className="font-bold">2,756</div>
          <div className="text-xs text-gray-500">Profiles</div>
        </div>
        <div>
          <div className="font-bold">5,600</div>
          <div className="text-xs text-gray-500">Messages</div>
        </div>
        <div>
          <div className="font-bold">7,800</div>
          <div className="text-xs text-gray-500">Others</div>
        </div>
      </div>

      <div>
        {reports.map((r, idx) => (
          <div key={idx} className="flex items-center mb-2">
            <div className={`h-3 w-3 rounded-full ${r.color} mr-2`}></div>
            <div className="w-24 text-sm">{r.name}</div>
            <div className="flex-1 bg-gray-200 h-2 rounded">
              <div
                className={`${r.color} h-2 rounded`}
                style={{ width: `${(r.value / 9830) * 100}%` }}
              ></div>
            </div>
            <div className="w-12 text-right text-sm ml-2">{r.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;