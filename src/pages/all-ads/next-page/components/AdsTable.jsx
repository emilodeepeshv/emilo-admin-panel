import React from 'react';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

const AdsTable = ({ 
  ads, 
  activeTab, 
  selectAll, 
  onSelectAll, 
  onSelectAd, 
  getTableColumns,
  getDeliveryStatusColor,
  getDeliveryStatusDot,
  getStatusColor,
  formatCurrency
}) => {
  const renderTableCell = (ad, column) => {
    switch (column.key) {
      case 'select':
        return (
          <input
            type="checkbox"
            checked={ad.selected}
            onChange={() => onSelectAd(ad.id)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        );
      case 'dateCreated':
        return <span className="text-sm text-gray-900">{ad.dateCreated}</span>;
      case 'userInfo':
        return (
          <div>
            <div className="text-sm font-medium text-gray-900">{ad.userName}</div>
            <div className="text-sm text-gray-500">ID: {ad.userId}</div>
          </div>
        );
      case 'campaignInfo':
        return (
          <div>
            <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
              {ad.campaignName}
            </div>
            <div className="text-sm text-gray-500">{ad.campaignType}</div>
          </div>
        );
      case 'delivery':
        return (
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getDeliveryStatusDot(ad.delivery)}`}></div>
            <div>
              <div className={`text-sm font-medium ${getDeliveryStatusColor(ad.delivery)}`}>
                {ad.delivery}
              </div>
              {ad.deliveryNote && (
                <div className="text-xs text-gray-500">{ad.deliveryNote}</div>
              )}
            </div>
          </div>
        );
      case 'budget':
        return (
          <div>
            <div className="text-sm font-medium text-gray-900">{formatCurrency(ad.budget)}</div>
            <div className="text-sm text-gray-500">{ad.budgetType}</div>
          </div>
        );
      case 'reach':
        return <span className="text-sm text-gray-900">{ad.reach.toLocaleString()}</span>;
      case 'impressions':
        return <span className="text-sm text-gray-900">{ad.impressions.toLocaleString()}</span>;
      case 'status':
        return (
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ad.status)}`}>
            {ad.status}
          </span>
        );
      case 'category':
        return <span className="text-sm text-gray-900">{ad.category}</span>;
      case 'result':
        return (
          <div>
            <div className="text-sm font-medium text-gray-900">{ad.result}</div>
            <div className="text-sm text-gray-500">{ad.resultType}</div>
          </div>
        );
      case 'reason':
        return <span className="text-sm text-gray-900">{ad.reason}</span>;
      case 'action':
        return (
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        );
      default:
        return null;
    }
  };

  const tableColumns = getTableColumns(activeTab);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1200px]">
        <thead className="bg-gray-200 border-b border-gray-200">
          <tr>
            {tableColumns.map((column) => (
              <th key={column.key} className={`px-6 py-3 text-left ${column.width || ''}`}>
                {column.key === 'select' ? (
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={onSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                ) : (
                  <div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-black tracking-wider">
                      {column.label}
                      {column.key !== 'action' && <ArrowUpDown className="w-5 h-5 bg-white p-0.5 rounded" />}
                    </div>
                    {column.subLabel && (
                      <div className="text-xs font-medium text-gray-400 normal-case">
                        {column.subLabel}
                      </div>
                    )}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ads.map((ad) => (
            <tr key={ad.id} className="hover:bg-gray-50">
              {tableColumns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                  {renderTableCell(ad, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty state */}
      {ads.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 ">No ads found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AdsTable;