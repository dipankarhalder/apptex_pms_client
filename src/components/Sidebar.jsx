import styled from "styled-components";

export const AppSidebarCover = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.sidebar};
`;

export const Sidebar = () => {
  return <AppSidebarCover>Sidebar</AppSidebarCover>;
};
