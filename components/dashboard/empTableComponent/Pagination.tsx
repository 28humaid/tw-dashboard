interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (val: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    type PageItem = number | "...";
    const pages: PageItem[] = [];

    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, totalPages);

    // Always show first page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-end gap-2 text-xs  mt-4 flex-wrap">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border rounded transition ${
              currentPage === page
                ? "bg-[var(--content-background)] border-black shadow-lg"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
