
import React, { useEffect, useState } from 'react'
import styles from "../../style/carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from '../cardcomponent/Card';
import { base_url_card } from '../../utils/constants';
const CardCarouselComponent = () => {
    const [apiResponse, setapiResponse] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const apiReq = await fetch(base_url_card)
        const response = await apiReq.json();
        setapiResponse(response.data.cards)
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

        <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            className={styles.carousel_card_}>

            {apiResponse.length > 0 && apiResponse[1]?.card?.card?.imageGridCards?.info?.map((item, index) => (


                <div key={index} className={styles.card_wrapper_data}>
                    <CardComponent key={item.id} data={item}
                        cardWrapperClass={styles.carousel_card_wrapper_tag}
                        cardContentTag={styles.cardContentDiv}
                        cardTitle={styles.cardTitle_title}
                        cardContent={styles.cardContent}
                        cardImageTag={styles.image_div}
                    />
                </div>

            ))
            }



        </Carousel>




    )
}

export default CardCarouselComponent;