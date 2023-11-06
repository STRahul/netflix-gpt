import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Auth from "./Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {

  return (
      <RouterProvider router={appRouter} />
  );
};

export default Body;
