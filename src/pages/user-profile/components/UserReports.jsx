import React, { useState } from "react";
import {
  Calendar,
  Download,
  Search,
  MoreHorizontal,
  ArrowUpDown,
} from "lucide-react";

// ✅ Import icons from assets
import Layer2Icon from "/Layer 2.svg";
import DevicesIcon from "/noun-devices-4716977.svg";
import RiskIcon from "/noun-risk-6587331.svg";
import UserIcon from "/noun-user-3680410.svg";
import UserReportIcon from "/noun-user-report-5383714.svg";
import exportSvg from "/export-bold-svgrepo-com.svg";

const UserReports = () => {
  const [activeTab, setActiveTab] = useState("against");
  const [selectedReports, setSelectedReports] = useState({});

  const handleCheckboxChange = (reportId) => {
    setSelectedReports((prev) => ({ ...prev, [reportId]: !prev[reportId] }));
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const ids = ["ronit", "anonymous", "sujeet"];
    setSelectedReports(
      isChecked ? Object.fromEntries(ids.map((i) => [i, true])) : {}
    );
  };

  // Data for different tabs
  const againstReports = [
    {
      id: "ronit",
      name: "Ronit Sinha",
      username: "@ronit_12dd4",
      category: "Post",
      url: "https://www.emilo.com/post",
      topic: "Inappropriate Content",
      severity: 2,
    },
    {
      id: "anonymous",
      name: "Anonymous User",
      username: null,
      category: "Comment",
      url: "https://www.emilo.com/comment",
      topic: "Harassment",
      severity: 5,
    },
    {
      id: "sujeet",
      name: "Sujeet Verma",
      username: "@sujeetverma121",
      category: "Post",
      url: "https://www.emilo.com/post",
      topic: "Harassment",
      severity: 5,
    },
  ];

  const byReports = [];

  const currentReports = activeTab === "against" ? againstReports : byReports;

  const SeverityIndicator = ({ level }) => {
    const dots = [];
    const colors =
      level === 3
        ? "bg-red-500"
        : level === 2
        ? "bg-orange-500"
        : "bg-yellow-500";

    for (let i = 0; i < 5; i++) {
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? colors : "bg-gray-300"
          }`}
        />
      );
    }
    return <div className="flex gap-1">{dots}</div>;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* Verification */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={Layer2Icon}
                alt="Verification"
                className="w-10 h-10 flex-shrink-0 bg-blue-500 p-1 rounded-full "
              />
              <div>
                <p className="text-sm font-semibold text-red-500">Unverified</p>
                <p className="text-xs text-gray-500">Verification Status</p>
              </div>
            </div>
          </div>

          {/* Active Devices */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={DevicesIcon}
                alt="Devices"
                className="w-10 h-10 flex-shrink-0 bg-blue-500 p-1 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">7</p>
                <p className="text-xs text-gray-500">Active Login Devices</p>
              </div>
            </div>
          </div>

          {/* Risk */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={RiskIcon}
                alt="Risk"
                className="w-10 h-10 flex-shrink-0 bg-blue-500 p-1 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-yellow-600">
                  High Risk User
                </p>
                <p className="text-xs text-gray-500">Risk Analysis</p>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={UserReportIcon}
                alt="Reports"
                className="w-10 h-10 flex-shrink-0 bg-blue-500 p-1 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">4</p>
                <p className="text-xs text-gray-500">Total Reports</p>
              </div>
            </div>
          </div>

          {/* Freeze */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={UserIcon}
                alt="Freeze"
                className="w-10 h-10 flex-shrink-0 bg-blue-500 p-1 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">2 Time</p>
                <p className="text-xs text-gray-500">Account Freezed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-4 sm:px-6">
            <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab("against")}
                className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === "against"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-black hover:text-gray-700"
                }`}
              >
                Report Against Praveen (3)
              </button>
              <button
                onClick={() => setActiveTab("by")}
                className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === "by"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-black hover:text-gray-700"
                }`}
              >
                Reported By Praveen (0)
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 sm:p-6 border- border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-shrink-0">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search User Name/ID"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none sm:w-64"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  <Calendar className="w-5 h-4.5  text-blue-500" />
                  <span className="text-gray-700 font-semibold">April 1, 2024</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  
                  <img src={exportSvg} alt="" className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700 font-semibold" >Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-200">
                  <th className="px-4 sm:px-6 py-4 text-left w-12">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-sm font-semibold text-black tracking-wider">
                      Reported By
                      <ArrowUpDown className="w-3.5 h-4 bg-white " />
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-sm font-semibold text-black tracking-wider">
                      Report Category
                      <ArrowUpDown className="w-3.5 h-3.5 bg-white " />
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-sm font-semibold text-black tracking-wider">
                      Report Topic
                      <ArrowUpDown className="w-3.5 h-4 bg-white " />
                    </div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left">
                    <span className="text-sm font-semibold text-black tracking-wider">
                      Severity
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {currentReports.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 sm:px-6 py-8 text-center text-gray-500"
                    >
                      No reports found
                    </td>
                  </tr>
                ) : (
                  currentReports.map((report) => (
                    <tr
                      key={report.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedReports[report.id] || false}
                          onChange={() => handleCheckboxChange(report.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {report.name}
                          </p>
                          {report.username && (
                            <p className="text-xs text-blue-500 truncate">
                              {report.username}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="min-w-0">
                          <a
                            href={report.url}
                            className="text-sm text-blue-600 hover:text-blue-800 underline block truncate"
                          >
                            {report.category}
                          </a>
                          <p className="text-xs text-gray-500 truncate">
                            {report.url}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="text-sm text-gray-900">
                          {report.topic}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <SeverityIndicator level={report.severity} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReports;
