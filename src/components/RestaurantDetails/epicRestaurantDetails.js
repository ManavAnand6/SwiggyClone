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

export async function getMenuData(id) {
  const url = `${Config.restaurantMenu.restaurantMenuData}?page-type=REGULAR_MENU&complete-menu=true&lat=28.6539225&lng=77.271046&restaurantId=${id}&submitAction=ENTER`
  console.log('url', url);
  const res = await makeGetRequest(url);
  return res;
}

export const epicRestaurantDetails = (action$) =>
  action$.pipe(
    ofType(GET_RESTAURANT_MENU_DATA),
    debounceTime(2500),
    pluck("payload"),
    mergeMap((restaurantId) => {
      return from(getMenuData(restaurantId)).pipe(
        map((res) => {
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
