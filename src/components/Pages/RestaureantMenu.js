import React from 'react'
import useApiCall from '../../utils/useApiCall';
const RestaurantMenu = () => {
  const apiResponse=useApiCall()
  const altText = apiResponse?.card?.card?.imageGridCards?.info[1].accessibility?.altText;
  return (
    <div>
      <ul>
        <li>
          {apiResponse.length > 0 ? (
            <>
              name: {altText}
            </>

          ) : "loading"}

        </li>

      </ul></div>
  )
}

export default RestaurantMenu