export function filterData(searchText, restaurant) {
  if(searchText === undefined)
    return restaurant;
  return restaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
