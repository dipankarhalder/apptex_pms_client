import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { Dashboard, Companies } from "../../../components/common/Icons";
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
  align-items: flex-start;
  flex-direction: column;
`;

export const AppPageTitleHeading = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const AppPageBradcrumb = styled.div`
  padding: 0px 20px;
`;

export const ManageCompany = () => {
  const { isUsername } = useAuthStore();

  return (
    <AppPageInsideCover>
      <AppTopPageCover>
        <AppPageTitleHeading>Manage Company</AppPageTitleHeading>
        <AppPageBradcrumb>
          <Breadcrumb
            items={[
              {
                label: "Dashboard",
                icon: <Dashboard />,
                to: `/${isUsername}`,
              },
              {
                label: "Company Informations",
                icon: <Companies />,
                to: `/${isUsername}/pms/${paths.company}`,
              },
            ]}
          />
        </AppPageBradcrumb>
      </AppTopPageCover>
      <Outlet />
    </AppPageInsideCover>
  );
};
