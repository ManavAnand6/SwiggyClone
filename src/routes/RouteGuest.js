import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IntroPage } from "../pages/IntroPage";

const guestRoute = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
]);

export function RouteGuest() {
  return <RouterProvider router={guestRoute} />;
}
