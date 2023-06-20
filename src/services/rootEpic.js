import { combineEpics } from "redux-observable";
import { catchError } from "rxjs";
import { epicRestaurantDetails } from "../pages/RestaurantDetailsPage/epicRestaurantDetails";
import { epicGetRestaurantList } from "../pages/HomePage/epicHomePage";

const epics = [
  epicRestaurantDetails,
  epicGetRestaurantList,
];

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );
