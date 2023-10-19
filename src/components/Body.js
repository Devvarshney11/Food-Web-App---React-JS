import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function filterData(searchText, restaurant) {
  return restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [restaurantOriginal,setRestaurantOriginal] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            let data = filterData(searchText, restaurantOriginal);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-List">
        {restaurant.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
