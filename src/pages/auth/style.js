/** node modules */
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

/** reusable module */
import {
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
} from "../../styles";

/** inline style */
export const Form = styled.form`
  width: 362px;
  display: flex;
  flex-direction: column;
`;

export const AppPageMainText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  & > h1 {
    ${fontSize("16px")}
    ${fontWeight("600")}
    color: ${({ theme }) => theme.colors.gray40};
  }

  & > p {
    ${fontSize("13px")}
    color: ${({ theme }) => theme.colors.gray60};
  }
`;

export const AppInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AppShowingEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  width: 100%;
  ${backgroundColor("gray100")}
  ${borderRadius("6px")}
  padding: 10px 14px;
`;

export const AppShowingEmailTop = styled.div`
  display: flex;
  width: 100%;

  & > p {
    margin-bottom: 2px;
    ${fontSize("12px")}
    color: ${({ theme }) => theme.colors.gray60};
  }
`;
export const AppShowingEmailBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 14px;

    & > path {
      stroke: ${({ theme }) => theme.colors.gray50};
    }
  }

  & > p {
    ${fontSize("15px")}
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AppHalfField = styled.div`
  display: flex;
  gap: 10px;
`;

export const InfoText = styled.div`
  display: flex;
  width: 100%;

  & > p {
    ${fontSize("12px")}
    line-height: normal;
    color: ${({ theme }) => theme.colors.gray60};
  }
`;

export const AppButtonField = styled.div`
  margin-top: 16px;
`;

export const AppPageLink = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const Link = styled(RouterLink)`
  ${fontSize("13px")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  transition: color 0.2s ease;
`;
