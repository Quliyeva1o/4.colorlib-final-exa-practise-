import { createContext, useEffect, useState } from "react";

export const MyContext = createContext("");
export const MyBasketContext = createContext("");

import React from "react";
import { getAll } from "../API/requests";

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const localBasket = JSON.parse(localStorage.getItem("basket"));
    const [basket, setBasket] = useState(localBasket ? localBasket : []);
    useEffect(() => {
        getAll().then((res) => {
            setItems(res.data);
        });
    }, []);
    return (
        <>
            <MyBasketContext.Provider value={{ basket, setBasket }}>
                <MyContext.Provider value={{ items, setItems }}>
                    {children}
                </MyContext.Provider>
            </MyBasketContext.Provider>
        </>
    );
};

export default ContextProvider;
