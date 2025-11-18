const Pagination = ({ page, total, perPage, setFilters }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-3 mt-4">
      <button
        disabled={page === 1}
        onClick={() => setFilters((f) => ({ ...f, page: f.page - 1 }))}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1">Page {page} / {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => setFilters((f) => ({ ...f, page: f.page + 1 }))}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
