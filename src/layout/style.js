import styled from "styled-components";

export const AppMainCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 16px 18px;
  background: ${({ theme }) => theme.colors.white100};
`;

export const AppMainFormSection = styled.div`
  width: calc(30% - 16px);
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  justify-content: space-between;
  height: calc(100vh - 32px);
`;

export const AppLogoAuth = styled.div`
  width: 120px;
`;

export const AppFormCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AppBgSec = styled.div`
  width: 70%;
  height: calc(100vh - 32px);
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.bgcol};
`;
