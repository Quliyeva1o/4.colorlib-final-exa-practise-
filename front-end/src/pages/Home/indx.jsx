import React from "react";

import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import SecondSec from "../../components/SecondSec";
import BestSellers from "../../components/BestSellers";

const Home = () => {
   
    return (
        <>
            <Hero />
            <SecondSec/>
            <Cards/>
            <BestSellers/>
            
        </>
    );
};

export default Home;
