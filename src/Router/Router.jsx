import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Components/SignIn";
import SignIn from "../Components/Register";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import MyApplications from "../Pages/MyApplications";
import MyJobPost from "../Pages/MyJobPost";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
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