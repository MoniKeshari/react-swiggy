import { useEffect, useState } from "react";
import { base_url_card } from "./constants";

const useApiCall = () => {
    const [carddata, setCardData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiReq = await fetch(base_url_card);
        const response = await apiReq.json();
        console.log(response, "response");
        setCardData(response.data.cards[1]);

    };

    return carddata;
};
export default useApiCall;


