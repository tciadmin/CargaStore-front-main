import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../Layouts/LayoutPublic"
import NotFound from "../Pages/PageNotFound"
import PageLogin from "../Pages/PageLogin"
import PageRedirect from "../Pages/PageRedirect"
import LayoutLogin from "../Layouts/LayoutLogin"
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword"
import CompVerificationCode from "../Components/VerificationCode/CompVerificationCode"
import CompNewPassword from "../Components/NewPassword/CompNewPassword"
import PageLanding from "../Pages/PageLanding"
import LayoutConfi from "../Layouts/LayoutConfi"
import { CompEdit } from "../Components/CompEdit/CompEdit"
import CompEditTwo from "../Components/CompEditTwo/CompEditTwo"
import { CompEditThree } from "../Components/CompEditThree/CompEditThree"

import LayoutPartners from "../Layouts/LayoutPartners"
import { CompPartners } from "../Components/Partners/CompPartners"
import { CompCard } from "../Components/cards/CompCard"
import { CompRequests } from "../Components/Requests/CompRequests"
import { CompProfile } from "../Components/Profile/CompProfile"

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
    children: [
      { path: "Datos personales", element: <CompEdit /> },
      { path: "Configuración de cuenta", element: <CompEditTwo /> },
      { path: "Configuración de pagos", element: <CompEditThree /> },
      { path: "Historial de pagos", element: <CompCard /> },
    ],
  },
  {
    path: "/partners",
    element: <LayoutPartners />,
    children: [
      { path: "Solicitudes de carga", element: <CompRequests /> },
      { path: "Socios activos", element: <CompPartners /> },
    ],
  },
  {
    path: "/profile",
    element: <CompProfile />,
  },
])
