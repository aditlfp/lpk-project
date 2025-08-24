const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   if (totalPages <= 1) return null; // kalau cuma 1 halaman, gak usah tampil

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        {/* Prev Button */}
        <button
          className="join-item btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          «
        </button>

        {/* Number Buttons */}
        {pages.map((page) => (
          <button
            key={page}
            disabled={currentPage === page}
            onClick={() => onPageChange(page)}
            className={`join-item btn ${
              currentPage === page ? "btn-primary" : "btn-ghost"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className="join-item btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
