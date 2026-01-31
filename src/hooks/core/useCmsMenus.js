import { useAuthStore } from "../../store/authStore";
import { paths } from "../../config/paths";
import {
  Dashboard,
  Products,
  Project,
  Rreturn,
  User,
  Reports,
  Settings,
  Billings,
} from "../../components/common/Icons";

export const useCmsMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Manage Leads",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "Overview",
          path: `/${isUsername}/cms`,
        },
        {
          id: 2,
          icon: Products,
          label: "Leads Information",
          path: `/${isUsername}/cms/${paths.leadinfo}`,
        },
        {
          id: 3,
          icon: Project,
          label: "Leads Assignment",
          path: `/${isUsername}/cms/${paths.leadassign}`,
        },
      ],
    },
    {
      id: 2,
      label: "Manage Communications",
      children: [
        {
          id: 1,
          icon: Project,
          label: "Follow-up Status",
          path: `/${isUsername}/cms/${paths.followup}`,
        },
        {
          id: 2,
          icon: Rreturn,
          label: "Sales Pipeline",
          path: `/${isUsername}/cms/${paths.pipeline}`,
        },
        {
          id: 3,
          icon: User,
          label: "Customers",
          path: `/${isUsername}/cms/${paths.crmcustomers}`,
        },
      ],
    },
    {
      id: 3,
      label: "Manage Reports",
      children: [
        {
          id: 3,
          icon: Billings,
          label: "Billings",
          path: `/${isUsername}/cms/${paths.crmbilling}`,
        },
        {
          id: 1,
          icon: Reports,
          label: "Reports",
          path: `/${isUsername}/cms/${paths.crmreport}`,
        },
        {
          id: 2,
          icon: Settings,
          label: "Settings",
          path: `/${isUsername}/cms/${paths.crmsettings}`,
        },
      ],
    },
  ];
};
