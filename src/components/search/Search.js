import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../table/filterSlice";
import { setCurrentPage } from "../pagination/pageSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {search} = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
    dispatch(setCurrentPage(1));
    navigate(`/`);
  };
  const handleSubmit = (e) => {
		e.preventDefault();
	};

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Поиск"
        className="search__input" />
      <button 
        type="submit"
        title="Поиск"
        className="search__btn"></button>
    </form>
  );
};
export default Search;