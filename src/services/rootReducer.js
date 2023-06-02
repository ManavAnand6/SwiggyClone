import { combineReducers } from "redux";
import reducerRestaurantDetails from "../pages/RestaurantDetailsPage/reducerRestaurantDetails";
import { reducerIntroPage } from "../pages/IntroPage/reducerIntroPage";

const rootReducer = combineReducers({
  reducerRestaurantDetails,
  reducerIntroPage,
});

export default rootReducer;
