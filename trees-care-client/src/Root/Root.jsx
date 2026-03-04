import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Home";
import AllPlants from "../Component/AllPlants";
import MyPlants from "../Component/MyPlants";
import AddPlants from "../Component/AddPlants";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PlantDetails from "../Component/PlantDetails";
import NotFound from "../Component/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("/plant.json") },
      { path: "all-plants", Component: AllPlants },
      { path: "add-plants", Component: AddPlants },
      { path: "my-plants", Component: MyPlants },
      { path: "plant-details", Component: PlantDetails },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "/auth/login", Component: Login },
          { path: "/auth/register", Component: Register },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
