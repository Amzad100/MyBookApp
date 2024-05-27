import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import PrivateRoute from "./PrivateRouts/PrivateRoutes";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <HomePage />,
      },
      {
        path: "allbooks",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
