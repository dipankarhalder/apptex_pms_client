import { useAuthStore } from "../../store/authStore";
import { Dashboard, Anasysis } from "../../components/common/Icons";

export const useErpMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Manage Erp",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "ERP Dashboard",
          path: `/${isUsername}/erp`,
        },
        {
          id: 2,
          icon: Anasysis,
          label: "ERP Analytics",
          path: `/${isUsername}/erp`,
        },
      ],
    },
  ];
};
