import React from "react";
import CarouselComponentclass from "../../style/carousel.module.scss";
import cardwrapperclass from "../../style/wrapper.module.scss";
import CarouselComponent from "../carouselcomponent/CarouselComponent";
import CardCarouselComponent from "../carouselcomponent/CardCaraousel";
import CardDataComponent from "../cardcomponent/CardComponent";
import CardWrapper from "../carouselcomponent/CardWrapper";
import Strapper from "../strappercomponent/Strapper";
import strapperdata from "../../json/strapper";
import locality_json from "../../json/locality";
const HeroSection = () => {
    return (
        <div>
            <div className={`continer-fluid ${cardwrapperclass.container_fluid}`}>
                <div className={`container ${cardwrapperclass.container_div}`}>
                    <CardWrapper />
                </div>
            </div>
            <div className="container mt-4 mb-3">
                <div className={CarouselComponentclass.carousel_data_}>
                    <CarouselComponent />
                </div>
                <div className={CarouselComponentclass.divider_}></div>
            </div>

            <div className="container mt-3">
                <div className={CarouselComponentclass.wrapper_card}>
                    <CardCarouselComponent />
                </div>
                <div className={`${CarouselComponentclass.divider_} mt-4`}></div>
            </div>

            <div className="container mt-3 mb-3">
                <CardDataComponent />
                <div className={CarouselComponentclass.divider_}></div>
            </div>

            <div className="container mb-3">
                <Strapper strapperdata={strapperdata} heading="Restaurant Chains Near Me" />
                <div className={`${CarouselComponentclass.divider_} mt-4`}></div>
            </div>

            <div className="container mb-3">
                <Strapper strapperdata={locality_json} heading="Explore localities in and around Delhi" />
                <div className={`${CarouselComponentclass.divider_} mt-4`}></div>
            </div>
            <div className="container mb-5">
                <Strapper strapperdata={strapperdata} heading="More Food Options Near Me" />
            </div>
        </div>


    );
};

export default HeroSection;
