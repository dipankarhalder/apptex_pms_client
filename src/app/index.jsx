/** node modules */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/** context */
import { ComposeProviders } from "../context/composeProviders";

/** custom module */
import { AuthLayout } from "../layout";
import { Error } from "../error";
import { VerifyEmailPage, LoginPage, RegisterPage } from "../pages/auth";

/** route */
import { paths } from "../app/paths";

/** styles module */
import { theme, GlobalFonts, GlobalStyle } from "../styles";

/** initialized routes */
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
