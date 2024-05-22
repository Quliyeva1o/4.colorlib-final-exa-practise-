import { FreeMode, Pagination } from "swiper/modules";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { MyContext } from "../../context/context";
import styles from './index.module.scss'
const BestSellers = () => {
    const { items, setItems } = useContext(MyContext);
    return (
        <>
            <div className="container">
                <div className="secTitle">
                    <h1>Best Sellers</h1>
                </div>
                <Swiper className={`${styles.card} mySwiper `}
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                  
                >
                    {items.map((item, idx) => {
                       return(
                        <SwiperSlide>      <div>
                        <p style={{ color: "red" }}>
                            {item.disPer > 0 ? item.disPer : ""}
                        </p>
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
                      
                    </div> </SwiperSlide>
                       )
                    })}
                  
                </Swiper>
            </div>
        </>
    );
};

export default BestSellers;
