import { Outlet, Navigate } from "react-router-dom";
import { paths } from "../routers/paths";
import { useAuthStore } from "../store/authStore";
import { useGetProfile } from "../hooks/useProfile";
import { AddInitPop } from "../components/AddInitPop";
import { AppAuthCover } from "./style";

export const AdminLayout = () => {
  const { accessToken, isAuthChecked } = useAuthStore();
  const { data, isLoading, isError } = useGetProfile();

  if (!isAuthChecked) {
    return <div>Checking session...</div>;
  }

  if (!accessToken) {
    return <Navigate to={paths.verifiEmail} replace />;
  }

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (isError) {
    return <Navigate to={paths.login} replace />;
  }

  console.log(data);

  return (
    <AppAuthCover>
      <Outlet />
      {data.otherInfo.companies === 0 && data.otherInfo.warehouses === 0 && (
        <AddInitPop />
      )}
    </AppAuthCover>
  );
};
