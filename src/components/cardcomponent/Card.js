
import React from "react";
import { base_url_img } from "../../utils/constants"
const CardData = ({
    cardWrapperClass,
    cardImageTag,
    cardContentTag,
    cardContent,
    data,
}) => {

    const { imageId, accessibility, id } = data;
    console.log(accessibility, "accessibility");
    return (
        <>

            <div className={`${cardWrapperClass}`} key={id}>
                <div className={`${cardImageTag}`}>
                    <img src={`${base_url_img}/${imageId}`} alt="img" />
                </div>
                <div className={cardContentTag}>
                    <div className={cardContent}>{accessibility.altText}</div>
                </div>
            </div>


        </>
    );
};

export default CardData;
