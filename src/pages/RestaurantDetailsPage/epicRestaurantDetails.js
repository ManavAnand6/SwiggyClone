import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import {
  mergeMap,
  pluck,
  map,
  takeUntil,
  catchError,
  debounceTime,
} from "rxjs/operators";
import { Config } from "../../common/Config";
import { makeGetRequest } from "../../common/NetworkOps";
import { errorGettingRestaurantMenuData, GET_RESTAURANT_MENU_DATA, setRestaurantMenuData } from "./actionRestaurantDetails";

export async function getMenuData(body) {
  const { restaurantId, longitude, latitude } = body;
  const url = `${Config.restaurantMenu.restaurantMenuData}?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restaurantId}&submitAction=ENTER`
  console.log('url', url);
  const res = await makeGetRequest(url);
  return res;
}

export const epicRestaurantDetails = (action$, state$) =>
  action$.pipe(
    ofType(GET_RESTAURANT_MENU_DATA),
    debounceTime(2500),
    pluck("payload"),
    mergeMap((restaurantId) => {
      const { location } = state$.value.reducerIntroPage;
      const { longitude, latitude } = location;
      const body = {
        restaurantId,
        longitude,
        latitude,
      };
      return from(getMenuData(body)).pipe(
        map((res) => {
          console.log('res', res);
          if(res?.statusCode === 0){
            return setRestaurantMenuData(res?.data);
          }
          return errorGettingRestaurantMenuData(res);
        }),
        takeUntil(action$.pipe(ofType(GET_RESTAURANT_MENU_DATA))),
        catchError((error) => {
          return of(errorGettingRestaurantMenuData(error.response?.data?.message || ""));
        })
      );
    })
  );
