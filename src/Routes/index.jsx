import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layouts/LayoutPublic";
import NotFound from "../Pages/PageNotFound";
import PageLogin from "../Pages/PageLogin";
import PageRedirect from "../Pages/PageRedirect";
import LayoutLogin from "../Layouts/LayoutLogin";
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword";
import CompVerificationCode from "../Components/VerificationCode/CompVerificationCode";
import CompNewPassword from "../Components/NewPassword/CompNewPassword";
import PageLanding from "../Pages/PageLanding";
import PageRegister from "../Pages/PageRegister";
import LayoutRegister from "../Layouts/LayoutRegister";
import CompRegDriver from "../Components/RegDriver/CompRegDriver";
import CompVehicleInfo from "../Components/VehicleInfo/CompVehicleInfo";

export const router = createBrowserRouter([
  {
    path: "/landing",
    element: <PageLanding />,
  },
  {
    path: "/login",
    element: <LayoutLogin />,

    children: [
      { index: true, element: <PageLogin /> },
      { path: "forgot-password", element: <CompForgotPassword /> },
      { path: "verification-code", element: <CompVerificationCode /> },
      { path: "new-password", element: <CompNewPassword /> },
    ],
  },
  {
    path: "/register",
    element: <LayoutRegister />,
    children: [
      { index: true, element: <PageRegister /> },
      { path: "driver", element: <CompRegDriver /> },
      { path: "driver/vehicle-info", element: <CompVehicleInfo /> },
    ],
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
