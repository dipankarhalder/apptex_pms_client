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
    color: ${({ theme }) => theme.colors.gray50};
  }
`;

const AppFooterPolicyLink = styled.div`
  width: auto;
  display: flex;
  gap: 10px;

  & > a {
    ${fontSize("12px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.gray60};
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      color: ${({ theme }) => theme.colors.blue30};
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
        <p>&copy; {currentYear} Sprintify Pvt. Ltd.</p>
      </AppFooterCopyWrite>
      <AppFooterPolicyLink>
        <a href="/">Privacy Policy</a>
        <span>.</span>
        <a href="/">Terms of Services</a>
      </AppFooterPolicyLink>
    </AppFooterWrapper>
  );
};
