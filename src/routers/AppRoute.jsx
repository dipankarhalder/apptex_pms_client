import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "./paths";
import { AuthLayout } from "../layout/AuthLayout";
import { ErrorPage } from "../pages/common/Error";
import { VerifyEmailPage } from "../pages/auth/VerifyEmail";
import { LoginPage } from "../pages/auth/Login";
import { RegisterPage } from "../pages/auth/Register";

const router = createBrowserRouter([
  {
    path: paths.verifiEmail,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <VerifyEmailPage />,
      },
      {
        path: paths.login,
        element: <LoginPage />,
      },
      {
        path: paths.register,
        element: <RegisterPage />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
