import { CLEAR_DATA, SET_RESTAURANT_MENU_DATA } from "./actionRestaurantDetails";

const initialState = {
  restaurantMenuData: [],
};

const reducerRestaurantDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESTAURANT_MENU_DATA:
      return {
        ...state,
        restaurantMenuData: payload,
      };
    case CLEAR_DATA:
      return {
        ...state,
        restaurantMenuData: [],
      };
    default:
      return state;
  }
};

export default reducerRestaurantDetails;
