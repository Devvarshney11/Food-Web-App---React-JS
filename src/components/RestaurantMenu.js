import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { useEffect, useState} from "react";

const RestaurantMenu = ()=>{
    const {id} = useParams();
    const [restaurant,setRestaurant] = useState([]);
    const [menuItem,setMenuItem] = useState([]);
    useEffect(()=>
    {
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.913562&lng=78.080701&restaurantId="+id);
        const res = await data.json();
        setRestaurant(res?.data?.cards[0]?.card?.card?.info);
        const obj = res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const menuData = ("itemCards" in obj)?res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards:res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
        setMenuItem(menuData);
    }
    return(
        <div className="restaurant-menu">
            <div className="res-container">
                <div className="res-img-container">
                    <img src = {IMG_CDN_URL+restaurant.cloudinaryImageId}/>
                </div>
                <div className="res-text-container"> 
                    <h1>{restaurant.name}</h1>
                    <h2>{restaurant.city}</h2>
                    <h3>{restaurant.avgRating} star</h3>
                </div>  
            </div>
            <div className="menu-Container">
                <h1>menu</h1>
                <ul>
                    {menuItem.map((item)=>
                    <li key = {item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
                </ul>
            </div>
        </div>
    )
};
export default RestaurantMenu;