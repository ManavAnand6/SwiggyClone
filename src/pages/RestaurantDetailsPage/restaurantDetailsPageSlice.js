import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantMenuData: [],
  isMenuModalOpen: false,
  activeRestaurantSection: "",
  visibleSectionId: "",
};

export const restaurantDetailsPageSlice = createSlice({
  name: "restaurantDetailsPage",
  initialState,
  reducers: {
    getRestaurantMenuData: (state) => {
      state.restaurantMenuData = [];
    },
    setRestaurantMenuData: (state, action) => {
      state.restaurantMenuData = action.payload;
    },
    errorGettingRestaurantMenuData: (state) => {
      state.restaurantMenuData = [];
    },
    setVisibleSectionId: (state, action) => {
      state.visibleSectionId = action.payload;
    },
    openMenuModal: (state, action) => {
      state.isMenuModalOpen = action.payload;
    },
    clearData: (state) => {
      state.restaurantMenuData = [];
    },
    setActiveRestaurantSection: (state, action) => {
      state.activeRestaurantSection = action.payload;
    },
  },
});

export const {
  setVisibleSectionId,
  openMenuModal,
  setRestaurantMenuData,
  clearData,
  setActiveRestaurantSection,
  getRestaurantMenuData,
  errorGettingRestaurantMenuData,
} = restaurantDetailsPageSlice.actions;
export const restaurantDetailsPageReducer = restaurantDetailsPageSlice.reducer;
