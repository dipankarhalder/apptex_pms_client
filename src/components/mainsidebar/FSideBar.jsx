import styled from "styled-components";
import {
  ProjectManage,
  CustomerSystem,
  ErpSystem,
  StockSystem,
} from "../../components/common/Icons";
import { Link } from "react-router-dom";

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
      gap: 36px;

      & > li {
        display: flex;

        & > a {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          color: ${({ theme }) => theme.colors.white};

          & > svg {
            width: 30px;
            height: 30px;

            & > path {
              stroke: ${({ theme }) => theme.colors.white};
            }
          }

          & > p {
            display: none;
            position: absolute;
            top: 50%;
            left: calc(100% + 20px);
            width: 300px;
            transform: translateY(-50%);
            z-index: 3;

            & > span {
              padding: 10px 18px;
              border-radius: 5px;
              background: rgba(0, 0, 0, 0.8);
            }
          }

          &:hover p {
            display: inline-block;
          }
        }
      }
    }
  }
`;

export const FSideBar = () => {
  return (
    <AppMsidebarCover>
      <div className="app_list_main_sidebar">
        <ul>
          <li>
            <Link to="/">
              <ProjectManage />
              <p>
                <span>Project Management System</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <CustomerSystem />
              <p>
                <span>Customer Relationship Management</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <ErpSystem />
              <p>
                <span>Enterprise Resource Planning</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <StockSystem />
              <p>
                <span>Stock and Inventory</span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </AppMsidebarCover>
  );
};
