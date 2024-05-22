import React from "react";
import styles from "./index.module.scss"
const SecondSec = () => {
    return (
        <>
            <div  className={`container d-flex justify-content-between ${styles.secsec}`}>
                <div>
                    <h2>Women's</h2>
                    <img
                        src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
                        alt=""
                    />
                </div>
                <div>
                <h2 >ACCESSORIES'S</h2>

                    <img
                        src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
                        alt=""
                    />
                </div>
                <div>
                <h2>men's</h2>

                    <img
                        src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default SecondSec;
