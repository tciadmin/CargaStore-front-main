import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layouts/LayoutPublic";
import NotFound from "../Pages/PageNotFound";
import PageLogin from "../Pages/PageLogin";
import PageLanding from "../Pages/PageLanding";
import PageRedirect from "../Pages/PageRedirect"

export const router = createBrowserRouter([
  {
    path: "/landing",
    element: <PageLanding />,
  },
  {
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "/homeTeacher",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [],
  },
  {
    path: "/",
    element: <PageRedirect />,
  },
]);
