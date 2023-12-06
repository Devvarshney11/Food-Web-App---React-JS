import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuItem] = useRestaurantMenu(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="restaurant-menu">
      <div className="res-container">
        <div className="res-img-container">
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
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
          {menuItem.map((item) => (
            <li key={item?.card?.info?.id} className="my-1">
              {item?.card?.info?.name}-
              <button
                className="px-1 bg-zinc-700 text-sky-50 rounded"
                onClick={() => addFoodItem(item?.card?.info)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
