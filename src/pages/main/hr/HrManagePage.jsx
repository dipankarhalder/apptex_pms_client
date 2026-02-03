import { HrPagesWithBreadcrumb } from "./HrPagesWithBreadcrumb";
import { Dashboard, CustomerSystem } from "../../../components/common/Icons";
import { useAuthStore } from "../../../store/authStore";

export const HrManagePage = ({
  title,
  sectionLabel,
  sectionIcon,
  sectionPath,
}) => {
  const { isUsername } = useAuthStore();
  const breadcrumbs = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      to: `/${isUsername}`,
    },
    {
      label: "HR",
      icon: <CustomerSystem />,
      to: `/${isUsername}/hr`,
    },
    {
      label: sectionLabel,
      icon: sectionIcon,
      to: `/${isUsername}/hr/${sectionPath}`,
    },
  ];

  return <HrPagesWithBreadcrumb title={title} breadcrumbs={breadcrumbs} />;
};
