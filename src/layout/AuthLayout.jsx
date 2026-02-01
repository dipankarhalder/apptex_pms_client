import { Outlet, Navigate } from "react-router-dom";
import { Logo } from "../components/common/Logo";
import { CopyWrite } from "../components/common/CopyWrite";
import { useAuthStore } from "../store/authStore";
import {
  AppMainCover,
  AppBgTopSection,
  AppBgTopRightSection,
  AppMainFormSection,
  AppHeaderAuth,
  AppFormCover,
  AppFooterAuth,
  AppBackgroundSection,
} from "./style";

export const AuthLayout = () => {
  const { accessToken, isAuthChecked, isUsername } = useAuthStore();

  if (!isAuthChecked) {
    return <div>Checking session...</div>;
  }

  if (accessToken) {
    return <Navigate to={`/${isUsername}`} replace />;
  }

  return (
    <AppMainCover>
      <AppBgTopSection />
      <AppBgTopRightSection />
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
