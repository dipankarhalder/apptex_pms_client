import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { Dashboard, Rreturn } from "../../../components/common/Icons";
import { paths } from "../../../config/paths";
import { useAuthStore } from "../../../store/authStore";

export const AppPageInsideCover = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AppTopPageCover = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 20px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const ManageReturns = () => {
  const { isUsername } = useAuthStore();

  return (
    <AppPageInsideCover>
      <AppTopPageCover>
        <Breadcrumb
          items={[
            {
              label: "Dashboard",
              icon: <Dashboard />,
              to: `/${isUsername}`,
            },
            {
              label: "Return Informations",
              icon: <Rreturn />,
              to: `/${isUsername}/${paths.return}`,
            },
          ]}
        />
      </AppTopPageCover>
      <Outlet />
    </AppPageInsideCover>
  );
};
