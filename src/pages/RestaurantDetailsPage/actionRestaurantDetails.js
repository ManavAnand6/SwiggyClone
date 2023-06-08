const module_key = "restaurantDetails";

export const GET_RESTAURANT_MENU_DATA = `${module_key}_get_restaurant_menu_data`;
export const SET_RESTAURANT_MENU_DATA = `${module_key}_set_restaurant_menu_data`;
export const ERROR_GETTING_RESTAURANT_MENU_DATA = `${module_key}_error_getting_restaurant_menu_data`;
export const CLEAR_DATA = `${module_key}_clear_data`;

export const getRestaurantMenuData = (data) => ({
  type: GET_RESTAURANT_MENU_DATA,
  payload: data,
});

export const setRestaurantMenuData = (data) => ({
  type: SET_RESTAURANT_MENU_DATA,
  payload: data,
});

export const errorGettingRestaurantMenuData = (data) => ({
  type: ERROR_GETTING_RESTAURANT_MENU_DATA,
  payload: data,
});

export const clearData = () => ({
  type: CLEAR_DATA,
  payload: {},
});

