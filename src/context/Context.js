import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


// context creation
const context = createContext();


// custom provider
const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            if (res) {
                setData(res.data);
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
            alert('something went wrong in fetchdata');
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <context.Provider value={[data, setData]}>
            {children}
        </context.Provider>
    )
}

// created custom hook
const useData = () => useContext(context);

export { useData, ContextProvider };
