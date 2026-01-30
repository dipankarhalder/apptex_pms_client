import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { useAuthStore } from "../store/authStore";
import { useErpMenus } from "../hooks/core/useErpMenus";
import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const ErpLayout = () => {
  const menuItemsErp = useErpMenus();
  const { accessToken, isAuthChecked } = useAuthStore();
  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken) return <Navigate to={paths.verifiEmail} replace />;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItemsErp} />
      <AppMainContextCover>
        <p>ERP - Enterprise Resource Planning</p>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>
    </AppAuthCover>
  );
};
