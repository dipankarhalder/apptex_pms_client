import { CrmPagesWithBreadcrumb } from "./CrmPagesWithBreadcrumb";
import { Dashboard, CustomerSystem } from "../../../components/common/Icons";
import { useAuthStore } from "../../../store/authStore";

export const CrmManagePage = ({
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
      label: "CRM",
      icon: <CustomerSystem />,
      to: `/${isUsername}/crm`,
    },
    {
      label: sectionLabel,
      icon: sectionIcon,
      to: `/${isUsername}/crm/${sectionPath}`,
    },
  ];

  return <CrmPagesWithBreadcrumb title={title} breadcrumbs={breadcrumbs} />;
};
