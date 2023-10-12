import React, { useEffect, useState } from 'react'
import { base_url_card } from '../../utils/constants'
// import ShimmerComponent from '../shimmer/Shimmer'

const RestaurantMenu = () => {
  const [apiResponse, setapiResponse] = useState([])
  useEffect(() => {
      fetchData()
  }, [])
  const fetchData = async () => {
      const apiReq = await fetch(base_url_card)
      const response = await apiReq.json();
      setapiResponse(response.data.cards)
  }

  const altText = apiResponse[1]?.card?.card?.imageGridCards?.info[1].accessibility?.altText;

  return (
    <div>
      <ul>
        <li>
{apiResponse.length>0 ?  (
  <>
  name: {altText} 
  </>

)   :"loading"}
        
        </li>
     
        </ul></div>
  )
}

export default RestaurantMenu