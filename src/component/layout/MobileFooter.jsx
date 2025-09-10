import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  FileText,
  MonitorPlay,
  Settings,
  BarChart,
  Grid3X3,
  User,
  Zap,
} from "lucide-react"

const MobileFooter = () => {
  const [expandedSections, setExpandedSections] = useState({
    reports: false,
    ads: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const menuItems = [
    {
      type: "single",
      to: "/dashboard",
      label: "Dashboard",
      icon: <Grid3X3 size={20} />,
    },
    {
      type: "expandable",
      key: "reports",
      label: "Reports",
      icon: <FileText size={20} />,
      children: [
        { to: "/reports", label: "Dashboard", icon: <Grid3X3 size={16} /> },
        { to: "/reportusers", label: "All User Reports", icon: <FileText size={16} /> },
        { to: "/insights", label: "Insights", icon: <BarChart size={16} /> },
      ],
    },
    {
      type: "expandable",
      key: "ads",
      label: "Ads",
      icon: <MonitorPlay size={20} />,
      children: [
        { to: "/flag", label: "All Ads", icon: <MonitorPlay size={16} /> },
      ],
    },
    {
      type: "single",
      to: "/users",
      label: "All Users",
      icon: <User size={20} />,
    },
    {
      type: "single",
      to: "/settings",
      label: "Account & Settings",
      icon: <Settings size={20} />,
    },
  ]

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around items-center h-14 showFooter">
      {menuItems.map((item) => {
        if (item.type === "single") {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center text-xs ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              {item.icon}
            </NavLink>
          )
        }

        if (item.type === "expandable") {
          const isExpanded = expandedSections[item.key]
          return (
            <div key={item.key} className="relative">
              <button
                onClick={() => toggleSection(item.key)}
                className="flex flex-col items-center justify-center text-xs text-gray-500"
              >
                {item.icon}
              </button>

              {isExpanded && item.children && (
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 space-y-1">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 px-3 py-2 rounded-md text-sm ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`
                      }
                      onClick={() => setExpandedSections({})}
                    >
                      {child.icon}
                      <span>{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        }

        return null
      })}

      {/* Requests Button with Badge */}
      <NavLink
        to="/requests"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center text-xs relative ${
            isActive ? "text-blue-600" : "text-gray-500"
          }`
        }
      >
        <Zap size={20} />
        <span className="absolute -top-1 right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
          28
        </span>
      </NavLink>
    </div>
  )
}

export default MobileFooter
