import { useAuthStore } from "../../store/authStore";
import {
  Dashboard,
  Products,
  Project,
  Rreturn,
  User,
  Reports,
  Settings,
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
          label: "Leads Info",
          path: `/${isUsername}/cms`,
        },
        {
          id: 3,
          icon: Project,
          label: "Leads Assignment",
          path: `/${isUsername}/cms`,
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
          path: `/${isUsername}/cms`,
        },
        {
          id: 2,
          icon: Rreturn,
          label: "Sales Pipeline",
          path: `/${isUsername}/cms`,
        },
        {
          id: 3,
          icon: User,
          label: "Customers",
          path: `/${isUsername}/cms`,
        },
      ],
    },
    {
      id: 3,
      label: "Manage Reports",
      children: [
        {
          id: 1,
          icon: Reports,
          label: "Reports",
          path: `/${isUsername}/cms`,
        },
        {
          id: 2,
          icon: Settings,
          label: "Settings",
          path: `/${isUsername}/cms`,
        },
      ],
    },
  ];
};
