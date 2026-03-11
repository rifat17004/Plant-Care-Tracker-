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
import UpdatePlant from "../Component/UpdatePlant";
import { Suspense } from "react";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../Component/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/all-plants"),
      },
      {
        path: "all-plants",
        Component: AllPlants,
        loader: () => fetch("http://localhost:3000/all-plants"),
      },
      {
        path: "add-plants",

        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes>
              <AddPlants />
            </PrivateRoutes>
          </Suspense>
        ),
      },
      {
        path: "update-plants/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-plants/${params.id}`),
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes>
              <UpdatePlant />
            </PrivateRoutes>
          </Suspense>
        ),
      },
      {
        path: "my-plants",

        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes>
              <MyPlants></MyPlants>
            </PrivateRoutes>
          </Suspense>
        ),
        loader: () => fetch(`http://localhost:3000/my-plants/rifat@.com`),
      },
      {
        path: "plant-details/:id",

        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes>
              <PlantDetails />
            </PrivateRoutes>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-plants/${params.id}`),
      },
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
