import {IMG_CDN_URL,restaurantList} from "../config";
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => (
    <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <h3 className="Cuisines">{cuisines.join(',')}</h3>
        <h4>{lastMileTravelString} minutes</h4>
    </div>
)
export default RestaurantCard;