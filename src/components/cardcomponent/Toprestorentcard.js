import React from 'react'
import data from '../../json/apiResponse'
import CarouselCard, { withPromotedWrapper } from '../carouselcomponent/CarouselCard'
const Toprestorentcard = () => {
    const FeatureUpdate = withPromotedWrapper(CarouselCard);
    return (
        <div className="row">
            {data.map((item) => (

                <div className="col-md-3 col-sm-12" key={item.id}>
                    {item.type ? <FeatureUpdate data={item} key={item.id} />
                        : <CarouselCard data={item} key={item.id} />}
                </div>


            ))}
        </div>
    )
}

export default Toprestorentcard