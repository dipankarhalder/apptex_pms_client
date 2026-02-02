import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../common/Logo";
import { FSideBar } from "./FSideBar";
import { fontSize, fontWeight } from "../../styles/mixins";

export const AppSideBarCoverMain = styled.div`
  position: fixed;
  width: 280px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
`;
export const AppSidebarCover = styled.div`
  width: 210px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppLogoCover = styled.div`
  width: 160px;
  height: auto;
  display: flex;
  padding: 14px 15px 10px;
  margin-bottom: 20px;
`;

export const AppSidebarMenuItems = styled.div`
  width: 100%;
  padding: 0 15px;

  & > ul {
    display: flex;
    width: 100%;
    gap: 24px;
    height: calc(100vh - 62px);
    overflow: auto;
    flex-direction: column;

    & > li {
      display: flex;
      flex-direction: column;
      width: 100%;

      & > p {
        display: flex;
        gap: 10px;
        color: ${({ theme }) => theme.colors.blue30};
        ${fontSize("11px")}
        ${fontWeight("600")}
        text-transform: uppercase;

        & > svg {
          width: 20px;
          height: 20px;
        }

        &.activeParent {
          color: ${({ theme }) => theme.colors.blue30};
        }
      }

      & > ul {
        width: 100%;
        display: flex;
        margin-top: 6px;
        flex-direction: column;
        gap: 1px;

        & > li {
          display: flex;
          width: 100%;

          & > a {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 10px;
            padding: 7px 9px;
            ${fontSize("13px")}
            ${fontWeight("400")}
            color: ${({ theme }) => theme.colors.black100};
            border-radius: 6px;
            position: relative;

            & > svg {
              width: 19px;
              height: 19px;
            }

            & > span {
              top: 15px;
              right: 10px;
              position: absolute;
              width: 6px;
              height: 6px;
              background: ${({ theme }) => theme.colors.red40};
              border-radius: 50%;
              color: ${({ theme }) => theme.colors.white100};
              text-align: center;
            }

            &:hover,
            &.activeLink {
              color: ${({ theme }) => theme.colors.blue30};
              background: ${({ theme }) => theme.colors.white100};
              box-shadow: ${({ theme }) => theme.colors.shadow2};

              & > svg > path,
              & > svg > g > path {
                stroke: ${({ theme }) => theme.colors.blue30};
              }
            }
          }
        }
      }
    }
  }
`;

export const AdminSidebar = ({ menuItems }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const gavNavLinkClass = (linkPath, hasChildren = false) => {
    if (hasChildren) {
      return currentPath.startsWith(linkPath) ? "activeLink" : "";
    }

    return currentPath === linkPath ? "activeLink" : "";
  };

  return (
    <AppSideBarCoverMain>
      <FSideBar />
      <AppSidebarCover>
        <AppLogoCover>
          <Logo />
        </AppLogoCover>
        <AppSidebarMenuItems>
          <ul>
            {menuItems &&
              menuItems.map((menu) => {
                const isParentActive =
                  menu.children?.some((sub) =>
                    currentPath.startsWith(sub.path),
                  ) || currentPath === menu.path;

                return (
                  <li key={menu.id}>
                    <p className={isParentActive ? "activeParent" : ""}>
                      {menu.label}
                    </p>
                    <ul>
                      {menu.children &&
                        menu.children.map((subMenu) => {
                          const Icon = subMenu.icon;
                          return (
                            <li key={subMenu.id}>
                              <NavLink
                                to={subMenu.path}
                                end={true}
                                className={gavNavLinkClass(subMenu.path)}
                              >
                                <Icon /> {subMenu.label}
                                {subMenu.count && <span />}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </AppSidebarMenuItems>
      </AppSidebarCover>
    </AppSideBarCoverMain>
  );
};
