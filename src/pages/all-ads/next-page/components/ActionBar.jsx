import React from 'react';
import { Plus, Undo2, Trash2, Settings, Download, ChevronDown, } from 'lucide-react';
import ExportSvg from '/export-bold-svgrepo-com.svg'

const ActionBar = ({ activeTab, onExport, onCustomizeColumns, onResetColumns }) => {
  const renderActionButtons = () => {
    switch (activeTab) {
      case 'all':
        return (
          <>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              <Plus className="w-4 h-4" />
              Create Campaign
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Undo2 className="w-4 h-4" />
              Undo
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </>
        );
      case 'pendingReview':
        return (
          <>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
              Approve
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
              Disapprove
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Undo2 className="w-4 h-4" />
              Undo
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </>
        );
      case 'approved':
        return (
          <>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
              Stop Ad
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </>
        );
      case 'rejected':
        return (
          <>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {renderActionButtons()}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={onCustomizeColumns}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            <Settings className="w-4 h-4" />
            Customize columns
            <ChevronDown className="w-5 h-5 text-blue-500" />
          </button>
          <button 
            onClick={onResetColumns}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            Reset Columns
          </button>
          <button 
            onClick={onExport}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            <img src={ExportSvg} className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;