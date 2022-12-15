import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
const AllRoutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return elements;
};

export default AllRoutes;
