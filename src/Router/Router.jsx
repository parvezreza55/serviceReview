import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ServiceDetails from "../Services/ServiceDetails";
import AddService from "../AddService/AddService";
import MyReviews from "../MyReviews/MyReviews";
import AllServices from "../Services/AllServices";
import MyServices from "../MyService/MyServices";
import UpdateService from "../MyService/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        ),
        loader: () =>
          fetch(
            "https://service-review-server-lovat-seven.vercel.app/services"
          ),
        element: <Home></Home>,
      },
      {
        path: "/services",
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        ),
        loader: () =>
          fetch(
            "https://service-review-server-lovat-seven.vercel.app/allService"
          ),
        element: <AllServices></AllServices>,
      },
      {
        path: "/serviceDetails/:id",
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        ),
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-lovat-seven.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoutes>
            <MyServices></MyServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myServices/:id",
        element: (
          <PrivateRoutes>
            <UpdateService></UpdateService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
