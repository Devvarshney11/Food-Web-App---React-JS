import { useState, useEffect } from "react";
import {RES_CDN_URL} from "../config";
const useRestaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    async function getRestaurants() {
    const data = await fetch(RES_CDN_URL);
    const res = await data.json();
    setRestaurants(
        res.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    }
    useEffect(() => {
        getRestaurants();
    }, []);
    return restaurants;
};

export default useRestaurant; 