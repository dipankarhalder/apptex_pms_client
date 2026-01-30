import styled from "styled-components";
import {
  DashboardManage,
  ProjectManage,
  CustomerSystem,
  ErpSystem,
  StockSystem,
} from "../../components/common/Icons";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";
import { fontSize } from "../../styles/mixins";

export const AppMsidebarCover = styled.div`
  width: 70px;
  height: 100vh;
  display: flex;
  padding: 28px 10px;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.blue30};

  .app_list_main_sidebar {
    display: flex;
    width: 100%;
    justify-content: center;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 26px;

      & > li {
        display: flex;

        & > a {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          position: relative;
          gap: 2px;
          color: ${({ theme }) => theme.colors.white};

          & > svg {
            width: 30px;
            height: 30px;

            & > path {
              stroke: ${({ theme }) => theme.colors.white};
            }
          }

          & > p {
            ${fontSize("12px")}
            color: ${({ theme }) => theme.colors.white};
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
            <Link to={`/${isUsername}`}>
              <DashboardManage />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link to={`/${isUsername}/pms/`}>
              <ProjectManage />
              <p>PMS</p>
            </Link>
          </li>
          <li>
            <Link to={`/${isUsername}/cms/`}>
              <CustomerSystem />
              <p>CRM</p>
            </Link>
          </li>
          <li>
            <Link to={`/${isUsername}/erp/`}>
              <ErpSystem />
              <p>ERP</p>
            </Link>
          </li>
          <li>
            <Link to={`/${isUsername}/invt/`}>
              <StockSystem />
              <p>Inventory</p>
            </Link>
          </li>
        </ul>
      </div>
    </AppMsidebarCover>
  );
};
