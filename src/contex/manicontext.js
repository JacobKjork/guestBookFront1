import React, { createContext, useState } from "react";

export const MainContext = createContext();


function MainProvider({ children }) {
    const [namn, setNamn] = useState("Hej Jacob detta är satt i MainContext");
    const[searchQuery,setSearchQuery]=useState("");

    return (
        <MainContext.Provider value={{ namn, setNamn,searchQuery,setSearchQuery }}>

            {children}
        </MainContext.Provider>
    );
}
export default MainProvider;