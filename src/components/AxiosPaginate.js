import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios';


import '../App.css'

const AxiosPaginate = () => {
    // const [users, setUsers] = useState({ hits: [] });
    const [posts, setPosts] = useState({ hits: [] });

const [pageNumber, setPageNumber] = useState(0)

const changePage= ({selected}) =>{
    setPageNumber(selected)
}

const usersPerPage = 10;

const pagesVisited = pageNumber * usersPerPage;

const pageCount = Math.ceil(posts.hits.length / usersPerPage);

const pageCountPosts = Math.ceil(posts.hits.length / usersPerPage);

// const fetchData = async ()=>{
//     const posts_data = await axios('https://jsonplaceholder.typicode.com/posts');
//     setPosts(posts_data);
// };
// useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await axios(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setUsers({ hits: data });
//     };
//     fetchData();
//   }, [setUsers]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts({ hits: data });
    };
    fetchData();
  }, [setPosts]);


return (
    <div>
        {/* {users.hits &&
          users.hits.slice(pagesVisited,pagesVisited + usersPerPage).map(user=>{
            return(
                <div className="user">
            <h3>{user.email}</h3>
        </div>
            )
        })} */}
        {posts.hits &&
          posts.hits.slice(pagesVisited,pagesVisited + usersPerPage).map(post=>{
            return(
                <div>
                <h3><small className="mr-2">{post.id}.</small>{post.title}</h3>
        </div>
            )
        })}
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCountPosts} //Required. The total number of pages.
        onPageChange={changePage} //10 pages change
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
    </div>
)
}
export default AxiosPaginate
