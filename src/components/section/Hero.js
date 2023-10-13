import React, { useEffect, useState } from "react";

import CarouselComponentclass from "../../style/carousel.module.scss";

import cardwrapperclass from "../../style/wrapper.module.scss";
import CarouselComponent from "../carouselcomponent/CarouselComponent";
import CardCarouselComponent from "../carouselcomponent/CardCaraousel";
import CardDataComponent from "../cardcomponent/CardComponent";
import CardWrapper from "../carouselcomponent/CardWrapper";
import Strapper from "../strappercomponent/Strapper";
const HeroSection = () => {
 
    return (
        <div>
            <div className={`continer-fluid ${cardwrapperclass.container_fluid}`}>
                <div className={`container ${cardwrapperclass.container_div}`}>
                    <CardWrapper />
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                </div>
                <div className="container mt-3">
                    <div className={CarouselComponentclass.carousel_data_}>
                        <CarouselComponent />
                    </div>


                    <div className={CarouselComponentclass.wrapper_card}>
                        <CardCarouselComponent />
                    </div>

                    <CardDataComponent />

                </div>
            </div>
            <div className="container">
                <Strapper />
            </div>
        </div>


    );
};

export default HeroSection;
