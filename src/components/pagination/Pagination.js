import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Pagination = ({totalPosts}) => {
  const {currentPage, perPage} = useSelector((state) => state.page);
  const pageNumbers = [];
  let [, setSearchParams] = useSearchParams();

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  };

  const paginate = pageNumber => {
    setSearchParams({page: pageNumber});
  };

  return (
    <div className="pagination">
      {currentPage > 1
        ? <span
            className="pagination__link pagination__link--btn"
            onClick={() => paginate(currentPage - 1)}>
            Назад
          </span>
        : <span 
            className="pagination__link pagination__link--btn disabled" >
            Назад
          </span>
      }
      <ul className="pagination__list">
        {pageNumbers.map(number => (
          <li key={number}>
            <span 
              onClick={() => paginate(number)}
              className={`pagination__link ${number === currentPage ? 'active' : ''}`} >
              {number}
            </span>
          </li>
        ))}
      </ul>
      {currentPage < pageNumbers.length
        ? <span 
            className="pagination__link pagination__link--btn"
            onClick={() => paginate(currentPage + 1)}>
            Далее
          </span>
        : <span 
            className="pagination__link pagination__link--btn disabled" >
            Далее
          </span>
      }
    </div>
  );
};
export default Pagination;