import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Components/SignIn";
import SignIn from "../Components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/signIn",
        element: <SignIn />
      }
    ]
  },
]);