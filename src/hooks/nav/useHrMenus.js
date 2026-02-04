import { useAuthStore } from "../../store/authStore";
import { paths } from "../../config/paths";
import {
  Dashboard,
  Products,
  Project,
  Rreturn,
  User,
  Reports,
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
        // {
        //   id: 2,
        //   icon: User,
        //   label: "Shifting Details",
        //   path: `/${isUsername}/hr/${paths.hrshifting}`,
        // },
        {
          id: 3,
          icon: User,
          label: "Holiday Lists",
          path: `/${isUsername}/hr/${paths.hrholiday}`,
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
          path: `/${isUsername}/hr/${paths.hronboard}`,
        },
        {
          id: 2,
          icon: Project,
          label: "Off-boarding Process",
          path: `/${isUsername}/hr/${paths.hroffboard}`,
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
          path: `/${isUsername}/hr/${paths.hremployee}`,
        },
        {
          id: 2,
          icon: Rreturn,
          label: "Attendance Info",
          path: `/${isUsername}/hr/${paths.hrattendance}`,
        },
        // {
        //   id: 3,
        //   icon: User,
        //   label: "Leaves Info",
        //   path: `/${isUsername}/hr/${paths.hrleaves}`,
        // },
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
          path: `/${isUsername}/hr/${paths.hrsalary}`,
        },
        // {
        //   id: 2,
        //   icon: Reports,
        //   label: "Provident Fund",
        //   path: `/${isUsername}/hr/${paths.hrprovident}`,
        // },
      ],
    },
    {
      id: 5,
      label: "Manage Insurence",
      children: [
        // {
        //   id: 1,
        //   icon: Reports,
        //   label: "Taxes",
        //   path: `/${isUsername}/hr/${paths.hrtax}`,
        // },
        {
          id: 2,
          icon: Reports,
          label: "Insurence Records",
          path: `/${isUsername}/hr/${paths.hrinsurence}`,
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
          path: `/${isUsername}/hr/${paths.hrtraining}`,
        },
        {
          id: 2,
          icon: Reports,
          label: "Non-Paid Training",
          path: `/${isUsername}/hr/${paths.hrnonpaidtraining}`,
        },
      ],
    },
  ];
};
