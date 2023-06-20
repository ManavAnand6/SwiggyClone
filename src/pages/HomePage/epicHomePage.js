import { from, of } from "rxjs";
import {
  mergeMap,
  pluck,
  map,
  takeUntil,
  catchError,
  filter,
} from "rxjs/operators";
import { Config } from "../../common/Config";
import { makeGetRequest } from "../../common/NetworkOps";
import {
  errorGettingRestaurantData,
  getRestaurantData,
  setRestaurantData,
} from "./homePageSlice";
import { getItemFromLocalStorage } from "../../utilities/localStorageFunction";

export async function getRestaurantListData(body) {
  const { longitude, latitude } = body;
  const url = `${Config.home.getRestaurantList}?lat=${latitude}&lng=${longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
  const res = await makeGetRequest(url);
  return res;
}

export const epicGetRestaurantList = (action$) =>
  action$.pipe(
    filter(getRestaurantData.match),
    pluck("payload"),
    mergeMap(() => {
      const body = {
        longitude: getItemFromLocalStorage("longitude"),
        latitude: getItemFromLocalStorage("latitude"),
      };
      return from(getRestaurantListData(body)).pipe(
        map((res) => {
          if (res?.statusCode === 0) {
            return setRestaurantData(res?.data?.cards);
          }
          return errorGettingRestaurantData(res);
        }),
        takeUntil(action$.pipe(filter(getRestaurantData.match))),
        catchError((error) => {
          return of(
            errorGettingRestaurantData(error.response?.data?.message || "")
          );
        })
      );
    })
  );
