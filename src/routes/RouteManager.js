import React from "react";
import { useSelector } from "react-redux";
import { RouteUser } from "./RouteUser";
import { RouteGuest } from "./RouteGuest";
import { StringProvider } from "../common/StringProvider";

export function RouteManager() {
  const introPageState = useSelector((state) => state.reducerIntroPage);
  console.log("introPageState", introPageState);
  const { location } = introPageState;
  const { latitude, longitude } = location;

  const handleRoute = () => {
    if (longitude === null && latitude === null) {
      return false;
    }
    return true;
  };
  return (
    <StringProvider>
      {handleRoute() ? <RouteUser /> : <RouteGuest />}
    </StringProvider>
  );
}
