import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";

function filterData(searchText, restaurant) {
  return restaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setRestaurants(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getRestaurants();
  }, []);
  return restaurants.length === 0 ? (
    <Shrimmer />
  ) : (
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              let data = filterData(searchText, restaurants);
              setFilteredRestaurants(data);
            }
          }}
        />
        <input
          type="submit"
          className="search-btn"
          onClick={() => {
            let data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
          value="Submit"
        />
      </div>
      {filteredRestaurants.length === 0 ? (
        <div className="no-data-text">No Matched Item Found</div>
      ) : (
        <div className="Restaurant-List">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))}
        </div>
      )}
    </>
  );
};
export default Body;
