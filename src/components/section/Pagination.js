import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationComp = ({ totalPage, changePage, postPerPage }) => {
    const pageNums = [];

    for (let i = 1; i < Math.ceil(totalPage / postPerPage); i++) {
        pageNums.push(i);
    }

    return (
        <Pagination
            count={pageNums.length}
            onChange={(e, page) => changePage(page)}
        />
    );
};

export default PaginationComp;
