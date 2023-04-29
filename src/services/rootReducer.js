import { combineReducers } from "redux";
import reducerRestaurantDetails from "../components/RestaurantDetails/reducerRestaurantDetails";
import { reducerIntroPage } from "../pages/IntroPage/reducerIntroPage";

const rootReducer = combineReducers({
  reducerRestaurantDetails,
  reducerIntroPage,
});

export default rootReducer;
