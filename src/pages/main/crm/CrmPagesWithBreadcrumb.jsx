import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Breadcrumb } from "../../../shared/Breadcrumb";
import { fontSize, fontWeight } from "../../../styles/mixins";

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const PageTitle = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  ${fontSize("13px")}
  ${fontWeight("600")}
`;

const PageBreadcrumb = styled.div`
  padding: 0 20px;
`;

export const CrmPagesWithBreadcrumb = ({ title, breadcrumbs }) => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>{title}</PageTitle>
        <PageBreadcrumb>
          <Breadcrumb items={breadcrumbs} />
        </PageBreadcrumb>
      </PageHeader>
      <Outlet />
    </PageWrapper>
  );
};
