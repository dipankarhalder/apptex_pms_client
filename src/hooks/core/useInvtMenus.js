import { useAuthStore } from "../../store/authStore";
import { Dashboard, Anasysis } from "../../components/common/Icons";

export const useInvtMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Manage Inventory",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "Invt Dashboard",
          path: `/${isUsername}/invt`,
        },
        {
          id: 2,
          icon: Anasysis,
          label: "Invt Analytics",
          path: `/${isUsername}/invt`,
        },
      ],
    },
  ];
};
