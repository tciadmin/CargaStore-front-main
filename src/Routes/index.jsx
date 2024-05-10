import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layouts/LayoutPublic";
import NotFound from "../Pages/PageNotFound";
import PageLogin from "../Pages/PageLogin";
import PageRedirect from "../Pages/PageRedirect";
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRedirect />,
  },
  {
    path: "/login",
    element: <PageLogin />,
    // children: [{ path: "/forgot-password", element: <CompForgotPassword /> }],
  },
  {
    path: "/homeTeacher",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [],
  },
]);
