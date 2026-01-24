import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ComposeProviders } from "../contexts/composeProvider";
import { ToastProvider } from "../share/toast/toastProvider";
import { AuthLayout } from "../layout";
import { Error } from "../error";
import { VerifyEmailPage, LoginPage, RegisterPage } from "../pages/auth";
import { paths } from "../app/paths";
import { theme, GlobalFonts, GlobalStyle } from "../styles";

const router = createBrowserRouter([
  {
    path: paths.verifiEmail,
    element: <AuthLayout />,
    errorElement: <Error />,
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
