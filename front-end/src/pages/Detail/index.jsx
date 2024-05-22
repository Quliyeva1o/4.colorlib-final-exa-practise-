import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../API/requests";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./index.module.scss"
const Detail = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getOne(id).then((res) => {
            setItem(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <>
          


<div className={styles.cards}>
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
                              
                                <div className={styles.baskbtn}>
                                    
                                    <Button
                                        onClick={() => {
                                            handleBasket(item);
                                        }}
                                    >
                                        add to basket
                                    </Button>
                                </div>
                            </div></div>
        </>
    );
};

export default Detail;
