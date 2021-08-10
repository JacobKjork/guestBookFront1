import React, { useContext } from "react"
import MainProvider ,{ MainContext } from "../contex/manicontext"
import PaginationTest from "./paginationTest"
import SearchQuery from "./searchQuery"


function MainLayout ({children}){
    return(

        <MainProvider>
            <NoProvider>{children}</NoProvider>
        </MainProvider>
    )
}

function NoProvider({children}){
    const {namm,setNamn} = useContext(MainContext)
    return(
        <div>
            <h1>Plats för header i mainLayout</h1>
            <SearchQuery></SearchQuery>
            {children}
            
            <h1>Plats för footer i mainLayout</h1>
        </div>
    )
}

export default MainLayout;