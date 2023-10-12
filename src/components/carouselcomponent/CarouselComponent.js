import React from 'react'
import styles from "../../style/carousel.module.scss";
import Carousel from 'react-multi-carousel';
import CarouselCard from "../carouselcomponent/CarouselCard";
import data from "../../apiResponse";
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

        >
            <div className={styles.carousel_wrapper}>
                {data.map((item, index) => {
                    return (
                      
                            <div key={index} className={styles.card_wrapper_data}>
                                <CarouselCard key={item.id} data={item} />
                            </div>
                       
                    )
                }

                )}
            </div>
        </Carousel>

    )
}

export default CarouselComponent