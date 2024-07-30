import { createBrowserRouter } from 'react-router-dom';
import PageLogin from '../Pages/PageLogin';
import PageRedirect from '../Pages/PageRedirect';
import LayoutLogin from '../Layouts/LayoutLogin';
import CompForgotPassword from '../Components/ForgotPassword/CompForgotPassword';
import CompVerificationCode from '../Components/VerificationCode/CompVerificationCode';
import CompNewPassword from '../Components/NewPassword/CompNewPassword';
import PageLanding from '../Pages/PageLanding';
import PageRegister from '../Pages/PageRegister';
import LayoutRegister from '../Layouts/LayoutRegister';
import CompRegDriver from '../Components/RegisterDriver/CompRegDriver';
import CompVehicleInfo from '../Components/VehicleInfo/CompVehicleInfo';
import CompRegUser from '../Components/RegisterUser/CompRegUser';
import CompCompanyInfo from '../Components/CompanyInfo/CompCompanyInfo';
import LayoutConfi from '../Layouts/LayoutConfi';
import { CompEdit } from '../Components/CompEdit/CompEdit';
import CompEditTwo from '../Components/CompEditTwo/CompEditTwo';
import { CompEditThree } from '../Components/CompEditThree/CompEditThree';
import LayoutPartners from '../Layouts/LayoutPartners';
import { CompPartners } from '../Components/Partners/CompPartners';
import { CompCard } from '../Components/cards/CompCard';
import { CompRequests } from '../Components/Requests/CompRequests';
import { CompProfile } from '../Components/Profile/CompProfile';
import LayoutHome from '../Layouts/LayoutHome';
import PageCrearEnvios from '../Pages/PageCrearEnvios';
import CargaPage from '../Pages/CargaPage';
import PageAdminPerfil from '../Pages/PageAdminPerfil';
import CompPending from '../Components/Shipments/Pending/CompPending';
import CompPendingPayment from '../Components/AdminPayment/CompPendingPayment';
import LayoutAdminPayment from '../Layouts/LayoutAdminPayment';
import CompAcreditedPayment from '../Components/AdminPayment/CompAcreditedPayment';
import { CompMarketplacePostular } from '../Components/MarketPlacePostular/CompMarketplacePostular';
import { CompCompletedTrips } from '../Components/CompletedTrips/CompCompletedTrips';
import PageMarketplace from '../Pages/PageMarketplace';
import PagePerfil from '../Pages/PagePerfil';
import PageAdminPanel from '../Pages/PageAdminPanel';
import CompAssigned from '../Components/Shipments/Assigned/CompAssigned';
import CompInProgress from '../Components/Shipments/InProgress/CompInProgress';
import CompSent from '../Components/Shipments/Sent/CompSent';
import PageShipments from '../Pages/PageShipments';
import PageEditarEnvio from '../Pages/PageEditarEnvio';
import { CompPublication } from '../Components/Publication/CompPublication';
import { CompDashboard } from '../Components/Dashboard/CompDashboard';
import CompPayDriver from '../Components/PayDriver/CompPayDriver';
import PageChatMobile from '../Pages/PageChatMobile';
import PageNotificacionesMobile from '../Pages/PageNotificacionesMobile';
import ChatDePrueba from '../Components/Chat/ChatDePrueba';

export const router = createBrowserRouter([
  {
    path: '/landing',
    element: <PageLanding />,
  },
  {
    path: '/login',
    element: <LayoutLogin />,

    children: [
      { index: true, element: <PageLogin /> },
      { path: 'forgot-password', element: <CompForgotPassword /> },
      {
        path: 'verification-code',
        element: <CompVerificationCode />,
      },
      { path: 'new-password', element: <CompNewPassword /> },
    ],
  },
  {
    path: '/perfil',
    element: <PagePerfil />,
  },
  {
    path: '/register',
    element: <LayoutRegister />,
    children: [
      { index: true, element: <PageRegister /> },
      { path: 'driver', element: <CompRegDriver /> },
      { path: 'driver/vehicle-info', element: <CompVehicleInfo /> },
      { path: 'user', element: <CompRegUser /> },
      { path: 'user/company-info', element: <CompCompanyInfo /> },
    ],
  },
  { path: '/carga/:id', element: <CargaPage /> },
  { path: '/crearEnvios', element: <PageCrearEnvios /> },
  { path: '/marketplace', element: <PageMarketplace /> },
  { path: '/editarEnvio', element: <PageEditarEnvio /> },
  {
    path: '/postular',
    element: <CompMarketplacePostular />,
  },
  {
    path: '/administrador',
    element: <LayoutHome />,
    children: [
      { path: 'panel', element: <PageAdminPanel /> },
      {
        path: 'panel/solicitudes',
        element: <PageAdminPanel seccion={1} />,
      },
      {
        path: 'panel/viajes-activos',
        element: <PageAdminPanel seccion={2} />,
      },
      {
        path: 'panel/viajes-finalizados',
        element: <PageAdminPanel seccion={3} />,
      },
      {
        path: 'panel/socios',
        element: <PageAdminPanel seccion={4} />,
      },

      { path: 'perfil', element: <PageAdminPerfil /> },
    ],
  },
  {
    path: '/shipments',
    element: <PageShipments />,
    children: [
      { index: true, element: <CompPending /> },
      { path: 'assigned', element: <CompAssigned /> },
      { path: 'in-progress', element: <CompInProgress /> },
      { path: 'finished', element: <CompSent /> },
    ],
  },
  {
path: '/chatprueba',
element: <ChatDePrueba/>
  },
  {
    path: '/payment',
    element: <LayoutAdminPayment />,
    children: [
      { index: true, element: <CompPendingPayment /> },
      { path: 'acredited', element: <CompAcreditedPayment /> },
    ],
  },
  {
    path: '/post-payment',
    element: <CompPayDriver />,
  },

  {
    path: '/',
    element: <PageRedirect />,
  },
  {
    path: '/config',
    element: <LayoutConfi />,
    children: [
      { path: 'Datos personales', element: <CompEdit /> },
      { path: 'Configuración de cuenta', element: <CompEditTwo /> },
      { path: 'Configuración de pagos', element: <CompEditThree /> },
      { path: 'Historial de pagos', element: <CompCard /> },
    ],
  },
  {
    path: '/partners',
    element: <LayoutPartners />,
    children: [
      { index: true, element: <CompRequests /> },
      { path: 'active-members', element: <CompPartners /> },
    ],
  },
  {
    path: '/conductor/:userId',
    element: <CompProfile />,
  },
  {
    path: '/publication',
    element: <CompPublication />,
  },
  {
    path: '/dashboard',
    element: <CompDashboard />,
  },
  {
    path: '/chat',
    element: <PageChatMobile />,
  },
  {
    path: '/notificaciones',
    element: <PageNotificacionesMobile />,
  },
  {
    path: 'completedtrips',
    element: <CompCompletedTrips />,
  },
]);
