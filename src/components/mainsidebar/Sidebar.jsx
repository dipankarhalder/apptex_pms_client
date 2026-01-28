import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import { Logo } from "../common/Logo";
import { useMainMenus } from "../../hooks/core/useMainMenus";
import { fontSize, fontWeight } from "../../styles/mixins";

export const AppSidebarCover = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.sidebar};
`;

export const AppLogoCover = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 14px 15px 10px;
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
      }

      & > ul {
        width: 100%;
        display: flex;
        margin-top: 4px;
        flex-direction: column;

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
            ${fontWeight("500")}
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
          }

          &:hover a,
          &.activeLink a {
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
`;

export const LeftSidebar = () => {
  const mainMenus = useMainMenus();
  const location = useLocation();

  return (
    <AppSidebarCover>
      <AppLogoCover>
        <Logo />
      </AppLogoCover>

      <AppSidebarMenuItems>
        <ul>
          {mainMenus.map((menu) => (
            <li key={menu.id}>
              <p>{menu.label}</p>
              <ul>
                {menu.children &&
                  menu.children.map((subMenu) => {
                    const Icon = subMenu.icon;
                    return (
                      <li
                        key={subMenu.id}
                        className={
                          location.pathname === subMenu.path ? "activeLink" : ""
                        }
                      >
                        <Link to={subMenu.path}>
                          <Icon /> {subMenu.label}
                          {subMenu.count && <span></span>}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ))}
        </ul>
      </AppSidebarMenuItems>
    </AppSidebarCover>
  );
};
