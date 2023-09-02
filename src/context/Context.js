import { createContext, useContext, useState } from "react";


// context creation
const context = createContext();


// custom provider
const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    return (
        <context.Provider value={[data, setData]}>
            {children}
        </context.Provider>
    )
}

// created custom hook
const useData = () => useContext(context);

export { useData, ContextProvider };
