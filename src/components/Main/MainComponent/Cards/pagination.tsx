import React from "react";

type PaginationProps = {
  currentPage: number;
  hasNextPage: boolean;
  paginate: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  hasNextPage,
  paginate,
}) => {
  const handlePageChange = (page: number) => {
    paginate(page);
  };

  return (
    <div className="pagination text-yellow-300">
      <button className="btn px-5 text-2xl"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Back
      </button>
      <span className="number px-2 border-2 border-yellow-300 rounded-3xl text-2xl">{currentPage}</span>
      <button className="btn px-5 text-2xl"
        disabled={!hasNextPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

