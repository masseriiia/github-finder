import React, {useContext} from 'react';
import ReactPaginate from "react-paginate";
import Style from './Pagination.module.scss'
import AppContext from "../context";

const Pagination = () => {
    const { currentPage, setCurrentPage, reposPerPage, responseRep } = useContext(AppContext);

    return (
        <ReactPaginate
            className={Style.root}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(responseRep.length / reposPerPage)}
            onPageChange={(selectedPage) => setCurrentPage(selectedPage.selected)}
        />
    );
};

export default Pagination;