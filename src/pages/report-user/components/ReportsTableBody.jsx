import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, MessageCircle, Users, MessageSquare, Flag, MoreVertical, ArrowDownUp } from "lucide-react";

const typeIcons = {
  post: FileText,
  comment: MessageCircle,
  profile: Users,
  message: MessageSquare,
  flag: Flag,
};

const formatDate = (date) => {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return date;
  }
};

const ReportsTableBody = ({ rows }) => {
  const navigate = useNavigate();

  // ✅ Navigate with path param instead of query string
  const handleRowClick = (id) => {
    navigate(`/user-profile/${id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[100px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Date</span>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Ticket Number</span>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4
               py-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Reported For</span>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4  py-3 text-left">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Total Report</div>
                    <div className="text-xs text-gray-500 font-normal">User ID</div>
                  </div>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Report Category</span>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Total Rep</div>
                    <div className="text-xs text-gray-500 font-normal">Content/Pr</div>
                  </div>
                  <ArrowDownUp className="w-5 h-4.5 text-black bg-white p-0.5 rounded-sm" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, idx) => {
              const TypeIcon = typeIcons[row.type.toLowerCase()] || FileText;
              return (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                  onClick={() => handleRowClick(row.id)}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      defaultChecked={row.checked}
                      className="rounded border-gray-300"
                      onClick={(e) => e.stopPropagation()} // prevent row click
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{formatDate(row.date)}</td>
                  <td className="px-4 py-4 text-sm text-blue-600">{row.ticket}</td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-red-600">{row.name}</div>
                    <div className="text-xs text-gray-500">ID: {row.id}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center">{row.totalUser}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <TypeIcon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 capitalize">{row.type}</div>
                        <div className="text-xs text-blue-500 truncate max-w-[150px]">{row.link}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 text-center">{row.totalContent}</td>
                  <td className="px-4 py-4">
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent row click when clicking menu
                      }}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTableBody;