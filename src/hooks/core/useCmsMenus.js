import { useAuthStore } from "../../store/authStore";
import { Dashboard, Anasysis } from "../../components/common/Icons";

export const useCmsMenus = () => {
  const { isUsername } = useAuthStore();

  return [
    {
      id: 1,
      label: "Manage CMS",
      children: [
        {
          id: 1,
          icon: Dashboard,
          label: "CMS Dashboard",
          path: `/${isUsername}/cms`,
        },
        {
          id: 2,
          icon: Anasysis,
          label: "CMS Analytics",
          path: `/${isUsername}/cms`,
        },
      ],
    },
  ];
};
