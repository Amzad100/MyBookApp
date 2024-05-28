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
import Allbooks from "../components/Dashboard/Allbooks";
import AddBook from "../components/Dashboard/AddBook";
import ContactUs from "../pages/ContactUs";
import BookDetails from "../pages/BookDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:3000/books"),
      },
      {
        path: "/books/:id",
        element: <BookDetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
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
      {
        path: "dashboard/allbooks",
        element: <Allbooks />,
      },
      {
        path: "dashboard/addbook",
        element: <AddBook />,
      },
    ],
  },
]);
