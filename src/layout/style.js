import styled from "styled-components";
import { fontSize, fontWeight } from "../styles/mixins";

export const AppMainCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 16px 18px;
  background: ${({ theme }) => theme.colors.white100};
`;

export const AppBgTopSection = styled.div`
  width: 45%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 90%;
  filter: blur(50px);
  transform: rotate(180deg);
  background-image: url("/img/logbgs.svg");
  background-repeat: no-repeat;
`;

export const AppBgTopRightSection = styled.div`
  width: 45%;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 90%;
  filter: blur(50px);
  background-image: url("/img/logbgs.svg");
  background-repeat: no-repeat;
`;

export const AppMainFormSection = styled.div`
  width: calc(35% - 16px);
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  justify-content: space-between;
  height: calc(100vh - 32px);
  position: relative;
  z-index: 2;
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
  position: relative;
  height: calc(100vh - 32px);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bgcol};
  background-image: url("/img/logbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border: 5px solid ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

export const AppAuthCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0px;
`;

export const AppMainContextCover = styled.div`
  width: calc(100% - 280px);
  margin-left: 280px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  position: relative;

  & > p {
    ${fontSize("15px")}
    ${fontWeight("600")}
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.blue30};
  }
`;
export const AppInsideContentCover = styled.div`
  border-radius: 14px;
  margin-right: 14px;
  min-height: calc(100vh - 60px);
  background: ${({ theme }) => theme.colors.white};
  box-shadow:
    0 1px 5px 0 rgb(0 0 0 / 0.1),
    0 1px 3px -1px rgb(0 0 0 / 0.1);
`;
