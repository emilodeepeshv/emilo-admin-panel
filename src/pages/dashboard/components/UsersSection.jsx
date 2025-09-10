import React from "react";
import { Info } from "lucide-react";
import { UserCard } from "./UserCard";
import {
  allUsersData,
  activeUsersData,
  newUsersData,
  accountClosedData,
} from "../../../utils/DashboardFakeData";

const UsersSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900">Users</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <UserCard
          title="All Users"
          value={28753637}
          change={18}
          changeType="positive"
          color="#8B5CF6"
          data={allUsersData}
        />
        <UserCard
          title="Active User"
          value={11533409}
          change={7}
          changeType="positive"
          color="#10B981"
          data={activeUsersData}
        />
        <UserCard
          title="New Users"
          value={1139772}
          change={19}
          changeType="positive"
          color="#3B82F6"
          data={newUsersData}
        />
        <UserCard
          title="Account Closed"
          value={9428}
          change={7}
          changeType="negative"
          color="#EF4444"
          data={accountClosedData}
        />
      </div>
    </div>
  );
};

export default UsersSection;
