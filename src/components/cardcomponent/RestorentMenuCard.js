import React from 'react'
// import useApiCall from '../../utils/useApiCall';
import { useParams } from 'react-router';
import useApiCall from '../../utils/useApiCall';
import MenuComponent from './MenuComponent';
const RestorentMenuCard = () => {
    const { resId } = useParams();
    const apiResponse = useApiCall(resId);
    console.log(apiResponse, "apiResponse9999");
    return (
        <div>
            <ul>
                {apiResponse?.card?.card?.imageGridCards?.info.length === 0 ? "Loading..." : apiResponse?.card?.card?.imageGridCards?.info?.map((item) =>
                (
                    <MenuComponent accessibility={item.accessibility} id={item.id} key={item.id} action={item.action.text}/>
                )

                )}


            </ul>
        </div>
    )
}

export default RestorentMenuCard