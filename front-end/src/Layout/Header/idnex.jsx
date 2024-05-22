import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.scss'
const Header = () => {
    return (
        <>
           <div className={styles.header}>
           <div className="container ">
              <div className={styles.nav}>
              <div>
                    <h1>COLOSHOP</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link>HOME</Link>
                        </li>
                        <li>
                            <Link>SHOP</Link>
                        </li>
                        <li>
                            <Link>PROMOTION</Link>
                        </li>

                        <li>
                            <Link>PAGES</Link>
                        </li>
                        <li>
                            <Link to={"basket"}>BASKET</Link>
                        </li>
                        <li>
                            <Link to={'add-page'}>ADD</Link>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
           </div>
        </>
    );
};

export default Header;
