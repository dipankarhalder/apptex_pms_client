/** node modules */
import { Outlet } from "react-router-dom";

/** custom module */
import { LogoComponent } from "../../components";

/** styles module */
import {
  AppMainCover,
  AppLogoAuth,
  AppFormCover,
  AppMainFormSection,
  AppBgSec,
} from "../style";

export const AuthLayout = () => {
  return (
    <AppMainCover>
      <AppMainFormSection>
        <AppLogoAuth>
          <LogoComponent />
        </AppLogoAuth>
        <AppFormCover>
          <Outlet />
        </AppFormCover>
        <div>fcv</div>
      </AppMainFormSection>
      <AppBgSec />
    </AppMainCover>
  );
};
