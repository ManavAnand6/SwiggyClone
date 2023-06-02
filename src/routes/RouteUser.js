import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts";
import { AboutPage, ContactPage, HomePage, RestaurantDetailsPage } from "../pages";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetailsPage />,
      },
    ],
  },
]);

export function RouteUser() {
  return <RouterProvider router={userRouter} />;
}
