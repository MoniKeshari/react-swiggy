import React from 'react'
import style from "../../style/wrapper.module.scss";
import secdivimage from "../../assets/productImg/dweb_header.png"
const CardWrapper = () => {
    return (
        <div className={style.wrapper_container}>
            <div className={style.first_child}>
                <h1>
                    Order Food Online in Delhi
                </h1>
            </div>
            <div className={style.secchild}>
                 <img src={secdivimage} alt="images" />
            </div>
        </div>
    )
}

export default CardWrapper