import { Outlet } from "react-router-dom"; // useLocation
import { AppMainCover, AppBgSec } from "../style";

export const AuthLayout = () => {
  // const location = useLocation();

  return (
    <AppMainCover>
      <Outlet />
    </AppMainCover>
  );
};
