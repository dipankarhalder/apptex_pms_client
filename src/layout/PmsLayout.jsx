import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { useAuthStore } from "../store/authStore";
import { usePmsMenus } from "../hooks/core/usePmsMenus";
import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const PmsLayout = () => {
  const menuItemsPms = usePmsMenus();
  const { accessToken, isAuthChecked } = useAuthStore();
  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken) return <Navigate to={paths.verifiEmail} replace />;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItemsPms} />
      <AppMainContextCover>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>
    </AppAuthCover>
  );
};
