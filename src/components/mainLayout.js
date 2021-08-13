import React, { useContext, useState } from "react"
import MainProvider, { MainContext, } from "../contex/manicontext"
import PaginationTest from "./paginationTest"
import SearchQuery from "./searchQuery"
import Root from "./root";
import Users from "./Users";


function MainLayout({ children }) {
    return (

        <MainProvider>
            <NoProvider>{children}</NoProvider>
        </MainProvider>
    )
}



function NoProvider({ children }) {
    const { namm, setNamn } = useContext(MainContext)
    const [page, setPage]=useState("users")
    return (
        <div style={{ width: '100%', height: '100%', clear: 'both' }}>



            <h1>Plats för header i mainLayout</h1>
            <div style={{ float: 'left', display: 'inline', width: '20%', 'minMeight': '800px' }} ><nav >
                <ul>
                    <li><a href="#" onClick={(e)=>{setPage("notSetYet")}} >Not Set Yet</a></li>
                    <li><a href="#" onClick={(e)=>{setPage("posts")}} >Posts</a></li>
                    <li><a href="#" onClick={(e)=>{setPage("users")}} >Users</a></li>
                </ul> </nav>
                <br />
            </div>
            {page == "users" ? <Users/> : null}
            {page == "posts" ? <div><SearchQuery /><Root /></div> : null}
            
            {children}
            <h1>Plats för footer i mainLayout</h1>
        </div>
    )
}

export default MainLayout;