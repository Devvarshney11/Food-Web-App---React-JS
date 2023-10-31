import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = ()=>{
    const {id} = useParams();
    const [restaurant,menuItem] = useRestaurantMenu(id);

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