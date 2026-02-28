"use client";

import React, { ReactNode, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Column<T> = {
  id: string;
  header: string | ((t: (key: string) => string) => ReactNode);
  cell: (row: T, index: number) => ReactNode;
  className?: string;
  headerClassName?: string;
};

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor?: (row: T, index: number) => string | number;
  emptyMessage?: string | ReactNode;
  className?: string;
  minWidth?: string;
  gridTemplateColumns: string;

  // New props
  searchable?: boolean;
  paginated?: boolean;
  pageSize?: number;          // default 10
  searchPlaceholder?: string;
}

export default function DataTable<T>({
  data,
  columns,
  keyExtractor = (_, i) => i,
  emptyMessage = "No data available",
  className = "",
  minWidth = "min-w-[900px]",
  gridTemplateColumns,

  searchable = false,
  paginated = false,
  pageSize = 10,
  searchPlaceholder = "Search...",
}: DataTableProps<T>) {
  const { t } = useTranslation();

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered data (memoized)
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearch = searchTerm.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const value = col.cell(row, 0); // We render once → get string-ish value
        if (typeof value === "string") {
          return value.toLowerCase().includes(lowerSearch);
        }
        if (React.isValidElement<{ children?: React.ReactNode }>(value)) {
          const children = value.props.children;

          if (typeof children === "string") {
            return children.toLowerCase().includes(lowerSearch);
          }
        }
        return false;
      })
    );
  }, [data, searchTerm, columns]);

  // Paginated slice
  const paginatedData = useMemo(() => {
    if (!paginated) return filteredData;

    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize, paginated]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const showPagination = paginated && filteredData.length > pageSize;

  // Reset page when filter changes and current page becomes invalid
  useMemo(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const emptyContent =
    typeof emptyMessage === "string" ? t(emptyMessage) : emptyMessage;

  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
      {/* Search bar */}
      {searchable && (
        <div className="p-4 dark:bg-gray-800/50">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to page 1 on new search
            }}
            placeholder={t(searchPlaceholder)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <div className={`${minWidth} text-sm`}>
          {/* Header */}
          <div
            className={`grid ${gridTemplateColumns} bg-[var(--content-background)] p-3 font-medium text-xs uppercase tracking-wide`}
          >
            {columns.map((col) => (
              <div key={col.id} className={col.headerClassName}>
                {typeof col.header === "function" ? col.header(t) : col.header}
              </div>
            ))}
          </div>

          {/* Body */}
          {paginatedData.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {searchTerm ? t("No matching results") : emptyContent}
            </div>
          ) : (
            paginatedData.map((row, rowIndex) => (
              <div
                key={keyExtractor(row, rowIndex)}
                className={`grid ${gridTemplateColumns} p-3 items-center border-t border-[var(--bg-2)] hover:bg-gray-50/50 transition-colors`}
              >
                {columns.map((col) => (
                  <div
                    key={col.id}
                    className={`whitespace-nowrap ${col.className || ""}`}
                  >
                    {col.cell(row, rowIndex)}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            Showing {(currentPage - 1) * pageSize + 1}–
            {Math.min(currentPage * pageSize, filteredData.length)} of{" "}
            {filteredData.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ← {t("Prev")}
            </button>

            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
              let pageNum: number;

              if (totalPages <= 7) {
                pageNum = i + 1;
              } else if (currentPage <= 4) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 3) {
                pageNum = totalPages - 6 + i;
              } else {
                pageNum = currentPage - 3 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {t("Next")} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}