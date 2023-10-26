import {IMG_CDN_URL} from "../config";
const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => (
    <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h2 className = "card-name">{name}</h2>
        <h3 className="Cuisines">{cuisines.join(',')}</h3>
        <h4 className="card-rating">{avgRating} Star</h4>
    </div>
)
export default RestaurantCard;