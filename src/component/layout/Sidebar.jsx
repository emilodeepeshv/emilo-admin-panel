

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '/emilof (1)@2x.png';
import {ChartLine, Orbit, User} from 'lucide-react';

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    reports: false,
    ads: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Icon component for consistent styling 
  const Icon = ({ src, alt, size = 20 }) => (
    <img 
      src={src} 
      alt={alt} 
      className="w-5 h-5 object-contain"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );

  const menuItems = [
    {
      type: "single",
      to: "/dashboard",
      label: "Dashboard",
      icon: <Icon src="/Dashboard.svg" alt="Dashboard" />,
    },
    {
      type: "expandable",
      key: "reports",
      label: "Reports",
      icon: <Icon src="/Reports.svg" alt="Reports" />,
      children: [
        {
          to: "/reports",
          label: "Dashboard",
          icon: <Icon src="/Dashboard.svg" alt="Dashboard" size={16} />,
        },
        {
          to: "/reportusers",
          label: "All User Reports",
          icon: <Icon src="/Reports.svg" alt="Reports" size={16} />,
        },
        {
          to: "/insights",
          label: "Insights",
          icon: <Icon src="/Master Data.svg" alt="Insights" size={16} />,
        },
      ],
    },
    {
      type: "expandable",
      key: "ads",
      label: "Ads",
      icon: <Icon src="/Ads.svg" alt="Ads" size={24}/>,
      children: [
        {
          to: "/ads-dashboard",
          label: "Dashboard",
          icon: <Icon src="/Dashboard.svg" alt="Dashboard" size={16} />,
        },
        {
          to: "/all-ads",
          label: "All Ads",
          icon: <Icon src="/Ads.svg" alt="All Ads" size={22} />,
        },
      ],
    },
    {
      type: "expandable",
      key: "pages",
      label: "Pages",
      icon: <Icon src="/Group 44333.svg" alt="pages" size={20}/>,
      children: [
        {
          to: "/page-dashboard",
          label: "Dashboard",
          icon: <Icon src="/Dashboard.svg" alt="Dashboard" size={16} />,
        },
        {
          to: "/all-pages",
          label: "All Pages",
          icon: <Icon src="/Group 44333.svg" alt="All Ads" size={18} />,
        },
      ],
    },
    {
      type: "single",
      to: "/all-users",
      label: "All Users",
      icon: <User size={20} className="text-black"/>,
    },
    {
      type: "single",
      to: "/kpi",
      label: "KPI",
      icon: <ChartLine className="w-5 h-5" />,
    },
    {
      type: "expandable",
      key: "coustom-data",
      label: "Custom Data",
      icon: <Orbit size={20} className="text-black"/>,
      children: [
        {
          to: "/user-coustom-data",
          label: "User",
          icon: <User size={20} className="text-black"/>,
        },
        {
          to: "/ads-coustom-data",
          label: "Ads",
          icon: <Icon src="/Ads.svg" alt="All Ads" size={22} />,
        },
        {
          to: "/softcorner-coustom-data",
          label: "Softcorner",
          icon: <Icon src="/Soft Corner.png" alt="All Ads" size={18} />,
        },
        {
          to: "/page-coustom-data",
          label: "Page",
          icon: <Icon src="/Group 44333.svg" alt="All Ads" size={18} />,
        },
      ],
    },
    {
      type: "single",
      to: "/ad-placement",
      label: "Ad Placement",
      icon: <Icon src="/Group 44333.svg" alt="ad & placement" />,
    },
    {
      type: "expandable",
      key: "softcorner",
      label: "Soft Corner",
      icon: <Icon src="/Soft Corner.png" alt="SoftCorner" size={20}/>,
      children: [
        {
          to: "/soft-dashboard",
          label: "Dashboard",
          icon: <Icon src="/Dashboard.svg" alt="Dashboard" size={16} />,
        },
        {
          to: "/soft-all-users",
          label: "All Pages",
          icon: <Icon src="/Group 44333.svg" alt="All Ads" size={18} />,
        },
      ],
    },
    {
      type: "single",
      to: "/transaction",
      label: "Transaction",
      icon: <Icon src="/Transactions.svg" alt="Account & Settings" />,
    },
    {
      type: "single",
      to: "/blocked-freezed",
      label: "Blocked/Freezed",
      icon: <Icon src="/Blocked-Freezed.svg" alt="Blocked/Freezed" />,
    },
    {
      type: "single",
      to: "/suspicious-activity",
      label: "Suspicious Activity",
      icon: <Icon src="/Suspicious Activity.svg" alt="Suspicious Activity" />,
    },
    {
      type: "single",
      to: "/settings",
      label: "Account & Settings",
      icon: <Icon src="/Account & Settings.svg" alt="Account & Settings" />,
    },
  ];

  const ChevronDown = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const ChevronUp = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-70 bg-white h-screen shadow-sm flex-col border-r border-gray-200 showFooter fixed">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100 font-bold text-xl align-middle">
          <img src={Logo} alt={Logo} className="w-17 " />
          <span className="ml-2 text-sm my-auto font-semibold text-black">
            Report Management
          </span>
        </div>

        {/* User Profile */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-gray-900">
              Emilo Super Admin
            </p>
            <p className="text-xs text-gray-500">Edit Profile</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto hide-scrollbar ">
          {menuItems.map((item) => {
            if (item.type === "single") {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm transition-colors
                     ${
                       isActive
                         ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600"
                         : "text-gray-700 hover:bg-gray-50"
                     }`
                  }
                >
                  <span className="text-black">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              );
            }

            if (item.type === "expandable") {
              const isExpanded = expandedSections[item.key];

              return (
                <div key={item.key}>
                  <button
                    onClick={() => toggleSection(item.key)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {isExpanded && item.children && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors
                             ${
                               isActive
                                 ? "bg-blue-50 text-blue-600 font-medium"
                                 : "text-gray-600 hover:bg-gray-50"
                             }`
                          }
                        >
                          <span className="text-gray-400">{child.icon}</span>
                          <span>{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </nav>

        {/* Bottom section with requests badge */}
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors border-t border-gray-100
             ${
               isActive
                 ? "bg-blue-50 text-blue-600 font-medium"
                 : "text-gray-700 hover:bg-gray-50"
             }`
          }
        >
          <div className="flex items-center space-x-3">
            <Icon src="/vite.svg" alt="Requests" size={16} />
            <span>Requests</span>
          </div>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-6 h-6 flex items-center justify-center">
            28
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;