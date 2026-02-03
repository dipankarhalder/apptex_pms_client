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

export const useHrMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Manage Internals",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "Overview",
          path: `/${isUsername}/hr`,
        },
        {
          id: 2,
          icon: User,
          label: "Shifting Details",
          path: `/${isUsername}/hr/${paths.crmcustomers}`,
        },
        {
          id: 3,
          icon: User,
          label: "Holiday Lists",
          path: `/${isUsername}/hr/${paths.crmcustomers}`,
        },
      ],
    },
    {
      id: 2,
      label: "Manage Processes",
      children: [
        {
          id: 1,
          icon: Products,
          label: "On-boarding Process",
          path: `/${isUsername}/hr/${paths.leadinfo}`,
        },
        {
          id: 2,
          icon: Project,
          label: "Off-boarding Process",
          path: `/${isUsername}/hr/${paths.leadassign}`,
        },
      ],
    },
    {
      id: 3,
      label: "Manage Employee",
      children: [
        {
          id: 1,
          icon: Project,
          label: "Employee Records",
          path: `/${isUsername}/hr/${paths.followup}`,
        },
        {
          id: 2,
          icon: Rreturn,
          label: "Attendance Info",
          path: `/${isUsername}/hr/${paths.pipeline}`,
        },
        {
          id: 3,
          icon: User,
          label: "Leaves Info",
          path: `/${isUsername}/hr/${paths.crmcustomers}`,
        },
      ],
    },
    {
      id: 4,
      label: "Manage Salary",
      children: [
        {
          id: 1,
          icon: Billings,
          label: "Salary Details",
          path: `/${isUsername}/hr/${paths.crmbilling}`,
        },
        {
          id: 2,
          icon: Reports,
          label: "Provident Fund",
          path: `/${isUsername}/hr/${paths.crmreport}`,
        },
      ],
    },
    {
      id: 5,
      label: "Manage Tax & Insurence",
      children: [
        {
          id: 1,
          icon: Reports,
          label: "Taxes",
          path: `/${isUsername}/hr/${paths.crmreport}`,
        },
        {
          id: 2,
          icon: Reports,
          label: "Insurence Records",
          path: `/${isUsername}/hr/${paths.crmreport}`,
        },
      ],
    },
    {
      id: 6,
      label: "Manage Training",
      children: [
        {
          id: 1,
          icon: Billings,
          label: "Paid Training",
          path: `/${isUsername}/hr/${paths.crmbilling}`,
        },
        {
          id: 2,
          icon: Reports,
          label: "Non-Paid Training",
          path: `/${isUsername}/hr/${paths.crmreport}`,
        },
      ],
    },
  ];
};
