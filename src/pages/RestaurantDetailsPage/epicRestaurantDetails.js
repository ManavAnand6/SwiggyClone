import { from, of } from "rxjs";
import {
  mergeMap,
  pluck,
  map,
  takeUntil,
  catchError,
  debounceTime,
  filter,
} from "rxjs/operators";
import { Config } from "../../common/Config";
import { makeGetRequest } from "../../common/NetworkOps";
import {
  errorGettingRestaurantMenuData,
  getRestaurantMenuData,
  setRestaurantMenuData,
} from "./restaurantDetailsPageSlice";
import { getItemFromLocalStorage } from "../../utilities/localStorageFunction";

export async function getMenuData(body) {
  const { restaurantId, longitude, latitude } = body;
  const url = `${Config.restaurantMenu.restaurantMenuData}?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${restaurantId}&submitAction=ENTER`;
  const res = await makeGetRequest(url);
  return res;
}

export const epicRestaurantDetails = (action$) =>
  action$.pipe(
    filter(getRestaurantMenuData.match),
    debounceTime(2500),
    pluck("payload"),
    mergeMap((restaurantId) => {
      const body = {
        restaurantId,
        longitude: getItemFromLocalStorage("longitude"),
        latitude: getItemFromLocalStorage("latitude"),
      };
      return from(getMenuData(body)).pipe(
        map((res) => {
          if (res?.statusCode === 0) {
            return setRestaurantMenuData(res?.data);
          }
          return errorGettingRestaurantMenuData(res);
        }),
        takeUntil(action$.pipe(filter(getRestaurantMenuData.match))),
        catchError((error) => {
          return of(
            errorGettingRestaurantMenuData(error.response?.data?.message || "")
          );
        })
      );
    })
  );
