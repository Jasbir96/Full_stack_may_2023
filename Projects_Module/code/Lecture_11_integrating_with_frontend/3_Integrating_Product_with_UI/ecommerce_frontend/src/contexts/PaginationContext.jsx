import React, { useContext,useState } from "react";

const PaginationContext = React.createContext();

export default function PaginationProvider({ children }) {
    // state var , methods -> are at the same place -> you do not have to pass the props
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const pageProps = {
        pageSize, pageNum,
        setPageNum,
        setPageSize
    }
    return <PaginationContext.Provider value={pageProps} >
        {children}
    </PaginationContext.Provider>
}

// customHook
export const usePaginationContext = () => {
    return useContext(PaginationContext)
}
