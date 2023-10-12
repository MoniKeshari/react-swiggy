import React from 'react'
import styles from "../../style/carousel.module.scss";
import CarouselCard from "../carouselcomponent/CarouselCard";
import data from "../../apiResponse";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
      
            <Carousel responsive={responsive}>
                {data.map((item, index) => {
                    return (

                        <div key={index} className={styles.card_wrapper_data}>
                            <CarouselCard key={item.id} data={item} />
                        </div>

                    )
                }

                )}

            </Carousel>
     



    )
}

export default CarouselComponent