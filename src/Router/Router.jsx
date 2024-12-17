import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Components/SignIn";
import SignIn from "../Components/Register";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import MyApplications from "../Pages/MyApplications";
import MyJobPost from "../Pages/MyJobPost";

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
        path: "/alljobs",
        element: <AllJobs />
      },
      {
        path: "/addjobs",
        element: <AddJobs />
      },
      {
        path: "/myApplications",
        element: <MyApplications />
      },
      {
        path: "/myJobPost",
        element: <MyJobPost />
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