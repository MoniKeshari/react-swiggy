import React from "react";
import style from "../../style/card.module.scss";
import ShimmerComponent from "../shimmer/Shimmer";
import CardComponent from "../cardcomponent/Card";
import useApiCall from "../../utils/useApiCall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CardDataComponent = () => {
    const apiResponse = useApiCall()
    const { inputsearch } = useSelector((state) => state.inputFieldSlice);
    const filterData = inputsearch ?
        apiResponse?.card?.card?.imageGridCards?.info.filter((item) => new RegExp(inputsearch, "i").test(item.accessibility.altText)
            // item.accessibility.altText.toLowerCase().startsWith(inputsearch.toLowerCase())
        ) : apiResponse?.card?.card?.imageGridCards?.info;

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
                {filterData.length === 0 ? <h1 style={{ textAlign: "center" }}>not available</h1> : filterData?.map((item) => {
                    return (
                        <div className="col-md-3 col-sm-12" key={item.id}>
                            <Link to={`/restaurants/${item.action.text}`} className={style.link_href}>
                            <CardComponent
                                key={item.id}
                                cardWrapperClass={style.card_wrapper}
                                cardImageTag={style.cardImageDiv}
                                cardContentTag={style.cardContentDiv}
                                cardTitle={style.cardTitle}
                                cardContent={style.cardContent}
                                data={item}
                            />
                            </Link>
                           
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardDataComponent