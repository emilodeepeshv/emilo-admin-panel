import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TopStats = ({ stats }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDummy, setActiveDummy] = useState(null);

  // Define the paths and icons for each stat
  const statConfig = {
    "Posts": { 
      path: null, 
      icon: "/noun-feed-5095062.svg",
      bgColor: "bg-orange-100",
      iconBgColor: "bg-orange-500"
    },
    "Comments": { 
      path: null, 
      icon: "/noun-comments-2374383.svg",
      bgColor: "bg-green-100", 
      iconBgColor: "bg-green-500"
    },
    "Profiles": { 
      path: "/reportusers", 
      icon: "/noun-user-3855315.svg",
      bgColor: "bg-blue-100",
      iconBgColor: "bg-blue-500"
    },
    "Messages": { 
      path: null, 
      icon: "/noun-messages-6693803.svg",
      bgColor: "bg-purple-100",
      iconBgColor: "bg-purple-500"
    },
    "Flag": { 
      path: "/reports/flagged", 
      icon: "/flag-2-svgrepo-com.svg",
      bgColor: "bg-red-100",
      iconBgColor: "bg-red-500"
    }
  };

  const handleStatClick = (stat) => {
    const config = statConfig[stat.label];
    if (config?.path) {
      navigate(config.path);
    } else {
      setActiveDummy(stat.label);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top grid navigation */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        {stats.map((stat) => {
          const config = statConfig[stat.label];
          const isActive = config?.path
            ? location.pathname === config.path
            : activeDummy === stat.label;

          return (
            <div
              key={stat.label}
              onClick={() => handleStatClick(stat)}
              className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "bg-white text-gray-800 shadow-sm"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-3 ${
                    isActive 
                      ? "bg-white/20" 
                      : config?.iconBgColor || "bg-gray-500"
                  }`}
                >
                  {config?.icon ? (
                    <img
                      src={config.icon}
                      alt={stat.label}
                      className="w-6 h-6 brightness-0 invert"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-white/50 rounded-lg"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold mb-0">
                    {stat.value.toLocaleString("en-IN")}
                  </div>
                  <div className={`text-sm font-medium ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopStats;