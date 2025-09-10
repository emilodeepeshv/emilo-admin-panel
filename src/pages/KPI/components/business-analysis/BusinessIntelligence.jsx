"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, TrendingDown, DollarSign, Users, Zap, Target, PieChart } from "lucide-react"

// Sample data for the BI metrics
const cacData = [
  { month: "2024-01", cost: 45, target: 40 },
  { month: "2024-02", cost: 42, target: 40 },
  { month: "2024-03", cost: 38, target: 40 },
  { month: "2024-04", cost: 35, target: 40 },
  { month: "2024-05", cost: 33, target: 40 },
  { month: "2024-06", cost: 31, target: 40 },
  { month: "2024-07", cost: 29, target: 40 },
  { month: "2024-08", cost: 28, target: 40 },
]

const ltvData = [
  { month: "2024-01", ltv: 280, cac: 45 },
  { month: "2024-02", ltv: 295, cac: 42 },
  { month: "2024-03", ltv: 310, cac: 38 },
  { month: "2024-04", ltv: 325, cac: 35 },
  { month: "2024-05", ltv: 340, cac: 33 },
  { month: "2024-06", ltv: 355, cac: 31 },
  { month: "2024-07", ltv: 370, cac: 29 },
  { month: "2024-08", ltv: 385, cac: 28 },
]

const burnRateData = [
  { month: "2024-01", burn: 125000, runway: 18 },
  { month: "2024-02", burn: 118000, runway: 19 },
  { month: "2024-03", burn: 122000, runway: 18 },
  { month: "2024-04", burn: 115000, runway: 20 },
  { month: "2024-05", burn: 108000, runway: 22 },
  { month: "2024-06", burn: 112000, runway: 21 },
  { month: "2024-07", burn: 105000, runway: 23 },
  { month: "2024-08", burn: 98000, runway: 25 },
]

const revenueData = [
  { month: "2024-01", mrr: 85000, arr: 1020000 },
  { month: "2024-02", mrr: 92000, arr: 1104000 },
  { month: "2024-03", mrr: 98000, arr: 1176000 },
  { month: "2024-04", mrr: 105000, arr: 1260000 },
  { month: "2024-05", mrr: 112000, arr: 1344000 },
  { month: "2024-06", mrr: 118000, arr: 1416000 },
  { month: "2024-07", mrr: 125000, arr: 1500000 },
  { month: "2024-08", mrr: 132000, arr: 1584000 },
]

const marketPenetrationData = [
  { segment: "Enterprise", penetration: 12.5, target: 15 },
  { segment: "Mid-Market", penetration: 28.3, target: 25 },
  { segment: "SMB", penetration: 45.7, target: 40 },
  { segment: "Startup", penetration: 67.2, target: 60 },
]

const MetricCard = ({ title, value, change, changeType, icon: Icon, iconBg, subtitle }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-">
      <div className="flex items-center gap-3">
        
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
    </div>
    <div className="flex items-end justify-between">
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className={`p-3 rounded-lg ${iconBg}`}>
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
  </div>
      <div
        className={`flex items-center gap-1 text-sm ${
          changeType === "positive" ? "text-green-600" : changeType === "negative" ? "text-red-600" : "text-gray-600"
        }`}
      >
        {changeType === "positive" && <TrendingUp className="w-4 h-4" />}
        {changeType === "negative" && <TrendingDown className="w-4 h-4" />}
        <span>{change}</span>
      </div>
    </div>
)

const BusinessIntelligence = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="p-6  min-h-screen">
      {/* Header */}
      

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Customer Acquisition Cost"
          subtitle="CAC"
          value="$28"
          change="-12.5%"
          changeType="positive"
          icon={Users}
          iconBg="bg-blue-200"
        />
        <MetricCard
          title="Lifetime Value"
          subtitle="LTV"
          value="$385"
          change="+8.3%"
          changeType="positive"
          icon={DollarSign}
          iconBg="bg-green-200"
        />
        <MetricCard
          title="LTV/CAC Ratio"
          subtitle="Efficiency"
          value="13.8x"
          change="+0.8x"
          changeType="positive"
          icon={Target}
          iconBg="bg-yellow-200"
        />
        <MetricCard
          title="Monthly Burn Rate"
          subtitle="Cash Flow"
          value="$98K"
          change="-6.7%"
          changeType="positive"
          icon={Zap}
          iconBg="bg-purple-200"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CAC Trends */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">CAC Trends</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">CAC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-gray-600">Target</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={cacData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="target" stroke="#d1d5db" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Run Rate */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Run Rate</h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600">ARR Growth</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => [`$${(value / 1000).toFixed(0)}K`, "ARR"]} />
              <Area type="monotone" dataKey="arr" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Burn Rate & Runway */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Burn Rate & Runway</h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-gray-600">Months Left</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={burnRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="burn" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="runway" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* LTV vs CAC */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">LTV vs CAC Trends</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">LTV</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-600">CAC</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ltvData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="ltv" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="cac" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Market Penetration Rate */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Market Penetration Rate</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="text-gray-600">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-gray-600">Target</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={marketPenetrationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="segment" type="category" tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => [`${value}%`, "Penetration"]} />
              <Bar dataKey="penetration" fill="#6366f1" radius={[0, 4, 4, 0]} />
              <Bar dataKey="target" fill="#d1d5db" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default BusinessIntelligence
