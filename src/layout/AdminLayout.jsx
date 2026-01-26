import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../routers/paths";
import { Sidebar } from "../components/Sidebar";
import { useAuthStore } from "../store/authStore";
import { useGetProfile } from "../hooks/useProfile";
import { AddInitPop } from "../components/AddInitPop";
import { AppAuthCover, AppMainContextCover } from "./style";

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
      <Sidebar />
      <AppMainContextCover>
        <Outlet />
        {JSON.stringify(data)}
      </AppMainContextCover>
      {needsInitPop(data) && <AddInitPop />}
    </AppAuthCover>
  );
};
