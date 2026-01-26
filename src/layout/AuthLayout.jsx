import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../routers/paths";
import { Logo } from "../components/Logo";
import { CopyWrite } from "../components/CopyWrite";
import { useAuthStore } from "../store/authStore";
import {
  AppMainCover,
  AppMainFormSection,
  AppHeaderAuth,
  AppFormCover,
  AppFooterAuth,
  AppBackgroundSection,
} from "./style";

export const AuthLayout = () => {
  const { accessToken, isAuthChecked } = useAuthStore();

  if (!isAuthChecked) {
    return <div>Checking session...</div>;
  }

  if (accessToken) {
    return <Navigate to={paths.dashboard} replace />;
  }

  return (
    <AppMainCover>
      <AppMainFormSection>
        <AppHeaderAuth>
          <Logo />
        </AppHeaderAuth>
        <AppFormCover>
          <Outlet />
        </AppFormCover>
        <AppFooterAuth>
          <CopyWrite />
        </AppFooterAuth>
      </AppMainFormSection>
      <AppBackgroundSection />
    </AppMainCover>
  );
};
