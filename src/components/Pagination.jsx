import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const visiblePages = 4; // Hiển thị 4 trang đầu tiên
  const startPages = Array.from({ length: visiblePages }, (_, i) => i + 1);
  const endPages = Array.from({ length: 2 }, (_, i) => totalPages - 1 + i);

  let middlePages = [];
  if (currentPage > visiblePages && currentPage < totalPages - 2) {
    middlePages = [currentPage - 1, currentPage, currentPage + 1];
  }

  const pageNumbers =
    totalPages <= 7
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [...startPages, "...", ...middlePages, "...", ...endPages];

  return (
    <div className="d-flex justify-content-end align-items-center mt-4" style={{marginBottom: "74px"}}>

        <i className="bi bi-chevron-left me-2" onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ cursor: "pointer" }}></i>

      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={index} className="mx-2">...</span>
        ) : (
          <button
            key={num}
            className={`btn mx-1 ${currentPage === num ? "btn-pink" : "btn-outline-secondary"}`}
            onClick={() => handlePageChange(num)}
            style={{ cursor: "pointer" }}
          >
            {num}
          </button>
        )
      )}

        <i className="bi bi-chevron-right ms-2" onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ cursor: "pointer" }}></i>
    </div>
  );
};

export default Pagination;
