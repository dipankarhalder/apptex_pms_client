import { useAuthStore } from "../../store/authStore";
import { paths } from "../../config/paths";
import {
  User,
  Deals,
  Phone,
  Tasks,
  Teams,
  Notify,
  Assets,
  Members,
  Configr,
  Clients,
  Vendors,
  Reports,
  Products,
  Invoice,
  Tracking,
  Settings,
  Rreturn,
  Companies,
  Resource,
  Activity,
  Schedules,
  Subscription,
} from "../../components/common/Icons";

export const usePmsMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 5,
      label: "Manage PMS",
      children: [
        {
          id: 2,
          icon: Companies,
          label: "Company",
          path: `/${isUsername}/pms/${paths.company}`,
        },
        {
          id: 5,
          icon: Products,
          label: "Warehouse",
          path: `/${isUsername}/pms/${paths.warehouse}`,
        },
        { id: 1, icon: Phone, label: "Contact", path: "/" },
        { id: 3, icon: Deals, label: "Deals", path: "/" },
        { id: 4, icon: Activity, label: "Activities", path: "/" },
      ],
    },
    {
      id: 3,
      label: "Products",
      children: [
        {
          id: 1,
          icon: Products,
          label: "Products",
          path: `/${isUsername}/pms/${paths.products}`,
        },
        {
          id: 3,
          icon: Rreturn,
          label: "Returns",
          path: `/${isUsername}/pms/${paths.return}`,
        },
        {
          id: 5,
          icon: Vendors,
          label: "Vendors",
          path: `/${isUsername}/pms/${paths.vendors}`,
        },
        {
          id: 4,
          icon: Teams,
          label: "Suppliers",
          path: `/${isUsername}/pms/${paths.vendors}`,
        },
        { id: 2, icon: Tracking, label: "Trackings", path: "/" },
        {
          id: 6,
          icon: Products,
          label: "Status",
          path: `/${isUsername}/pms/${paths.status}`,
        },
      ],
    },
    {
      id: 2,
      label: "Projects",
      children: [
        { id: 1, icon: Tasks, label: "Tasks", path: "/", count: 24 },
        { id: 3, icon: Assets, label: "Assets", path: "/", count: 3 },
        {
          id: 4,
          icon: Reports,
          label: "Reports",
          path: `/${isUsername}/pms/${paths.reports}`,
        },
        { id: 5, icon: Schedules, label: "Schedules", path: "/" },
        { id: 2, icon: Teams, label: "Teams", path: "/", count: 7 },
        { id: 6, icon: Clients, label: "Clients", path: "/", count: 10 },
        { id: 7, icon: Invoice, label: "Invoices", path: "/" },
      ],
    },
    {
      id: 4,
      label: "Resources Management",
      children: [
        {
          id: 1,
          icon: Resource,
          label: "Onboard",
          path: `/${isUsername}/pms/${paths.onboard}`,
        },
        {
          id: 2,
          icon: Members,
          label: "Members",
          path: `/${isUsername}/pms/${paths.members}`,
          count: 6,
        },
        {
          id: 3,
          icon: Assets,
          label: "Salaries",
          path: `/${isUsername}/pms/${paths.salaries}`,
        },
        {
          id: 5,
          icon: Schedules,
          label: "Attendances",
          path: `/${isUsername}/pms/${paths.attendances}`,
        },
        { id: 4, icon: Reports, label: "Reports", path: "/" },
      ],
    },
    {
      id: 6,
      label: "System Options",
      children: [
        { id: 1, icon: Notify, label: "Notification", path: "/" },
        { id: 2, icon: Configr, label: "Preferences", path: "/" },
        { id: 3, icon: Settings, label: "Settings", path: "/" },
        {
          id: 4,
          icon: Subscription,
          label: "Subscription",
          path: "/",
        },
        { id: 5, icon: User, label: "Profile", path: "/" },
      ],
    },
  ];
};
