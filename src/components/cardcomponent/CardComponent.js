import React from "react";
import style from "../../style/card.module.scss";
import ShimmerComponent from "../shimmer/Shimmer";
import CardComponent from "../cardcomponent/Card";
import useApiCall from "../../utils/useApiCall";
const CardDataComponent = () => {
    const apiResponse=useApiCall()
    return apiResponse.length === 0 ? (<ShimmerComponent />) : (
        <>
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <div className={style.top_res}>
                       <h2>

                       Restaurants with online food delivery in Delhi
                      
                        </h2> 
                    </div>
                </div>

            </div>

            <div className="row">
                {apiResponse?.card?.card?.imageGridCards?.info?.map((item, index) => (
                    <div className="col-md-3 col-sm-12" key={index}>
                        <CardComponent
                            key={item.id}
                            cardWrapperClass={style.card_wrapper}
                            cardImageTag={style.cardImageDiv}
                            cardContentTag={style.cardContentDiv}
                            cardTitle={style.cardTitle}
                            cardContent={style.cardContent}
                            data={item}
                        />
                    </div>
                ))}
            </div>
        </>


    )
}

export default CardDataComponent