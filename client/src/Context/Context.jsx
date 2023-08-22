import React, { createContext, useReducer, useEffect } from 'react';
import { reducer } from "./Reducer";
import Cookies from 'js-cookie';


export const GlobalContext = createContext("Initial Value");
let data = {
   
    token: Cookies.get('token') 
};

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        Cookies.set('statetoken', state.token)
    }, [state.token]);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
