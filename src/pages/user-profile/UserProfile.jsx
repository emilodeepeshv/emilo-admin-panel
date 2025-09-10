import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import { MoreVertical } from "lucide-react";

const SidebarLink = ({ to, children, isActive, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    {children}
  </NavLink>
);

const UserProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const [active, setActive] = useState("reports");

  // Sync with route on first load / route change
  useEffect(() => {
    if (location.pathname.includes("/photos")) setActive("photos");
    else if (location.pathname.includes("/details")) setActive("details");
    else if (location.pathname.includes("/device")) setActive("device");
    else if (location.pathname.includes("/activity")) setActive("activity");
    else if (location.pathname.includes("/logins")) setActive("logins");
    else if (location.pathname.includes("/actions")) setActive("actions");
    else setActive("reports");
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 rounded-xl">
        <div className="sticky top-0 h-screen overflow-y-auto p-6">
          {/* Profile card */}
          <div className="flex flex-col items-center text-center  p-6  shadow rounded-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              Praveen Dubey
            </h2>
            <p className="text-sm text-blue-500">@praveen420</p>
            <span className="mt-2 inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
              Active
            </span>
          </div>

          {/* Sidebar nav */}
          <nav className="mt-6 space-y-4 shadow border border-gray-200 rounded-xl p-4 pb-60">
            <SidebarLink
              to={`/user-profile/${id}`}
              isActive={active === "reports"}
              onClick={() => setActive("reports")}
            >
              Reports
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/photos`}
              isActive={active === "photos"}
              onClick={() => setActive("photos")}
            >
              Posts
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/details`}
              isActive={active === "details"}
              onClick={() => setActive("details")}
            >
              Profile Details
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/device`}
              isActive={active === "device"}
              onClick={() => setActive("device")}
            >
              Device Info
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/activity`}
              isActive={active === "activity"}
              onClick={() => setActive("activity")}
            >
              Activity/ IP Tracking
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/logins`}
              isActive={active === "logins"}
              onClick={() => setActive("logins")}
            >
              Login History
            </SidebarLink>
            <SidebarLink
              to={`/user-profile/${id}/actions`}
              isActive={active === "actions"}
              onClick={() => setActive("actions")}
            >
              Actions Taken
            </SidebarLink>
          </nav>
        </div>
      </aside>

      {/* Right area renders current subpage */}
      <main className="flex-1">
        {/* Top bar */}
        <div className="flex items-start justify-between p-6">
          <h1 className="text-lg font-semibold text-gray-900 capitalize">
            {active === "photos"
              ? "Photos & Videos"
              : active === "details"
              ? "Profile Details"
              : active === "device"
              ? "Device Info"
              : active === "activity"
              ? "Activity / IP Tracking"
              : active === "logins"
              ? "Login History"
              : active === "actions"
              ? "Actions Taken"
              : "Reports"}
          </h1>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Nested pages */}
        <div className="px-6 pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserProfile;