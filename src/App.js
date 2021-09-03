import "./App.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Pagination from "./components/Pagination";
import AxiosPaginate from "./components/AxiosPaginate";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50)); //data အရေအတွက်

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10; //ကိုယ်ပြချင်တဲ့ ပမာဏ
  
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage) //0 => 10 changing occur (0,10) (20,30)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage); // 50/10=> 5ခုပြ

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };  // 10 pages changes

  return (
    <div className="App">
      {/* {displayUsers}
      <ReactPaginate

      //Label
        // previousLabel={"Previous"}
        // nextLabel={"Next"}

        pageCount={pageCount} //Required. The total number of pages.

        onPageChange={changePage} //10 pages change

        //CSS
        // containerClassName={"paginationBttns"}
        // previousLinkClassName={"previousBttn"}
        // nextLinkClassName={"nextBttn"}
        // disabledClassName={"paginationDisabled"}
        // activeClassName={"paginationActive"}
      /> */}
      {/* <Pagination/> */}
      <AxiosPaginate/>
    </div>
  );
}

export default App;
