import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { useEffect, useState} from "react";

const RestaurantMenu = ()=>{
    const {id} = useParams();
    const [restaurant,setRestaurant] = useState();
    useEffect(()=>
    {
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.913562&lng=78.080701&restaurantId="+id);
        const res = await data.json();
        setRestaurant(res?.data?.cards[0])
    }
    return (
        <div>
            <div>
                <div className="menu-img-container">
                    <img src = {IMG_CDN_URL}/>
                </div>
            </div>
        </div>
    )
};
export default RestaurantMenu;