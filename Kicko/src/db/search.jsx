import { createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchProvider = ({children}) =>{

    const [searchValue, setSearchValue] = useState("")

    const setValue = (val) =>{
        setSearchValue(val);
    }

    return(
        <SearchContext.Provider value={{searchValue, setValue}}>
            {children}
        </SearchContext.Provider>
    )
}