import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb } from "../../../../shared/Breadcrumb";
import {
  Dashboard,
  User,
  CustomerSystem,
} from "../../../../components/common/Icons";
import { paths } from "../../../../config/paths";
import { useAuthStore } from "../../../../store/authStore";
import { fontSize, fontWeight } from "../../../../styles/mixins";

export const AppPageInsideCover = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AppTopPageCover = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const AppPageTitleHeading = styled.div`
  width: auto;
  height: 44px;
  display: flex;
  ${fontSize("13px")}
  ${fontWeight("600")}
  align-items: center;
  padding: 0px 20px;
`;

export const AppPageBradcrumb = styled.div`
  padding: 0px 20px;
`;

export const ManageCustomer = () => {
  const { isUsername } = useAuthStore();

  return (
    <AppPageInsideCover>
      <AppTopPageCover>
        <AppPageTitleHeading>Manage Customer Informations</AppPageTitleHeading>
        <AppPageBradcrumb>
          <Breadcrumb
            items={[
              {
                label: "Dashboard",
                icon: <Dashboard />,
                to: `/${isUsername}`,
              },
              {
                label: "CRM",
                icon: <CustomerSystem />,
                to: `/${isUsername}/crm`,
              },
              {
                label: "Customer Informations",
                icon: <User />,
                to: `/${isUsername}/crm/${paths.crmcustomers}`,
              },
            ]}
          />
        </AppPageBradcrumb>
      </AppTopPageCover>
      <Outlet />
    </AppPageInsideCover>
  );
};
