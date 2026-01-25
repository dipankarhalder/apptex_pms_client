import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { paths } from "../app/paths";
import { ErrorPage } from "../error";
import { AuthLayout } from "../layout";
import { VerifyEmailPage, LoginPage, RegisterPage } from "../pages/auth";
import { ComposeProviders } from "../context/composeProvider";
import { ToastProvider } from "../shared/toast/toastProvider";
import { theme, GlobalFonts, GlobalStyle } from "../styles";

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
  const providers = useMemo(
    () => [
      ({ children }) => (
        <ThemeProvider theme={theme}>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      ),
    ],
    [],
  );

  return (
    <ComposeProviders providers={providers}>
      <GlobalFonts />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ComposeProviders>
  );
}
