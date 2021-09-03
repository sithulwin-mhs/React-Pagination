import React,{useState} from 'react'
import JsonData from '../MOCK_DATA.json'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const [users, setUsers] = useState(JsonData.slice(0,50));
    const [pageNumber, setPageNumber] = useState(0)

    const changePage =({selected})=>{
        setPageNumber(selected);
    }
    const usersPerPage = 10;

    const pagesVisited  = pageNumber * usersPerPage;

    const pageCount = Math.ceil(users.length / usersPerPage);

    // const displayUsers = users.slice(pagesVisited,pagesVisited + usersPerPage).map( user=>{
    //     return (
    //         <div>
    //             <h3>{user.firstName}</h3>
    //             <h3>{user.lastName}</h3>
    //             <h3>{user.email}</h3>
    //         </div>
    //     )
    // })
     
    return (
        <div>
            {users.slice(pagesVisited,pagesVisited + usersPerPage).map(user=>{
                return(
                    <div>
                {/* <h3>{user.firstName}</h3>
                <h3>{user.lastName}</h3> */}
                <h3>{user.email}</h3>
            </div>
                )
            })}
            <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            />
        </div>
    )
}

export default Pagination
