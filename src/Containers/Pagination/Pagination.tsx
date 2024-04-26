import "./Pagination.scss";

type PaginationProps = {
  cardsPerPage: number;
  length: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  cardsPerPage,
  length,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(length / cardsPerPage);

  const prevPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 1) {
      onPageChange(newPage);
    }
  };

  const nextPage = () => {
    const newPage = currentPage + 1;
    if (currentPage >= totalPages && currentPage < 13) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="pagination">
      <button onClick={prevPage} className="pagination__previous-button">
        Previous
      </button>
      <p className="pagination__counter">{`${currentPage}/13`}</p>
      <button onClick={nextPage} className="pagination__next-button">
        Next
      </button>
    </div>
  );
};

export default Pagination;
