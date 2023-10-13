import React from 'react'
import style from "../../style/strapper.module.scss";
const Strapper = ({ strapperdata, heading }) => {
    return (
        <div className={style.main_container_wrapper}>
            <div className='row'>
                <div className='col-sm-12 col-lg-12 col-md-12'>
                    <div className={style.head_content}>
                        <h1>
                            {heading}
                        </h1>
                    </div>

                </div>

            </div>
            <div className='row'>
                {strapperdata.map((item) => (
                    <div className='col-md-3 col-lg-3 col-sm-6' key={item.id} >
                        <div className={style.wrapper} >
                            <div className={style.child_div_strapper}>
                                {item.content}
                            </div>
                        </div>

                    </div>
                ))}


            </div>
        </div>


    )
}

export default Strapper