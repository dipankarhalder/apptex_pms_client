/** node modules */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/** context */
import { ComposeProviders } from "../Context/ComposeProviders";

/** custom module */
import { AuthLayout } from "../layout";
import { Error } from "../Error";
import { VerifyEmailPage, LoginPage, RegisterPage } from "../pages/auth";

/** styles module */
import { theme, GlobalFonts, GlobalStyle } from "../styles";

/** initialized routes */
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

/** theme */
const providers = [
  ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
];

/** render element */
export function AppRoute() {
  return (
    <ComposeProviders providers={providers}>
      <GlobalFonts />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ComposeProviders>
  );
}
