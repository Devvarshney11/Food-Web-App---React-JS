import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const dataSetter = () => {
    let data = filterData(searchText, restaurants);
    setFilteredRestaurants(data);
  };
  const isOnline = useIsOnline();
  const restaurants = useRestaurant();
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);
  if (!isOnline) {
    return <h1>You are offline</h1>
  }
  return restaurants?.length === 0 ? (
    <Shrimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="m-3 border-slate-950 box-border text-black py-2 px-9 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dataSetter();
            }
          }}
        />
        <input
          type="submit"
          className="p-2 border"
          onClick={() => {
            dataSetter();
          }}
          value="Submit"
        />
      </div>
      {filteredRestaurants?.length === 0 ? (
        <div className="no-data-text">No Matched Item Found</div>
      ) : (
        <div className="Restaurant-List">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              className="card-link"
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Body;
