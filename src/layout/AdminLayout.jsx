import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { useAuthStore } from "../store/authStore";
import { useAdminMenus } from "../hooks/core/useMainMenus";
import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const AdminLayout = () => {
  const menuItemsNew = useAdminMenus();
  const { accessToken, isAuthChecked } = useAuthStore();
  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken) return <Navigate to={paths.verifiEmail} replace />;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItemsNew} />
      <AppMainContextCover>
        <p>Overview</p>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>
    </AppAuthCover>
  );
};
