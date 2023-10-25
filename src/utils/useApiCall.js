import { useEffect } from "react";
import { base_url_card } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { setCardData } from "../reduxtoolkit/slice/homeslice";
import { useParams } from "react-router";

const useApiCall = () => {
   const{resId}=useParams();
    const dispatch = useDispatch();
    const { carddata } = useSelector((state) => state.inputFieldSlice)
    useEffect(() => {
        fetchData(resId);
    }, []);

    const fetchData = async (resId) => {
        console.log(resId, "resIddata");
        const apiReq = await fetch(`${base_url_card}&id=${resId} `);
        console.log(apiReq, "apiReq");
        const response = await apiReq.json();
        console.log(response, "response");
        dispatch(setCardData(response.data.cards[1]));

    };

    return carddata;
};
export default useApiCall;


