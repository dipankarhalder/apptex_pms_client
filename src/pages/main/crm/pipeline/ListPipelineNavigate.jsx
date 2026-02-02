import { NavLink, Outlet } from "react-router-dom";
import { paths } from "../../../../config/paths";
import {
  Products,
  Tracking,
  Project,
  CircleTick,
  Cross,
} from "../../../../components/common/Icons";
import { AppTabColumnDetails, AppInsideNavigation } from "./style";

const PIPELINE_TABS = [
  {
    key: "new",
    label: "New",
    to: "",
    icon: <Products />,
    end: true,
  },
  {
    key: "qualified",
    label: "Qualified",
    to: paths.pipelineQualified,
    icon: <Tracking />,
  },
  {
    key: "proposal",
    label: "Proposal",
    to: paths.pipelineProposal,
    icon: <Project />,
  },
  {
    key: "won",
    label: "Won",
    to: paths.pipelineWon,
    icon: <CircleTick />,
  },
  {
    key: "lost",
    label: "Lost",
    to: paths.pipelineLost,
    icon: <Cross />,
  },
];

export const ListPipelineNavigate = () => {
  return (
    <AppTabColumnDetails>
      <AppInsideNavigation>
        <ul>
          {PIPELINE_TABS.map(({ key, to, icon, label, end }) => (
            <li key={key}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? "active_nav" : "")}
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </AppInsideNavigation>
      <Outlet />
    </AppTabColumnDetails>
  );
};
