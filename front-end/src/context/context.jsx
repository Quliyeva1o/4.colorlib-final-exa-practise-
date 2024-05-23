import { createContext, useEffect, useState } from "react";

export const MyContext = createContext("");
export const MyBasketContext = createContext("");
export const MyWishListContext = createContext("");

import React from "react";
import { getAll } from "../API/requests";

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const localBasket = JSON.parse(localStorage.getItem("basket"));
    const localWish = JSON.parse(localStorage.getItem("wishList"));
    const [basket, setBasket] = useState(localBasket ? localBasket : []);
    const [wishList, setWishList] = useState(localWish ? localWish : []);
    useEffect(() => {
        getAll().then((res) => {
            setItems(res.data);
        });
    }, []);
    return (
        <>
            <MyWishListContext.Provider value={{wishList,setWishList}}>
                <MyBasketContext.Provider value={{ basket, setBasket }}>
                    <MyContext.Provider value={{ items, setItems }}>
                        {children}
                    </MyContext.Provider>
                </MyBasketContext.Provider>
            </MyWishListContext.Provider>
        </>
    );
};

export default ContextProvider;
