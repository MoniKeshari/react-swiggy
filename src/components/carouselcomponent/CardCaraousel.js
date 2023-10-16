
import React from 'react'
import styles from "../../style/carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from '../cardcomponent/Card';
import { isMobile } from '../../utils/custom';
import useApiCall from '../../utils/useApiCall';
const CardCarouselComponent = () => {
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
    const apiResponse=useApiCall()
    console.log(apiResponse, "apiResponse");
    const mobileText = apiResponse?.card?.card?.title;
    return apiResponse.length === 0 ? "Loading..." : (
        <>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className={styles.to_res}>
                        <h2>
                        Top restaurant chains in Delhi
                        </h2>
                    </div>
                </div>

            </div>
            <div className={styles.card_wrapp}>
                {!isMobile ? (<Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    className={styles.carousel_card_}>
                    {apiResponse?.card?.card?.imageGridCards?.info?.map((item) => (
                        <div key={item.id} className={styles.card_wrapper_data}>
                            <CardComponent data={item}
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
                ) : (`"api is not coming as a desktop so" ${mobileText}`)}
            </div>
        </>

    )

}

export default CardCarouselComponent;