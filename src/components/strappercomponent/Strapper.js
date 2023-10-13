import React from 'react'
import style from "../../style/strapper.module.scss";
import strapperdata from '../../strapper';
const Strapper = () => {
    return (
        < div className={style.main_container_wrapper}>
            <div className='row'>
                <div className='col-sm-12 col-lg-12 col-md-12'>
                    <div className={style.head_content}>
                        <h1>
                            Restaurant Chains Near Me
                        </h1>
                    </div>

                </div>

            </div>
            <div className='row'>
                {strapperdata.map((item) => (
                    <div className='col-md-3 col-lg-3 col-sm-6'>
                        <div className={style.wrapper} key={item.id}>
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