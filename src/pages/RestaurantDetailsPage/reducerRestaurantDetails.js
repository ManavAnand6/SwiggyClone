import { SET_RESTAURANT_MENU_DATA } from "./actionRestaurantDetails";

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
    default:
      return state;
  }
};

export default reducerRestaurantDetails;
