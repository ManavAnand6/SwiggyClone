import React, { useEffect } from "react";
import { RouteUser } from "./RouteUser";
import { RouteGuest } from "./RouteGuest";
import { StringProvider } from "../common/StringProvider";
import { getItemFromLocalStorage } from "../utilities/localStorageFunction";
import { useSelector } from "react-redux";

export function RouteManager() {
  const { isUserLocationSet } = useSelector((state) => state.reducerIntroPage);

  const handleRoute = () => {
    const longitude = getItemFromLocalStorage('longitude');
    const latitude = getItemFromLocalStorage('latitude');
    if (longitude === null && latitude === null) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    handleRoute();
  }, [isUserLocationSet]);

  return (
    <StringProvider>
      {handleRoute() ? <RouteUser /> : <RouteGuest />}
    </StringProvider>
  );
}
