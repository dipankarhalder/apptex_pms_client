import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { useAuthStore } from "../store/authStore";
import { useGetProfile } from "../hooks/useProfile";
import { AddInitPop } from "../components/addForms/AddInitPop";
import { useCmsMenus } from "../hooks/core/useCmsMenus";
import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const CmsLayout = () => {
  const menuItemsCms = useCmsMenus();
  const { accessToken, isAuthChecked } = useAuthStore();
  const { data, isLoading, isError } = useGetProfile();

  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken || isError)
    return <Navigate to={paths.verifiEmail} replace />;
  if (isLoading) return <div>Loading profile...</div>;

  const needsInitPop = (profile) =>
    profile?.otherInfo?.companies === 0 && profile?.otherInfo?.warehouses === 0;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItemsCms} />
      <AppMainContextCover>
        <p>CRM - Customer Relationship Management</p>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>
      {needsInitPop(data) && <AddInitPop />}
    </AppAuthCover>
  );
};
