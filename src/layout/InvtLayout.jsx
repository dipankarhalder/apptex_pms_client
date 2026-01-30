import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { useAuthStore } from "../store/authStore";
import { useInvtMenus } from "../hooks/core/useInvtMenus";
import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const InvtLayout = () => {
  const menuItemsInvt = useInvtMenus();
  const { accessToken, isAuthChecked } = useAuthStore();
  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken) return <Navigate to={paths.verifiEmail} replace />;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItemsInvt} />
      <AppMainContextCover>
        <p>Stock and Inventory</p>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>
    </AppAuthCover>
  );
};
