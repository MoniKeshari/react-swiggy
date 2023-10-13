import React, { useEffect, useState } from "react";
import style from "../../style/card.module.scss";
import ShimmerComponent from "../shimmer/Shimmer";
import CardComponent from "../cardcomponent/Card";
import { base_url_card } from "../../utils/constants";
const CardDataComponent = () => {
    const [apiResponse, setapiResponse] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const apiReq = await fetch(base_url_card)
        const response = await apiReq.json();
        setapiResponse(response.data.cards)
    }
    return apiResponse.length === 0 ? (<ShimmerComponent />) : (
        <div className="row">
            {apiResponse[1]?.card?.card?.imageGridCards?.info?.map((item, index) => (
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

    )
}

export default CardDataComponent