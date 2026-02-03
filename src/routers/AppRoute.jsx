import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "../config/paths";
import { Rreturn } from "../components/common/Icons";
import { useAuthBootstrap } from "../hooks/core/useBootstrap";

import { AuthLayout } from "../layout/AuthLayout";
import { AppLayout } from "../layout/AppLayout";

import { ErrorPage } from "../pages/common/Error";
import { VerifyEmailPage } from "../pages/auth/VerifyEmail";
import { LoginPage } from "../pages/auth/Login";
import { RegisterPage } from "../pages/auth/Register";

import { DashboardPage } from "../pages/main/Dashboard";
import { ManageCompany } from "../pages/main/company/ManageCompany";
import { ListCompanies } from "../pages/main/company/ListCompanies";
import { ManageStatus } from "../pages/main/status/ManageStatus";
import { ListStatuses } from "../pages/main/status/ListStatuses";
import { ManageWarehouse } from "../pages/main/warehouse/ManageWarehouse";
import { ListWarehouses } from "../pages/main/warehouse/ListWarehouses";
import { ManageProduct } from "../pages/main/products/ManageProduct";
import { ListProducts } from "../pages/main/products/ListProducts";
import { ManageReturns } from "../pages/main/returns/ManageReturns";
import { ListReturns } from "../pages/main/returns/ListReturns";

import { CRM_CONFIG } from "../pages/main/crm/crmConfigs";
import { CrmManagePage } from "../pages/main/crm/CrmManagePage";
import { CrmListPages } from "../pages/main/crm/CrmListPages";

import { ListPipelineNavigate } from "../pages/main/crm/pipeline/ListPipelineNavigate";
import { ListPipelineTabs } from "../pages/main/crm/pipeline/ListPipelineTabs";
import { ManageSettings } from "../pages/main/crm/settings/ManageSettings";
import { ListSettings } from "../pages/main/crm/settings/ListSettings";

const router = createBrowserRouter([
  {
    path: paths.verifiEmail,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <VerifyEmailPage /> },
      { path: paths.login, element: <LoginPage /> },
      { path: paths.register, element: <RegisterPage /> },
    ],
  },

  // ADMIN (/:username)
  {
    path: paths.admin,
    element: <AppLayout />,
    handle: { module: "admin" },
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // ERP (/:username/erp)
  {
    path: paths.erp,
    element: <AppLayout />,
    handle: { module: "erp" },
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // PMS (/:username/pms)
  {
    path: paths.pms,
    element: <AppLayout />,
    handle: { module: "pms" },
    children: [
      // DEFAULT PMS PAGE → COMPANY LIST
      {
        index: true,
        element: <ManageCompany />,
      },

      {
        path: paths.company,
        element: <ManageCompany />,
        children: [{ index: true, element: <ListCompanies /> }],
      },

      {
        path: paths.status,
        element: <ManageStatus />,
        children: [{ index: true, element: <ListStatuses /> }],
      },

      {
        path: paths.warehouse,
        element: <ManageWarehouse />,
        children: [{ index: true, element: <ListWarehouses /> }],
      },

      {
        path: paths.products,
        element: <ManageProduct />,
        children: [{ index: true, element: <ListProducts /> }],
      },

      {
        path: paths.return,
        element: <ManageReturns />,
        children: [{ index: true, element: <ListReturns /> }],
      },
    ],
  },

  // CMS (/:username/cms)
  {
    path: paths.cms,
    element: <AppLayout />,
    handle: { module: "cms" },
    children: [
      { index: true, element: <DashboardPage /> },
      ...Object.values(CRM_CONFIG).map(
        ({
          path,
          title,
          sectionLabel,
          icon,
          useStore,
          createColumns,
          searchKey,
          dataKey,
        }) => ({
          path,
          element: (
            <CrmManagePage
              title={title}
              sectionLabel={sectionLabel}
              sectionIcon={icon}
              sectionPath={path}
            />
          ),
          children: [
            {
              index: true,
              element: (
                <CrmListPages
                  useStore={useStore}
                  createColumns={createColumns}
                  searchKey={searchKey}
                  dataKey={dataKey}
                />
              ),
            },
          ],
        }),
      ),
      {
        path: paths.pipeline,
        element: (
          <CrmManagePage
            title="Manage Sales Pipelines"
            sectionLabel="Sales Pipelines"
            sectionIcon={<Rreturn />}
            sectionPath={paths.pipeline}
          />
        ),
        children: [
          {
            element: <ListPipelineNavigate />,
            children: [
              { index: true, element: <ListPipelineTabs stage="New Lead" /> },
              {
                path: paths.pipelineQualified,
                element: <ListPipelineTabs stage="Qualified" />,
              },
              {
                path: paths.pipelineProposal,
                element: <ListPipelineTabs stage="Proposal" />,
              },
              {
                path: paths.pipelineWon,
                element: <ListPipelineTabs stage="Won" />,
              },
              {
                path: paths.pipelineLost,
                element: <ListPipelineTabs stage="Lost" />,
              },
            ],
          },
        ],
      },
      {
        path: paths.crmsettings,
        element: <ManageSettings />,
        children: [{ index: true, element: <ListSettings /> }],
      },
    ],
  },

  // INVENTORY (/:username/invt)
  {
    path: paths.invt,
    element: <AppLayout />,
    handle: { module: "invt" },
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // HR (/:username/hr)
  {
    path: paths.hr,
    element: <AppLayout />,
    handle: { module: "hr" },
    children: [{ index: true, element: <DashboardPage /> }],
  },
]);

const AuthBootstrapProvider = ({ children }) => {
  useAuthBootstrap();
  return children;
};

export function AppRoute() {
  return (
    <AuthBootstrapProvider>
      <RouterProvider router={router} />
    </AuthBootstrapProvider>
  );
}
