export function filterData(searchText, restaurant) {
  return restaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
