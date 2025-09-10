import React, { useState } from "react";
import { MessageSquare, Users, MessageCircle, Flag, FileText } from "lucide-react";
import { useLocation } from "react-router-dom";
import TopStats from "./components/TopStats";
import SearchFilterBar from "./components/SearchFilterBar";
import ReportsTableBody from "./components/ReportsTableBody";
import PaginationFooter from "./components/PaginationFooter";

const defaultStats = [
  { label: "Posts", value: 3800, icon: FileText, color: "bg-orange-100", iconColor: "text-orange-600" },
  { label: "Comments", value: 9830, icon: MessageCircle, color: "bg-green-100", iconColor: "text-green-600" },
  { label: "Profiles", value: 756, icon: Users, color: "bg-blue-100", iconColor: "text-blue-600" },
  { label: "Messages", value: 5600, icon: MessageSquare, color: "bg-purple-100", iconColor: "text-purple-600" },
  { label: "Flag", value: 139, icon: Flag, color: "bg-red-100", iconColor: "text-red-600" },
];

const defaultRows = [
  { date: "Aug 18, 2024", ticket: "124585675678652", name: "Praveen Dubey", id: "124585675678752", totalUser: "3", type: "post", link: "https://www.emilo.com/post", totalContent: "3", checked: true },
  { date: "Jan 27, 2024", ticket: "124585675678652", name: "Saleem Javed", id: "124585675678752", totalUser: "N/A", type: "comment", link: "https://www.emilo.com/comment", totalContent: "N/A", checked: false },
  { date: "Jun 30, 2024", ticket: "124585675678652", name: "Abhishek Gupta", id: "124585675678752", totalUser: "N/A", type: "post", link: "https://www.emilo.com/post", totalContent: "N/A", checked: false },
  { date: "Aug 4, 2024", ticket: "124585675678652", name: "Rohit Sahu", id: "124585675678752", totalUser: "1", type: "comment", link: "https://www.emilo.com/comment", totalContent: "1", checked: false },
  { date: "Dec 11, 2024", ticket: "124585675678652", name: "Siddharth Sharma", id: "124585675678752", totalUser: "4", type: "profile", link: "https://www.emilo.com/profile", totalContent: "4", checked: false },
];

const ReportsTable = ({ stats = defaultStats, rows = defaultRows }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const location = useLocation();

  // Filter rows by search
  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.id.includes(search)
  );

  // Pagination
  const startIndex = (page - 1) * perPage;
  const paginatedRows = filteredRows.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(filteredRows.length / perPage);

  return (
    <div className="p-6 sm:p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-4 mb-6 rounded-lg">
        <h2 className="text-md font-semibold text-gray-800">Reports</h2>
      </div>

      <TopStats stats={stats} />

      {/* Only show table components if not on flagged route */}
      {location.pathname !== '/reports/flagged' && (
        <>
          <SearchFilterBar search={search} setSearch={setSearch} />
          <ReportsTableBody rows={paginatedRows} />
          <PaginationFooter
            page={page}
            setPage={setPage}
            perPage={perPage}
            setPerPage={setPerPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default ReportsTable;