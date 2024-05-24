import React, { useContext, useEffect, useState } from "react";
import { MyBasketContext, MyContext, MyWishListContext } from "../../context/context";
import styles from "./index.module.scss";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { delOne } from "../../API/requests";
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Cards = () => {
    const { items, setItems } = useContext(MyContext);
    const [filteredd, setFiltered] = useState(items.length > 0 ? items : [])
    const [sortValue, setSortValue] = useState('');

    const handleDel = (id) => {
        delOne(id);
        const filtered = items.filter((x) => x._id != id);
        setItems(filtered);
    };
    const { basket, setBasket } = useContext(MyBasketContext);
    const { wishList, setWishList } = useContext(MyWishListContext);
    const handleBasket = (item) => {
        const found = basket.find((x) => x._id == item._id);
        if (found) {
            found.count += 1;
            setBasket([...basket]);
            localStorage.setItem("basket", JSON.stringify([...basket]));
        } else {
            const newBasketItem = {
                count: 1,
                ...item,
            };
            setBasket([...basket, newBasketItem]);
            localStorage.setItem("basket", JSON.stringify([...basket, newBasketItem]));
        }
    };

    const handleWishList = (item) => {
        const found = wishList.find((x) => x._id === item._id);
        if (found) {
            const filtered = wishList.filter((x) => x._id !== found._id);
            setWishList(filtered);
            localStorage.setItem("wishList", JSON.stringify(filtered));
        } else {
            setWishList([...wishList, item]);
            localStorage.setItem("wishList", JSON.stringify([...wishList, item]));
        }
    };
    const handleSearch = (n) => {
        console.log(n);
        setFiltered(items.filter((x) => x.title.includes(n)))
    }
    useEffect(() => {
        setFiltered(items)
    }, [items])
    console.log(filteredd);
   
    const handleSort = (value) => {
        setSortValue(value);
        let sortedItems = [...filteredd];
        if (value === 'a-z') {
            sortedItems.sort((a, b) => a.newPrice - b.newPrice);
        } else if (value === 'z-a') {
            sortedItems.sort((a, b) => b.newPrice - a.newPrice);
        }
        setFiltered(sortedItems);
    };
    return (
        <>
    <Helmet>
        <title>home</title>
    </Helmet>

            <div className="secTitle">
                <h1>New Arrivals</h1>
            </div>
            <div className="container">
                <div><TextField id="outlined-basic" label="search by name" variant="outlined" onChange={(e) => { handleSearch(e.target.value) }} />
                  <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort by Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Sort by Price"
                            value={sortValue}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <MenuItem value={'a-z'}>Low to High</MenuItem>
                            <MenuItem value={'z-a'}>High to Low</MenuItem>
                        </Select>
                    </FormControl>

                </div>

                <div className={` ${styles.cards}`}>
                    {filteredd.map((item, idx) => {
                        return (
                            <>
                                <div style={{ position: "relative" }}>
                                    {item.disPer > 0 && (
                                        <p
                                            style={{
                                                color: "#fff",
                                                position: "absolute",
                                                right: "0",
                                                alignSelf: "right",
                                                textAlign: "right",
                                                display: "inline-block",
                                                backgroundColor: "#FE4C50",
                                                borderRadius: "4px",
                                                padding: "10px",
                                            }}
                                        >
                                            -$ {item.disPer}
                                        </p>
                                    )}

                                    <Button onClick={() => { handleWishList(item) }}>{wishList.find((x) => x._id == item._id) ? <FavoriteIcon /> : <FavoriteBorderIcon />
                                    }</Button>
                                    <img src={item.img} alt="" />
                                    <h1>{item.title}</h1>
                                    <p>
                                        {item.newPrice}{" "}
                                        {
                                            <span>
                                                {item.oldPrice > 0 && item.oldPrice}
                                            </span>
                                        }
                                    </p>
                                    <Button
                                        onClick={() => {
                                            handleDel(item._id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                    <Button><Link to={`detail/${item._id}`}>detail</Link></Button>
                                    <div className={styles.baskbtn}>

                                        <Button
                                            onClick={() => {
                                                handleBasket(item);
                                            }}
                                        >
                                            add to basket
                                        </Button>

                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div></div>
        </>
    );
};

export default Cards;
