import { useAuthStore } from "../../store/authStore";
import { Dashboard, Anasysis } from "../../components/common/Icons";

export const useAdminMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Main Menu",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "Dashboard",
          path: `/${isUsername}`,
        },
        { id: 2, icon: Anasysis, label: "Analytics", path: "/" },
      ],
    },
  ];
};
