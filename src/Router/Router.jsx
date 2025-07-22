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
import ErrorPage from "../Components/ErrorPage";
import DashBoardLayOut from "../Layouts/DashBoardLayOut";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Allitems from "../Pages/Dashboard/DashComponents/Allitems";
import MyRev from "../Pages/Dashboard/DashComponents/MyRev";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center h-[100vh]">
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
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: (
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        ),
        element: <AllServices></AllServices>,
      },
      {
        path: "/serviceDetails/:id",
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myServices",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoutes>
            <MyServices></MyServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myServices/:id",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoutes>
            <UpdateService></UpdateService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myReviews",
        errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <DashBoardLayOut></DashBoardLayOut>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-items",
        element: <Allitems></Allitems>,
      },
      {
        path: "/dashboard/myReviews",
        element: <MyRev></MyRev>,
      },
      {
        path: "/dashboard/myServices",
        element: <MyServices></MyServices>,
      },
    ],
  },
]);

export default router;
