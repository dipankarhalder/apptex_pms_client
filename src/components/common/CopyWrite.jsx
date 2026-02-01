import styled from "styled-components";
import { fontSize, fontWeight } from "../../styles/mixins";

const AppFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const AppFooterCopyWrite = styled.div`
  width: auto;

  & > p {
    ${fontSize("12px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

const AppFooterPolicyLink = styled.div`
  width: auto;
  display: flex;
  gap: 10px;

  & > a {
    ${fontSize("12px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.gray40};
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.themeBtn};
    }
  }

  & > span {
    line-height: 12px;
    color: ${({ theme }) => theme.colors.gray70};
  }
`;

export const CopyWrite = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppFooterWrapper>
      <AppFooterCopyWrite>
        <p>&copy; {currentYear} apptexlab</p>
      </AppFooterCopyWrite>
      <AppFooterPolicyLink>
        <a href="/">Privacy Policy</a>
        <span>.</span>
        <a href="/">Terms of Services</a>
      </AppFooterPolicyLink>
    </AppFooterWrapper>
  );
};
