import React from 'react'
import useApiCall from '../../utils/useApiCall';
import { useSelector } from 'react-redux';
const RestorentMenuCard = () => {
    const apiResponse = useApiCall();
    console.log(apiResponse, "apiResponse777777777777777");
    const { carddata } = useSelector((state) => state.inputFieldSlice)
    console.log(carddata, "carddatacarddata");

    return (
        <div>
            <ul>
                {apiResponse?.card?.card?.imageGridCards?.info.length === 0 ? "Loading..." : apiResponse?.card?.card?.imageGridCards?.info?.map((item) => {
                    const { accessibility, id } = item;
                    console.log(accessibility, "accessibility");
                    return (
                        <div key={item.id}>
                            <li>
                                RestourentId:{id}
                            </li>
                            <li>
                                name:{accessibility.altText}
                            </li>
                            <li>
                                Address :{accessibility.altTextCta}
                            </li>
                        </div>
                    )

                })}


            </ul>
        </div>
    )
}

export default RestorentMenuCard