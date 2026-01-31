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

export const ListPipeline = () => {
  return (
    <AppTabColumnDetails>
      <AppInsideNavigation>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              end
            >
              <Products />
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.pipelineQualified}
              className={({ isActive }) => (isActive ? "active_nav" : "")}
            >
              <Tracking />
              Qualified
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.pipelineProposal}
              className={({ isActive }) => (isActive ? "active_nav" : "")}
            >
              <Project />
              Proposal
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.pipelineWon}
              className={({ isActive }) => (isActive ? "active_nav" : "")}
            >
              <CircleTick />
              Won
            </NavLink>
          </li>
          <li>
            <NavLink
              to={paths.pipelineLost}
              className={({ isActive }) => (isActive ? "active_nav" : "")}
            >
              <Cross />
              Lost
            </NavLink>
          </li>
        </ul>
      </AppInsideNavigation>
      <Outlet />
    </AppTabColumnDetails>
  );
};
