import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "../config/paths";
import { useAuthBootstrap } from "../hooks/core/useBootstrap";
import { AuthLayout } from "../layout/AuthLayout";
import { AdminLayout } from "../layout/AdminLayout";

import { ErrorPage } from "../pages/common/Error";
import { VerifyEmailPage } from "../pages/auth/VerifyEmail";
import { LoginPage } from "../pages/auth/Login";
import { RegisterPage } from "../pages/auth/Register";
import { DashboardPage } from "../pages/main/Dashboard";
import { ManageCompany } from "../pages/main/company/ManageCompany";
import { ListCompanies } from "../pages/main/company/ListCompanies";
import { ManageStatus } from "../pages/main/status/ManageStatus";
import { ListStatuses } from "../pages/main/status/ListStatuses";
import { ManageWarehouse } from "../pages/main/warehouse/ManageWarehouse";
import { ListWarehouses } from "../pages/main/warehouse/ListWarehouses";

const router = createBrowserRouter([
  {
    path: paths.verifiEmail,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <VerifyEmailPage /> },
      { path: paths.login, element: <LoginPage /> },
      { path: paths.register, element: <RegisterPage /> },
    ],
  },
  {
    path: paths.admin,
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: paths.company,
        element: <ManageCompany />,
        children: [{ index: true, element: <ListCompanies /> }],
      },
      {
        path: paths.status,
        element: <ManageStatus />,
        children: [{ index: true, element: <ListStatuses /> }],
      },
      {
        path: paths.warehouse,
        element: <ManageWarehouse />,
        children: [{ index: true, element: <ListWarehouses /> }],
      },
    ],
  },
]);

const AuthBootstrapProvider = ({ children }) => {
  useAuthBootstrap();
  return children;
};

export function AppRoute() {
  return (
    <AuthBootstrapProvider>
      <RouterProvider router={router} />
    </AuthBootstrapProvider>
  );
}
