import { useSelector, useDispatch } from "react-redux";
import { useGetPostsQuery } from '../../services/api/api';
import { setFilter } from "./filterSlice";
import Pagination from '../pagination/Pagination';

const Table = () => {
  const {data: posts, isLoading, isError} = useGetPostsQuery();
  const {currentPage, perPage} = useSelector((state) => state.page);
  const {field, search} = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filterFields = ['id', 'title', 'body'];

  const compare = (a, b) => {
    if (field === 'id') {
      return Number(b) - Number(a);
    } else {
      return `${a[field]}`.localeCompare(`${b[field]}`);
    }
  };

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const filteredPost = posts?.filter(post => {
    for (let fieldName of filterFields) {
      const val = `${post[fieldName]}`;
      if (val.includes(search)) return true;
    }
    return false;
  });

  const currentPosts = filteredPost && field
    ? filteredPost
      .sort(compare)
      .slice(indexOfFirstPost, indexOfLastPost) 
    : filteredPost
      ?.slice(indexOfFirstPost, indexOfLastPost);

  const sort = (field) => {
    dispatch(setFilter(field));
  };

  if (isLoading) {
    return 'loading...';
  }
  if (isError) {
    return 'Error';
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td>
              <button 
                type="button" 
                className="table__sort"
                onClick={() => sort('id')}>ID</button>
            </td>
            <td>
              <button type="button" className="table__sort"
                onClick={() => sort('title')}>Заголовок</button>
            </td>
            <td>
              <button type="button" className="table__sort"
                onClick={() => sort('body')}>Описание</button>
            </td>
          </tr>
        </thead>
        <tbody>
          {(currentPosts.length > 0)
            ? currentPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            : <tr>
                <td colSpan={3}>Нет данных</td>
              </tr>
          }
        </tbody>
      </table>
      {(filteredPost.length > 0) && <Pagination totalPosts={filteredPost.length} />}
    </>
  );
};
export default Table;