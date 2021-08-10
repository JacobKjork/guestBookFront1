import React from "react";
import MainProvider, { MainContext } from "../contex/manicontext";
import { useContext } from "react";

function SearchQuery() {
    const { setSearchQuery } = useContext(MainContext);

    return (
        <input type="text" placeholder="Search..." onChange={
            (e) => { setSearchQuery(e.target.value) }
        }>

        </input>
    );
}
export default SearchQuery;