import { useEffect } from "react";
import { base_url_card } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { setCardData } from "../reduxtoolkit/slice/homeslice";
const useApiCall = (resId) => {
    const dispatch = useDispatch();
    const { carddata } = useSelector((state) => state.inputFieldSlice)
    useEffect(() => {
        fetchData(resId);
    }, [resId]);

    const fetchData = async (resId) => {
        console.log(resId, "resIddata");
        const apiReq = await fetch(`${base_url_card}/${resId} `);
        console.log(apiReq, "apiReq");
        const response = await apiReq.json();
        console.log(response, "response");
        dispatch(setCardData(response.data.cards[1]));

    };

    return carddata;
};
export default useApiCall;


