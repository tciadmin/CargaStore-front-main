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
import CompRegDriver from "../Components/RegisterDriver/CompRegDriver";
import CompVehicleInfo from "../Components/VehicleInfo/CompVehicleInfo";
import CompRegUser from "../Components/RegisterUser/CompRegUser";
import CompCompanyInfo from "../Components/CompanyInfo/CompCompanyInfo";
import LayoutConfi from "../Layouts/LayoutConfi";
import LayoutHome from "../Layouts/LayoutHome";
import PageHome from "../Pages/PageHome";
import PageCrearEnvios from "../Pages/PageCrearEnvios";
import PageMarketplace from "../Pages/PageMarketplace";
import PagePerfil from "../Pages/PagePerfil";

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
    path: "/perfil",
    element: <PagePerfil/>
  },
  {
    path: "/register",
    element: <LayoutRegister />,
    children: [
      { index: true, element: <PageRegister /> },
      { path: "driver", element: <CompRegDriver /> },
      { path: "driver/vehicle-info", element: <CompVehicleInfo /> },
      { path: "user", element: <CompRegUser /> },
      { path: "user/company-info", element: <CompCompanyInfo /> },
    ]},{
    
    path: "/home",
    element: <LayoutHome/>,   
    children: [
      { index: true, element: <PageHome /> },
      { path: "crearEnvios", element: <PageCrearEnvios /> },
      { path: "Marketplace", element: <PageMarketplace /> },

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
  {
    path: "/config",
    element: <LayoutConfi />,
    children: [{ path: "prueba", element: <CompVerificationCode /> }],
  },
]);
