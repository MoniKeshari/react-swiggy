import React from 'react'
import style from "../../style/carousel.module.scss";
const CarouselCard = ({ data }) => {
    return (
        <div className={style.img_tag}>
            <img src={data.img} alt="img" />
        </div>

    );
}

export const withPromotedWrapper = (CarouselCard) => {
    return ((props) => {
        return (
            <>

                <h6>
                    Promoted data
                </h6>

                <div className='row'>

                    <CarouselCard  {...props} />

                </div>
            </>
        )
    }
    )
}
export default CarouselCard



