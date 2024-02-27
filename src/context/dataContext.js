import { createContext, useContext, useState } from "react";
import { data } from '../data/data'

//make the context, so when it's called, i can access state / funcs etc
//this our global state
const DataContext = createContext({
    data: data
});

const DataProvider = ({ children }) => {
    //so make a state slice to manipulate the context (global state)
    const [dataState, setDataState] = useState(data)

    return (
        <DataContext.Provider value =
            {{
                //error here???
                dataState: dataState,
                setDataState
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext)
}

export { DataProvider  };