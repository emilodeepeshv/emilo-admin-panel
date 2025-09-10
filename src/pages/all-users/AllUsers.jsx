import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  MoreVertical,
  RefreshCw,
  SlidersHorizontal,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  Calendar,
} from "lucide-react";
import DateFilterModal from "../../utils/DateFilterModal";
const AllUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All Users");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);

  const [openPopup, setOpenPopup] = useState(null);
  const popupRef = useRef(null);

  const tabs = ["All Users", "Active Users", "Inactive Users", "New Users"];

  const userData = [
    {
      id: 1,
      userName: "Praveen Dubey",
      handle: "@praveendubey",
      createdAt: "Aug 18, 2024",
      emailId: "praveendubey123@example.com",
      mobile: "+91 12548 42548",
      noOfAccounts: 5,
      gender: "Male",
      isSelected: false,
    },
    {
      id: 2,
      userName: "Nishant Singhania",
      handle: "@nishantsinghania",
      createdAt: "Sep 16, 2024",
      emailId: "nishantsinghania123@example.com",
      mobile: "+91 57878 54346",
      noOfAccounts: 2,
      gender: "Male",
      isSelected: true,
    },
    {
      id: 3,
      userName: "Aarushi Dhingra",
      handle: "@aarushgra",
      createdAt: "Jan 27, 2024",
      emailId: "vineeta09@yahoo.com",
      mobile: "+91 89562 74523",
      noOfAccounts: 1,
      gender: "Female",
      isSelected: false,
    },
    {
      id: 4,
      userName: "Naval Bal",
      handle: "@navalal",
      createdAt: "Jun 30, 2024",
      emailId: "qbehl@yahoo.co.in",
      mobile: "+91 65848 55655",
      noOfAccounts: 1,
      gender: "Male",
      isSelected: false,
    },
    {
      id: 5,
      userName: "Binoya Deshmukh",
      handle: "@binoyakh",
      createdAt: "Aug 4, 2024",
      emailId: "sodhani.abbas@anthony.ac.in",
      mobile: "+91 99599 54888",
      noOfAccounts: 5,
      gender: "Male",
      isSelected: false,
    },
    {
      id: 6,
      userName: "Akhil Somani",
      handle: "@akhilm",
      createdAt: "Dec 11, 2024",
      emailId: "xusman@rediffmail.com",
      mobile: "+91 32546 96452",
      noOfAccounts: 2,
      gender: "Male",
      isSelected: false,
    },
    {
      id: 7,
      userName: "Iqbal Kata",
      handle: "@iqbalkta",
      createdAt: "Sep 20, 2024",
      emailId: "subhash.natt@yahoo.com",
      mobile: "+91 85656 95501",
      noOfAccounts: 1,
      gender: "Male",
      isSelected: false,
    },
    {
      id: 8,
      userName: "Deep Basak",
      handle: "@deepbaak",
      createdAt: "Jul 22, 2024",
      emailId: "brock.wagle@bhattacharyya.com",
      mobile: "+91 84512 75954",
      noOfAccounts: 3,
      gender: "Male",
      isSelected: false,
    },
  ];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenPopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    return (
      <ArrowUpDown className="w-6 h-6 ml-1 text-black p-1 bg-white rounded " />
    );
  };

  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === userData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(userData.map((user) => user.id)));
    }
  };

  const handleActionClick = (action, userId) => {
    console.log(`Action: ${action} for user ID: ${userId}`);
    setOpenPopup(null);
  };

  const ActionPopup = ({ userId }) => (
    <div
      ref={popupRef}
      className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-40 z-50"
    >
      <button
        onClick={() => handleActionClick("Give Reward", userId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Give Reward
      </button>
      <button
        onClick={() => handleActionClick("Give Coupon", userId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Give Coupon
      </button>
      <button
        onClick={() => handleActionClick("Add Credit", userId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        Add Credit
      </button>
    </div>
  );

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border border-gray-200 p-3 rounded-2xl shadow bg-white">
        <h1 className="text-2xl font-semibold text-gray-900">All Users</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-gray-600 hover:text-gray-800 px-3 py-2 border border-gray-200 rounded-2xl">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="text-gray-600 hover:text-gray-800 px-3 py-2 border border-gray-200 p-3 rounded-2xl">
            Clear Drafts
          </button>
          <button className="text-gray-600 hover:text-gray-800 border border-gray-200 p-3 rounded-2xl">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative w-full lg:flex-1 max-w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search & Filter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <div className="flex items-center gap-3">
          <SlidersHorizontal
            className="w-11.5 h-11.5 rounded text-blue-500 cursor-pointer border border-gray-200 p-3 bg-white"
            onClick={() => setIsDateFilterOpen(true)}
          />

          <button className="flex items-center gap-2 px-4 py-2.5 text-blue-600 bg-white border border-gray-200 rounded-lg hover:bg-blue-50">
            <Calendar className="w-5 h-5" />
            <span className="text-md">Last 7 days:</span>
            <span className="text-md font-medium">
              Feb 1, 2025 - Feb 7, 2025
            </span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 gap-6 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-35 py-3 rounded-lg text-md font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-200 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === userData.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("userName")}
                    className="flex items-center hover:text-gray-900"
                  >
                    User Name/ID
                    {getSortIcon("userName")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("createdAt")}
                    className="flex items-center hover:text-gray-900"
                  >
                    Created At
                    {getSortIcon("createdAt")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("emailId")}
                    className="flex items-center hover:text-gray-900"
                  >
                    Email ID
                    {getSortIcon("emailId")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("mobile")}
                    className="flex items-center hover:text-gray-900"
                  >
                    Mobile
                    {getSortIcon("mobile")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("noOfAccounts")}
                    className="flex items-center hover:text-gray-900"
                  >
                    No. Of Accounts
                    {getSortIcon("noOfAccounts")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-gray-700">
                  <button
                    onClick={() => handleSort("gender")}
                    className="flex items-center hover:text-gray-900"
                  >
                    Gender
                    {getSortIcon("gender")}
                  </button>
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-black ">
                  Action
                  <MoreVertical className="w-6 h-6 ml-1 inlin6 text-black p-1 bg-white rounded" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {userData.map((user) => (
                <tr
                  key={user.id}
                  className={`hover:bg-gray-50 ${
                    selectedRows.has(user.id) ? "bg-blue-50" : ""
                  } ${user.isSelected ? "bg-blue-50" : ""}`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(user.id) || user.isSelected}
                      onChange={() => handleRowSelect(user.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user.userName}
                      </div>
                      <div className="text-xs text-blue-600">{user.handle}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {user.createdAt}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                      {user.emailId}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {user.mobile}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {user.noOfAccounts}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {user.gender}
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setOpenPopup(openPopup === user.id ? null : user.id)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      {openPopup === user.id && (
                        <ActionPopup userId={user.id} />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-4 bg-white border-t border-gray-200 mt-0">
        <div className="flex items-center gap-2">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-600">Items Per Page</span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-gray-100 rounded disabled:opacity-50">
            <ChevronsLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded disabled:opacity-50">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <div className="flex items-center gap-1 px-2">
            <button className="px-3 py-1.5 text-sm text-white bg-blue-500 rounded">
              1
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
              2
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
              3
            </button>
            <span className="px-1 text-gray-400">...</span>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
              58
            </button>
          </div>

          <button className="p-2 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <ChevronsRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Jump To Page</span>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
            className="border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      </div>
      {isDateFilterOpen && (
        <DateFilterModal
          isOpen={isDateFilterOpen}
          onClose={() => setIsDateFilterOpen(false)}
        />
      )}
    </div>
  );
};

export default AllUsers;
