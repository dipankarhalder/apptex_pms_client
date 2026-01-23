/** node modules */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalFonts, GlobalStyle } from "../styles";
import { ComposeProviders } from "../Context/ComposeProviders";

import { AuthLayout } from "../layout";
import { Error } from "../Error";
import { VerifyEmailPage, LoginPage, RegisterPage } from "../pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <VerifyEmailPage />,
      },
      {
        index: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

const providers = [
  ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
];

export function AppRoute() {
  return (
    <ComposeProviders providers={providers}>
      <GlobalFonts />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ComposeProviders>
  );
}
