import React from 'react'
import style from "../../style/carousel.module.scss";
const CarouselCard = ({ data }) => {
    return (
        <div>
            <div className={style.img_tag}>
                <img src={data.img} alt="img" />
            </div>
        </div>
    );
}
export default CarouselCard



