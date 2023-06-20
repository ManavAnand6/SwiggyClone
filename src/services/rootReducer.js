import { homePageReducer } from '../pages/HomePage/homePageSlice';
import { introPageReducer } from '../pages/IntroPage/introPageSlice';
import { restaurantDetailsPageReducer } from '../pages/RestaurantDetailsPage/restaurantDetailsPageSlice';

const rootReducer = {
  introPage: introPageReducer,
  restaurantDetailsPage: restaurantDetailsPageReducer,
  homePage: homePageReducer,
};

export default rootReducer;
