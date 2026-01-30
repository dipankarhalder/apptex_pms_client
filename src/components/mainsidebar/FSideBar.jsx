import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  DashboardManage,
  ProjectManage,
  CustomerSystem,
  ErpSystem,
  StockSystem,
  Logout,
  User,
  Settings,
} from "../../components/common/Icons";
import { useAuthStore } from "../../store/authStore";
import { fontSize, fontWeight } from "../../styles/mixins";

export const AppMsidebarCover = styled.div`
  width: 70px;
  height: 100vh;
  display: flex;
  padding: 10px 6px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};

  .app_list_main_sidebar {
    display: flex;
    width: 100%;
    justify-content: center;

    & > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;

      & > li {
        display: flex;

        & > a {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          position: relative;
          gap: 3px;
          padding: 8px 4px;

          & > svg {
            width: 24px;
            height: 24px;

            & > path {
              stroke: ${({ theme }) => theme.colors.gray30};
            }
          }

          & > p {
            ${fontSize("11px")}
            ${fontWeight("600")}
            color: ${({ theme }) => theme.colors.gray30};
          }

          &.active {
            border-radius: 6px;
            background: ${({ theme }) => theme.colors.sidebar};

            & > svg > path {
              stroke: ${({ theme }) => theme.colors.blue30};
            }

            & > p {
              color: ${({ theme }) => theme.colors.blue30};
            }
          }
        }
      }
    }
  }

  .app_profile_details {
    display: flex;
    width: 100%;
    justify-content: center;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > li {
        display: flex;

        & > a {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          position: relative;
          gap: 2px;
          padding: 8px 4px;

          & > svg {
            width: 24px;
            height: 24px;

            & > path {
              stroke: ${({ theme }) => theme.colors.gray30};
            }
          }

          & > p {
            ${fontSize("11px")}
            ${fontWeight("600")}
            color: ${({ theme }) => theme.colors.gray30};
          }

          &.active {
            border-radius: 6px;
            background: ${({ theme }) => theme.colors.sidebar};

            & > svg > path {
              stroke: ${({ theme }) => theme.colors.blue30};
            }

            & > p {
              color: ${({ theme }) => theme.colors.blue30};
            }
          }
        }

        .app_logout_btns {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          position: relative;
          gap: 1px;
          border-radius: 6px;
          padding: 8px 4px;
          background: ${({ theme }) => theme.colors.magenta100};

          & > svg {
            width: 20px;
            height: 20px;

            & > path {
              stroke: ${({ theme }) => theme.colors.red40};
            }
          }

          & > p {
            ${fontSize("11px")}
            ${fontWeight("600")}
            color: ${({ theme }) => theme.colors.red40};
          }
        }
      }
    }
  }
`;

export const FSideBar = () => {
  const { isUsername } = useAuthStore();

  return (
    <AppMsidebarCover>
      <div className="app_list_main_sidebar">
        <ul>
          <li>
            <NavLink
              to={`/${isUsername}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              <DashboardManage />
              <p>Overview</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${isUsername}/pms/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ProjectManage />
              <p>PMS</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${isUsername}/cms/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CustomerSystem />
              <p>CRM</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${isUsername}/erp/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ErpSystem />
              <p>ERP</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${isUsername}/invt/`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <StockSystem />
              <p>Inventory</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="app_profile_details">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Settings />
              <p>Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <User />
              <p>Profile</p>
            </NavLink>
          </li>
          <li>
            <div className="app_logout_btns">
              <Logout />
              <p>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </AppMsidebarCover>
  );
};
