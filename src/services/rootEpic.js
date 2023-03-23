import { combineEpics } from "redux-observable";
import { catchError } from "rxjs";
import { epicRestaurantDetails } from "../components/RestaurantDetails/epicRestaurantDetails";

const epics = [
  epicRestaurantDetails,
];

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );
