import { useDispatch } from "react-redux";
import { useSearchParams  } from "react-router-dom";
import { useEffect } from "react";
import './App.scss';
import Search from '../search/Search';
import Table from '../table/Table';
import { setCurrentPage } from "../pagination/pageSlice";

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("page") === null) {
      dispatch(setCurrentPage(1));
    } else {
      dispatch(setCurrentPage(Number(searchParams.get("page"))));
    }
  }, [dispatch, searchParams]);

  return (
    <div className="container">
      <Search />
      <Table/>
    </div>
  );
}

export default App;
