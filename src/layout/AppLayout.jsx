import { Outlet, Navigate, useMatches } from "react-router-dom";
import { paths } from "../config/paths";
import { AdminSidebar } from "../components/mainsidebar/AdminSidebar";
import { AddInitPop } from "../components/addForms/AddInitPop";
import { useAuthStore } from "../store/authStore";
import { useGetProfile } from "../hooks/modules/useProfile";

import { useAdminMenus } from "../hooks/nav/useMainMenus";
import { useCmsMenus } from "../hooks/nav/useCmsMenus";
import { useErpMenus } from "../hooks/nav/useErpMenus";
import { useInvtMenus } from "../hooks/nav/useInvtMenus";
import { usePmsMenus } from "../hooks/nav/usePmsMenus";

import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

const MODULE_CONFIG = {
  admin: {
    title: "Overview",
    useMenus: useAdminMenus,
  },
  cms: {
    title: "CRM - Customer Relationship Management",
    useMenus: useCmsMenus,
    showInitPopup: true,
  },
  erp: {
    title: "ERP - Enterprise Resource Planning",
    useMenus: useErpMenus,
  },
  invt: {
    title: "Stock and Inventory",
    useMenus: useInvtMenus,
  },
  pms: {
    title: "PMS - Project Management System",
    useMenus: usePmsMenus,
  },
};

export const AppLayout = () => {
  const matches = useMatches();
  const { accessToken, isAuthChecked } = useAuthStore();
  const { data: profile, isLoading, isError } = useGetProfile();

  const moduleKey = matches.find((m) => m.handle?.module)?.handle.module;
  const moduleConfig = MODULE_CONFIG[moduleKey] ?? {};
  const menuItems = moduleConfig.useMenus ? moduleConfig.useMenus() : [];

  if (!isAuthChecked) return <div>Checking session...</div>;
  if (!accessToken || isError) {
    return <Navigate to={paths.verifiEmail} replace />;
  }
  if (isLoading) return <div>Loading profile...</div>;

  const needsInitPop =
    moduleConfig.showInitPopup &&
    profile?.otherInfo?.companies === 0 &&
    profile?.otherInfo?.warehouses === 0;

  return (
    <AppAuthCover>
      <AdminSidebar menuItems={menuItems} />

      <AppMainContextCover>
        <p>{moduleConfig.title}</p>
        <AppInsideContentCover>
          <Outlet />
        </AppInsideContentCover>
      </AppMainContextCover>

      {needsInitPop && <AddInitPop />}
    </AppAuthCover>
  );
};
