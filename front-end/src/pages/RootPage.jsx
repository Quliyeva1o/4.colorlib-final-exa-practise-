import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/idnex";
const RootPage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default RootPage;
