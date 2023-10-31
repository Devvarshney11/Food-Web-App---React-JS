import { MENU_CDN_URL } from "../config";
import { useState ,useEffect} from "react";

const useRestaurantMenu = (id) => {
    const [restaurant, setRestaurant] = useState([]);
    const [menuItem, setMenuItem] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
    }, []);
    async function getRestaurantInfo() {
        const data = await fetch(MENU_CDN_URL + id);
        const res = await data.json();
        setRestaurant(res?.data?.cards[0]?.card?.card?.info);
        const obj =
            res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;
        const menuData =
        "itemCards" in obj
            ? res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
                ?.card.itemCards
            : res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                ?.card.itemCards;
        setMenuItem(menuData);
    }
    return [restaurant, menuItem];
};
export default useRestaurantMenu;
