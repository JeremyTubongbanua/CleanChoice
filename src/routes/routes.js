import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';
//
import BlogPage from '../pages/BlogPage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import ProductsPage from '../pages/ProductsPage';
// import DashboardAppPage from '../pages/DashboardAppPage';
import EcoCheckDashboard from '../pages/EcoCheckDashboard';
import SingleProduct from '../pages/SingleProduct';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        {
          path: 'app',
          element: <EcoCheckDashboard />,
          children: [
            { path: ':items', element: <EcoCheckDashboard /> },
            { index: true, element: <EcoCheckDashboard /> },
          ],
        },
        { path: 'user', element: <UserPage /> },
        {
          path: 'products',
          children: [
            { path: ':productId', element: <SingleProduct /> },
            { index: true, element: <ProductsPage /> },
          ],
        },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ]);

  return routes;
}
