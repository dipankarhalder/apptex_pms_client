import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "./paths";
import { useAuthBootstrap } from "../hooks/useBootstrap";
import { AuthLayout } from "../layout/AuthLayout";
import { AdminLayout } from "../layout/AdminLayout";

import { ErrorPage } from "../pages/common/Error";
import { VerifyEmailPage } from "../pages/auth/VerifyEmail";
import { LoginPage } from "../pages/auth/Login";
import { RegisterPage } from "../pages/auth/Register";
import { DashboardPage } from "../pages/main/Dashboard";

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
    path: paths.dashboard,
    element: <AdminLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
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
