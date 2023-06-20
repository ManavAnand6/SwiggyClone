import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantData: [],
  searchValue: "",
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    getRestaurantData: (state) => {
      state.restaurantData = [];
    },
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    errorGettingRestaurantData: (state) => {
      state.restaurantData = [];
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  getRestaurantData,
  setRestaurantData,
  errorGettingRestaurantData,
  setSearchValue,
} = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;
