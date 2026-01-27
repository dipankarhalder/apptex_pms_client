import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../config/paths";
import { LeftSidebar } from "../components/leftsidebar/Sidebar";
import { RightSidebar } from "../components/rightsidebar/Sidebar";
import { useAuthStore } from "../store/authStore";
import { useGetProfile } from "../hooks/useProfile";
import { AddInitPop } from "../components/addForms/AddInitPop";

import {
  AppAuthCover,
  AppMainContextCover,
  AppInsideContentCover,
} from "./style";

export const AdminLayout = () => {
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
      <LeftSidebar />
      <AppMainContextCover>
        <AppInsideContentCover>
          <Outlet />
          {JSON.stringify(data)}
        </AppInsideContentCover>
      </AppMainContextCover>
      <RightSidebar />
      {needsInitPop(data) && <AddInitPop />}
    </AppAuthCover>
  );
};
