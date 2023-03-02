import React, { useEffect, useState } from "react";
import { RestaurantCard, CustomCarousel } from "./components";
import { data } from "../../common/constant";
import "./style.css";

export const Body = () => {
  const [restaurantData, setRestaurantData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const onValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filterData = () => {
    if (searchValue !== "") {
      const filteredData = restaurantData.filter((item) => {
        return item.data.data.name.includes(searchValue);
      });
      setRestaurantData(filteredData);
    } else {
      setRestaurantData(data);
    }
  };

  useEffect(() => {
    if (!searchValue) {
      setRestaurantData(data);
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
      {restaurantData.map((item) => {
        return <RestaurantCard data={item} />;
      })}
    </div>
  );
};
