import {
  Billings,
  Products,
  Project,
  User,
  Reports,
} from "../../../components/common/Icons";
import { paths } from "../../../config/paths";

import { useLeadStore } from "../../../store/crm/leadStore";
import { useBillingStore } from "../../../store/crm/billingStore";
import { useCustomerStore } from "../../../store/crm/customerStore";
import { useReportStore } from "../../../store/crm/reportStore";

import { createLeadColumns } from "./columns/leadColumns";
import { createAssignColumns } from "./columns/assignColumns";
import { createBillingsColumns } from "./columns/billingColumns";
import { createCustomerColumns } from "./columns/customerColumns";
import { createReportColumns } from "./columns/reportColumns";
import { createFollowupColumns } from "./columns/followupColumns";

export const CRM_CONFIG = {
  leads: {
    path: paths.leadinfo,
    title: "Manage Lead Informations",
    sectionLabel: "Lead Informations",
    icon: <Products />,
    searchKey: "companyName",
    useStore: useLeadStore,
    dataKey: "leads",
    createColumns: createLeadColumns,
  },
  assign: {
    path: paths.leadassign,
    title: "Manage Lead Assignment",
    sectionLabel: "Lead Assignments",
    icon: <Project />,
    searchKey: "companyName",
    useStore: useLeadStore,
    dataKey: "leads",
    createColumns: createAssignColumns,
  },
  followups: {
    path: paths.followup,
    title: "Manage Follow-ups",
    sectionLabel: "Follow-ups",
    icon: <Project />,
    searchKey: "name",
    useStore: useLeadStore,
    dataKey: "leads",
    createColumns: createFollowupColumns,
  },
  billing: {
    path: paths.crmbilling,
    title: "Manage Billing Informations",
    sectionLabel: "Billing Informations",
    icon: <Billings />,
    searchKey: "clientName",
    useStore: useBillingStore,
    dataKey: "billings",
    createColumns: createBillingsColumns,
  },
  customer: {
    path: paths.crmcustomers,
    title: "Manage Customer Informations",
    sectionLabel: "Customer Informations",
    icon: <User />,
    searchKey: "name",
    useStore: useCustomerStore,
    dataKey: "customers",
    createColumns: createCustomerColumns,
  },
  reports: {
    path: paths.crmreport,
    title: "Manage All Reports",
    sectionLabel: "Report Informations",
    icon: <Reports />,
    searchKey: "title",
    useStore: useReportStore,
    dataKey: "reports",
    createColumns: createReportColumns,
  },
};
