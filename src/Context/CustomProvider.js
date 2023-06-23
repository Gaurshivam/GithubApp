import React, { useState } from "react";
import MyContext from "./Mycontext";

export const CustomProvider = ({children}) =>{
    const [Gitdata, setGitdata] = useState({});

    const AddData = (Gitdata) => {
        setGitdata(Gitdata)
    }
    return(
        <MyContext.Provider value={{Gitdata,AddData}}>
        {children}
        </MyContext.Provider>
    )
}