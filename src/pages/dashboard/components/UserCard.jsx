import {
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

export const UserCard = ({
    title,
    value,
    change,
    changeType,
    color,
    data,
    subtitle = "Last 6 Months",
  }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>

      <div className="mb-3">
        <ResponsiveContainer width="100%" height={60}>
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id={`gradient-${title.replace(/\s+/g, "-")}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${title.replace(/\s+/g, "-")})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-1">
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">
        {value?.toLocaleString() || "0"}
      </div>
      <div className="flex items-center">
        <span
          className={`text-sm ${
            changeType === "positive" ? "text-green-500" : "text-red-500"
          }`}
        >
          {changeType === "positive" ? "▲" : "▼"} {change}%
        </span>
        <span className="text-sm text-gray-500 ml-1">vs previous 1 month</span>
      </div>
    </div>
  );