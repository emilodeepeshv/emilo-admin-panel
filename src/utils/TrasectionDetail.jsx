import { RefreshCw, MoreVertical, Search, Calendar, Download } from 'lucide-react';

const TransactionDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-black">Transactions</h1>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 border border-gray-200 p-1 rounded">
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm ">Refresh</span>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded border border-gray-200">
              <MoreVertical className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Search and Date Filter */}
        <div className="flex items-center justify-between mb-6  ">
          <div className="relative border rounded-sm border-gray-200 w-[80%]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search & Filter"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:bg-white focus:shadow-sm"
            />
          </div>
          <div className="flex items-center space-x-2 border p-2 rounded-md border-gray-200 shadow bg-white">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-blue-500 font-medium text-sm">Last 7 days:</span>
            <span className="text-blue-600 text-sm">Feb 1, 2024 - Feb 7, 2024</span>
          </div>
        </div>

        {/* Transaction Details Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between p-6 border- border-gray-200">
            <h2 className="text-xl font-bold text-black">Transaction Details</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-sm">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download</span>
            </button>
          </div>

          <div className="p-6">
            {/* Main Transaction Info Grid */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Amount Section */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-black mb-3">Amount</h3>
                <div className="text-3xl font-bold text-blue-500 mb-4">₹ 12,000.00</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Subtotal:</span>
                    <span className="font-bold text-black">₹ 11,000.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">GST:</span>
                    <span className="font-bold text-black">₹ 1,000.00</span>
                  </div>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="space-y-6 border border-gray-300 p-7 rounded-lg ">
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md ">Transaction ID:</div>
                  <div className="font-bold text-black">123456789987654</div>
                </div>
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md ">Date:</div>
                  <div className="font-bold text-black">02 Mar 2024, 09:10 PM</div>
                </div>
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md ">Payment Method:</div>
                  <div className="font-bold text-blue-500">Wallet Balance</div>
                </div>
              </div>

              {/* Account Details */}
              <div className="space-y-6 border border-gray-300 p-7 rounded-lg">
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md mb-1">Ad Account:</div>
                  <div className="font-bold text-black">123456789987654</div>
                </div>
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md mb-1">Status:</div>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    Paid
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className="text-gray-600 text-md mb-1">Product:</div>
                  <div className="font-bold text-black">eMILO</div>
                </div>
              </div>
            </div>

            {/* Campaign Information */}
            <div className="grid grid-cols-2 gap-8 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <div className="text-gray-600 text-md mb-1">Campaign Name:</div>
                <div className="font-bold text-black">Lead generation campaign</div>
              </div>
              <div>
                <div className="text-gray-600 text-md mb-1">Duration:</div>
                <div className="font-bold text-black">From 02 Apr 2024, 09:00 AM To 02 Mar 2024, 09:00 PM</div>
              </div>
            </div>

            {/* Data Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-black text-md border-r border-gray-200">Ad Set Name</th>
                    <th className="text-left py-4 px-6 font-bold text-black text-md border-r border-gray-200">Payment Method</th>
                    <th className="text-left py-4 px-6 font-bold text-black text-md border-r border-gray-200">Ad Set ID</th>
                    <th className="text-left py-4 px-6 font-bold text-black text-md border-r border-gray-200">GST Invoice ID</th>
                    <th className="text-left py-4 px-6 font-bold text-black text-md border-r border-gray-200">Results</th>
                    <th className="text-left py-4 px-6 font-bold text-black text-md">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700 text-sm border-r border-gray-200">Lead generation Ad Set</td>
                    <td className="py-4 px-6 text-gray-700 text-sm border-r border-gray-200">Wallet</td>
                    <td className="py-4 px-6 text-gray-700 text-sm border-r border-gray-200">EMADS-123-100100100</td>
                    <td className="py-4 px-6 text-gray-700 text-sm border-r border-gray-200">EMADS-123-100100100</td>
                    <td className="py-4 px-6 text-gray-700 text-sm border-r border-gray-200">1279</td>
                    <td className="py-4 px-6 text-gray-700 text-sm">₹ 12,000.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50 border-t border-gray-200">
                    <td className="py-4 px-6 font-bold text-black text-sm border-r border-gray-200" colSpan="4">Total</td>
                    <td className="py-4 px-6 border-r border-gray-200">
                      <div className="font-bold text-black text-sm">1279</div>
                      <div className="text-xs text-gray-500">Impressions</div>
                    </td>
                    <td className="py-4 px-6 font-bold text-black text-sm">₹ 12,000.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;