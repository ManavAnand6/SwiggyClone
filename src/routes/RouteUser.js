import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Body,
  Contact,
  Footer,
  Header,
  RestaurantDetails,
} from "../components";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

export function RouteUser() {
  return <RouterProvider router={userRouter} />;
}
