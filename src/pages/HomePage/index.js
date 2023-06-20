import React, { useEffect } from "react";
import { RestaurantCard, CustomCarousel } from "./components";
import "./style.css";
import { BodyShimmer } from "./bodyShimmer";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData, setRestaurantData, setSearchValue } from "./homePageSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { restaurantData, searchValue } = useSelector((state) => state.homePage);
  const onValueChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const filterData = () => {
    if (searchValue !== "") {
      const filteredData = restaurantData.filter((item) => {
        return item.data.data.name.includes(searchValue);
      });
      dispatch(setRestaurantData(filteredData));
    } else {
      dispatch(setRestaurantData(data));
    }
  };
  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);

  useEffect(() => {
    if (!searchValue) {
      dispatch(getRestaurantData());
    }
  }, [searchValue]);

  return (
    <div id="body-container">
      <CustomCarousel />
      <div id="search-bar">
        <input
          type="text"
          name="Search"
          placeholder="Search"
          value={searchValue}
          onChange={onValueChange}
        />
        <button type="button" onClick={filterData}>
          Search
        </button>
      </div>
      {restaurantData.length !== 0 ? restaurantData.map((item) => {
        return <RestaurantCard data={item} key={item?.data?.data?.id} />;
      }) : <BodyShimmer />}
    </div>
  );
};
