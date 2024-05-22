import React from "react";
import styles from "./index.module.scss";
const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={`container ${styles.text}`}>
                    <h4>SPRING / SUMMER COLLECTION 2017</h4>
                    <h1>Get up to 30% Off <br /> New Arrivals</h1>
                    <button>SHOP NOW</button>
                </div>
            </div>
        </>
    );
};

export default Hero;
