"use client";

import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
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

  // Search & pagination
  searchable?: boolean;
  paginated?: boolean;
  pageSize?: number;
  searchPlaceholder?: string;

  // Edit / Delete — controlled entirely by the parent
  onEdit?: (row: T, index: number) => void;
  onDelete?: (row: T, index: number) => void;
  actionsHeader?: string; // default "Actions"
}

// ─── Helper ────────────────────────────────────────────────────────────────
function extractTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromReactNode).join(" ");
  if (React.isValidElement(node))
    return extractTextFromReactNode(
      (node.props as { children?: ReactNode }).children
    );
  return "";
}

// ─── Component ─────────────────────────────────────────────────────────────
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
  onEdit,
  onDelete,
  actionsHeader = "Actions",
}: DataTableProps<T>) {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Whether to render the actions column at all
  const hasActions = Boolean(onEdit || onDelete);

  // ─── Search ──────────────────────────────────────────────────────────────
  const filteredData = useMemo(() => {
    if (!searchable || !searchTerm.trim()) return data;
    const term = searchTerm.toLowerCase().trim();

    return data.filter((row, rowIndex) =>
      columns.some((col) => {
        const content = col.cell(row, rowIndex);
        if (typeof content === "string") return content.toLowerCase().includes(term);
        if (typeof content === "number") return String(content).includes(term);
        if (React.isValidElement(content))
          return extractTextFromReactNode(content).toLowerCase().includes(term);
        return false;
      })
    );
  }, [data, searchTerm, columns, searchable]);

  // ─── Pagination ──────────────────────────────────────────────────────────
  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Clamp current page whenever totals change
  React.useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  // Reset to page 1 on new search
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const startIndex = paginated ? (currentPage - 1) * pageSize : 0;

  const paginatedData = useMemo(() => {
    if (!paginated) return filteredData;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, startIndex, pageSize, paginated]);

  // ─── Page numbers — shows up to 7 buttons with ellipsis ──────────────────
  const getPageNumbers = (): (number | "...")[] => {
    const MAX_VISIBLE = 7;
    if (totalPages <= MAX_VISIBLE) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [1];
    const rangeStart = Math.max(2, currentPage - 2);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 2);

    if (rangeStart > 2) pages.push("...");
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  // ─── Computed grid with optional actions column ───────────────────────────
  const effectiveGridCols = hasActions
    ? `${gridTemplateColumns} auto`
    : gridTemplateColumns;

  // ─── JSX ─────────────────────────────────────────────────────────────────
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
      {/* Search bar */}
      {searchable && (
        <div className="p-4 border-b border-gray-300">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t(searchPlaceholder)}
            aria-label="Search table"
            className="w-full max-w-md px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <div className={`${minWidth} text-sm text-center`}>
          {/* Header */}
          <div
            className={`grid ${effectiveGridCols} bg-[var(--content-background)] p-3 font-medium text-xs uppercase tracking-wide sticky top-0 z-10`}
          >
            {columns.map((col) => (
              <div key={col.id} className={col.headerClassName}>
                {typeof col.header === "function" ? col.header(t) : col.header}
              </div>
            ))}

            {hasActions && (
              <div className="text-end pr-1">{t("table.actions")}</div>
            )}
          </div>

          {/* Body */}
          {paginatedData.length === 0 ? (
            <div className="p-12 text-center text-gray-500 italic">
              {searchTerm.trim()
                ? t("No matching results")
                : typeof emptyMessage === "string"
                ? t(emptyMessage)
                : emptyMessage}
            </div>
          ) : (
            paginatedData.map((row, localIdx) => {
              // Always pass the GLOBAL index to callbacks and keyExtractor
              // so the parent receives the correct position in `data`.
              const globalIdx = startIndex + localIdx;

              return (
                <div
                  key={keyExtractor(row, globalIdx)}
                  className={`grid ${effectiveGridCols} p-3 items-center border-t border-gray-100 hover:bg-gray-50/70 transition-colors`}
                >
                  {columns.map((col) => (
                    <div key={col.id} className={`min-w-0 ${col.className || ""}`}>
                      {col.cell(row, globalIdx)}
                    </div>
                  ))}

                  {hasActions && (
                    <div className="flex items-center justify-end gap-2 pr-1">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(row, globalIdx)}
                          aria-label="Edit row"
                          className="p-1.5 rounded text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Pencil size={15} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row, globalIdx)}
                          aria-label="Delete row"
                          className="p-1.5 rounded text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Pagination */}
      {paginated && totalItems > pageSize && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 text-sm border-t border-gray-100">
          <div className="text-gray-600">
            {t("table.Showing")}{" "}<span dir="ltr">{startIndex + 1}–{Math.min(startIndex + pageSize, totalItems)}</span> {t("table.of")}{" "}
            {totalItems}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="px-2.5 py-1.5 rounded border disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-0.5 text-xs font-medium"
            >
              <ChevronLeft size={14} className="flip-in-rtl"/>
              {t("pagination.Previous")}
            </button>

            {getPageNumbers().map((page, i) =>
              page === "..." ? (
                <span key={`ellipsis-${i}`} className="px-1 text-gray-400 select-none">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`px-3 py-1.5 rounded border text-xs font-medium min-w-[2rem] ${
                    currentPage === page
                      ? "bg-black text-white border-black"
                      : "hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="px-2.5 py-1.5 rounded border disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-0.5 text-xs font-medium"
            >
              {t("pagination.Next")}
              <ChevronRight size={14} className="flip-in-rtl"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}