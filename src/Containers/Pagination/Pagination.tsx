import "./Pagination.scss";
import LeftArrow from "../../assets/images/chevron-left.png";
import RightArrow from "../../assets/images/chevron-right.png";

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
      <img
        src={LeftArrow}
        onClick={prevPage}
        className="pagination__previous-button"
      />

      <p className="pagination__counter">{`${currentPage}/13`}</p>
      <img
        src={RightArrow}
        onClick={nextPage}
        className="pagination__next-button"
      />
    </div>
  );
};

export default Pagination;
