// components/UsersCampaignsTable.jsx
import React from 'react';
import { ListFilter, ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

const UsersCampaignsTable = ({ userCampaigns }) => {
  const getDeliveryStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Not Delivering':
        return 'text-gray-500';
      case 'Completed':
        return 'text-gray-600';
      case 'Inactive':
        return 'text-gray-500';
      case 'Ad Set Off':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getDeliveryStatusDot = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Not Delivering':
        return 'bg-gray-400';
      case 'Completed':
        return 'bg-gray-400';
      case 'Inactive':
        return 'bg-gray-400';
      case 'Ad Set Off':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-8 shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Users Campaigns</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
              Trending Ads
            </button>
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm bg-white">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              <ListFilter className="w-4 h-4" />
              Filters
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  User Name
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Campaign Name
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Delivery
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Budget
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Reach
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Impressions
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                <div className="flex items-center gap-1">
                  Results
                  <ArrowUpDown className="w-5 h-4.5 bg-white rounded" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userCampaigns.map((campaign, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{campaign.userName}</div>
                    <div className="text-sm text-gray-500">ID: {campaign.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                      {campaign.campaignName}
                    </div>
                    <div className="text-sm text-gray-500">{campaign.type}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getDeliveryStatusDot(campaign.delivery)}`}></div>
                    <div>
                      <div className={`text-sm font-medium ${getDeliveryStatusColor(campaign.delivery)}`}>
                        {campaign.delivery}
                      </div>
                      {campaign.deliveryNote && (
                        <div className="text-xs text-gray-500">{campaign.deliveryNote}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{campaign.budget}</div>
                    <div className="text-sm text-gray-500">{campaign.budgetType}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.reach}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.impressions}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{campaign.results}</div>
                    <div className="text-sm text-gray-500">{campaign.resultType}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersCampaignsTable;