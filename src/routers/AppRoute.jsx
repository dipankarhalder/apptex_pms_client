import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { paths } from "../config/paths";
import { useAuthBootstrap } from "../hooks/core/useBootstrap";

import { AuthLayout } from "../layout/AuthLayout";
import { AdminLayout } from "../layout/AdminLayout";
import { CmsLayout } from "../layout/CmsLayout";
import { PmsLayout } from "../layout/PmsLayout";
import { ErpLayout } from "../layout/ErpLayout";
import { InvtLayout } from "../layout/InvtLayout";

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

import { ManageLeads } from "../pages/main/crm/leadInfo/ManageLeads";
import { ListLeads } from "../pages/main/crm/leadInfo/ListLeads";
import { ManageAssigns } from "../pages/main/crm/leadAssign/ManageAssigns";
import { ListAssigns } from "../pages/main/crm/leadAssign/ListAssigns";

import { ManageFollow } from "../pages/main/crm/followUp/ManageFollow";
import { ListFollow } from "../pages/main/crm/followUp/ListFollow";

import { ManagePipeline } from "../pages/main/crm/pipeline/ManagePipeline";
import { ListPipeline } from "../pages/main/crm/pipeline/ListPipelines";

import { ManageCustomer } from "../pages/main/crm/customer/ManageCustomer";
import { ListCustomer } from "../pages/main/crm/customer/ListCustomer";

import { ManageReports } from "../pages/main/crm/reports/ManageReports";
import { ListReports } from "../pages/main/crm/reports/ListReports";

import { ManageSettings } from "../pages/main/crm/settings/ManageSettings";
import { ListSettings } from "../pages/main/crm/settings/ListSettings";

const router = createBrowserRouter([
  {
    path: paths.verifiEmail, // "/"
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
    element: <AdminLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // ERP (/:username/erp)
  {
    path: paths.erp,
    element: <ErpLayout />,
    children: [{ index: true, element: <DashboardPage /> }],
  },

  // PMS (/:username/pms)
  {
    path: paths.pms,
    element: <PmsLayout />,
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
    element: <CmsLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: paths.leadinfo,
        element: <ManageLeads />,
        children: [{ index: true, element: <ListLeads /> }],
      },
      {
        path: paths.leadassign,
        element: <ManageAssigns />,
        children: [{ index: true, element: <ListAssigns /> }],
      },
      {
        path: paths.followup,
        element: <ManageFollow />,
        children: [{ index: true, element: <ListFollow /> }],
      },
      {
        path: paths.pipeline,
        element: <ManagePipeline />,
        children: [{ index: true, element: <ListPipeline /> }],
      },
      {
        path: paths.crmcustomers,
        element: <ManageCustomer />,
        children: [{ index: true, element: <ListCustomer /> }],
      },
      {
        path: paths.crmreport,
        element: <ManageReports />,
        children: [{ index: true, element: <ListReports /> }],
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
    element: <InvtLayout />,
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
