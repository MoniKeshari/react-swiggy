import React from 'react';
import style from "../../style/shimmer.module.scss";
const CustomComponent = () => {
  return (
    <>
      <div className={style.shimmer_wrapper}>
        <div className={style.shimmer_img}>
        </div>
        <div className={style.shimmer_card_tag}>
          <div className={style.shimmer_title}></div>
          <div className={style.cardcontent}></div>
        </div>
      </div>
    </>
  );
};

export default CustomComponent;
