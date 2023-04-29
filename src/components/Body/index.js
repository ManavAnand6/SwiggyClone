import React, { useEffect, useState } from "react";
import { RestaurantCard, CustomCarousel } from "./components";
import "./style.css";
import { BodyShimmer } from "./bodyShimmer";
import { useSelector } from "react-redux";

export const Body = () => {
  const introPageState = useSelector((state) => state.reducerIntroPage);
  const { location } = introPageState;
  const { longitude, latitude } = location;
  const [restaurantData, setRestaurantData] = useState([]);
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

  const getRestaurantData = async () => {
    await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}6&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        console.log(data);
        setRestaurantData(data?.data?.cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // Readable stream is of type object
  // First then returns a readable stream we have to convert it into useable format
  

  useEffect(() => {
    getRestaurantData();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      getRestaurantData();
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
