import React from "react";

const PaginationFooter = ({ page, setPage, perPage, setPerPage, totalPages }) => {
  return (
    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-2">
        <select
          className="text-sm border border-gray-200 rounded px-2 py-1"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span className="text-sm text-gray-600">Items Per Page</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          disabled={page === 1}
          onClick={() => setPage(1)}
          className="px-2 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >‹‹</button>
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-2 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >‹</button>
        <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full">{page}</span>
        <span className="px-2 text-sm text-gray-500">of {totalPages || 1}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="px-2 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >›</button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
          className="px-2 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >››</button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Jump To Page</span>
        <select
          className="text-sm border border-gray-200 rounded px-2 py-1"
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PaginationFooter;
