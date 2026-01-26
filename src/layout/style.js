import styled from "styled-components";

export const AppMainCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 16px 18px;
  background: ${({ theme }) => theme.colors.white100};
`;

export const AppMainFormSection = styled.div`
  width: calc(35% - 16px);
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  justify-content: space-between;
  height: calc(100vh - 32px);
`;

export const AppHeaderAuth = styled.div`
  width: 100%;
  display: flex;
`;

export const AppFormCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AppFooterAuth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AppBackgroundSection = styled.div`
  width: 65%;
  height: calc(100vh - 32px);
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.bgcol};
`;

export const AppAuthCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0px;
  background: ${({ theme }) => theme.colors.white100};
`;
