import RestaurantCard from "./RestaurantCard"
import {restaurantList} from "../config"
const Body = () => (
    <div className="Restaurant-List">
    {restaurantList.map(restaurant => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>            
    ))}
</div>
)
export default Body;

