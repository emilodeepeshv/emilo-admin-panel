import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const OtpVerify = lazy(() => import("./pages/auth/OtpVerify"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Reports = lazy(() => import("./pages/report-dashboard/section/ReportsDashboard"));
const Insights = lazy(() => import("./pages/insights/Insights"));
const ReportsUser = lazy(() => import("./pages/report-user/ReportsUser"));
const Settings = lazy(() => import("./pages/Settings"));
const Flag = lazy(() => import("./pages/report-user/components/flag/Flag"));
const FlaggedPostsPage = lazy(() => import("./pages/report-user/components/flag/FlaggedPostsPage"));
const AdsDashboard = lazy(() => import("./pages/all-ads/ads-dashboard/AdsDashboard"));
const AllAds = lazy(() => import("./pages/all-ads/next-page/AllAds"));
const PageDashboard = lazy(() => import("./pages/page-sidbar/dashboard/PageDashboard"));
const AllPages = lazy(() => import("./pages/page-sidbar/all-pages/AllPages.jsx"));
const AllUsers = lazy(() => import("./pages/all-users/AllUsers.jsx"));
const KPI = lazy(() => import("./pages/KPI/Kpi"));
const UserCoustomData = lazy(() => import("./pages/coustom-data/UserCoustomData.jsx"));
const AdsCoustomData = lazy(() => import("./pages/coustom-data/AdsCoustomData"));
const SoftCornerCoustomData = lazy(() => import("./pages/coustom-data/SoftCornerCoustomData"));
const PageCoustomData = lazy(() => import("./pages/coustom-data/PageCoustomData"));
const AdPlacement = lazy(() => import("./pages/ad-placement/AdPlacement"));
const SoftDashboard = lazy(() => import("./pages/softcorner/dashboard/SoftDashboard.jsx"));
const SoftAllUsers = lazy(() => import("./pages/softcorner/all-users/SoftAllUsers.jsx"));
const Transaction = lazy(() => import("./pages/transection/Transection.jsx"));



// User profile area (layout + sections)
const UserProfile = lazy(() => import("./pages/user-profile/UserProfile"));
const UserReports = lazy(() => import("./pages/user-profile/components/UserReports"));
const UserPhotos = lazy(() => import("./pages/user-profile/components/UserPhotos"));
const UserDetails = lazy(() => import("./pages/user-profile/components/UserDetails"));
const UserDevice = lazy(() => import("./pages/user-profile/components/UserDevice"));
const UserActivity = lazy(() => import("./pages/user-profile/components/UserActivity"));
const UserLogins = lazy(() => import("./pages/user-profile/components/UserLogins"));
const UserActions = lazy(() => import("./pages/user-profile/components/UserActions"));

import Layout from "./component/layout/Layout";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Routes>
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OtpVerify />} /> 

            {/* Protected */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reportusers" element={<ReportsUser />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/user" element={<Insights />} />
              <Route path="/flag" element={<Flag />} />
              <Route path="/ads-dashboard" element={<AdsDashboard />} />
              <Route path="/all-ads" element={<AllAds />} />
              <Route path="/page-dashboard" element={<PageDashboard />} />
              <Route path="/all-pages" element={<AllPages />} />
              <Route path="/all-users" element={<AllUsers />} />
              <Route path="/kpi" element={<KPI />} />
              <Route path="/user-coustom-data" element={<UserCoustomData />} />
              <Route path="/ads-coustom-data" element={<AdsCoustomData />} />
              <Route path="/softcorner-coustom-data" element={<SoftCornerCoustomData />} />
              <Route path="/page-coustom-data" element={<PageCoustomData />} />
              <Route path="/ad-placement" element={<AdPlacement />} />
              <Route path="/soft-dashboard" element={<SoftDashboard />} />
              <Route path="/soft-all-users" element={<SoftAllUsers />} />
              <Route path="/transaction" element={<Transaction />} />

              {/* Flagged posts */}
              <Route path="/reports/flagged" element={<FlaggedPostsPage />} />

              {/* User profile with nested routes & fixed sidebar layout */}
              <Route path="/user-profile/:id" element={<UserProfile />}>
                <Route index element={<UserReports />} />
                <Route path="photos" element={<UserPhotos />} />
                <Route path="details" element={<UserDetails />} />
                <Route path="device" element={<UserDevice />} />
                <Route path="activity" element={<UserActivity />} />
                <Route path="logins" element={<UserLogins />} />
                <Route path="actions" element={<UserActions />} />
              </Route>
            </Route>

            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
};

export default App;
