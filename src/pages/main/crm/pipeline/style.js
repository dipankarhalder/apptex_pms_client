import styled from "styled-components";
import { fontSize, fontWeight } from "../../../../styles/mixins";

export const AppTabColumnDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppInsideNavigation = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px 0px;

  & > ul {
    gap: 4px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    & > li {
      display: flex;

      & > a {
        display: flex;
        text-align: center;
        padding: 10px 20px 8px;
        ${fontSize("13px")}
        ${fontWeight("600")}
        border-radius: 8px 8px 0px 0px;
        position: relative;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.gray60};
        border-bottom: 3px solid ${({ theme }) => theme.colors.white};
        gap: 6px;

        & > svg {
          width: 16px;
          height: 16px;
        }

        &.active_nav {
          color: ${({ theme }) => theme.colors.gray20};
        }
      }

      &:nth-child(1) > a {
        & > svg path {
          stroke: ${({ theme }) => theme.colors.blue30};
        }
        &.active_nav {
          border-bottom: 3px solid ${({ theme }) => theme.colors.blue30};
        }
      }
      &:nth-child(2) > a {
        & > svg path {
          stroke: ${({ theme }) => theme.colors.magenta40};
        }
        &.active_nav {
          border-bottom: 3px solid ${({ theme }) => theme.colors.magenta40};
        }
      }
      &:nth-child(3) > a {
        & > svg path {
          stroke: ${({ theme }) => theme.colors.green40};
        }
        &.active_nav {
          border-bottom: 3px solid ${({ theme }) => theme.colors.green40};
        }
      }
      &:nth-child(4) > a {
        & > svg path {
          stroke: ${({ theme }) => theme.colors.orange50};
        }
        &.active_nav {
          border-bottom: 3px solid ${({ theme }) => theme.colors.orange50};
        }
      }
      &:nth-child(5) > a {
        & > svg path {
          stroke: ${({ theme }) => theme.colors.red40};
        }
        &.active_nav {
          border-bottom: 3px solid ${({ theme }) => theme.colors.red40};
        }
      }
    }
  }
`;

export const AppNameColumnHeading = styled.p`
  ${fontSize("12px")}
  ${fontWeight("500")}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue30};
`;

export const AppIndustriesInfo = styled.div`
  display: flex;
  flex-direction: column;

  .app_type_col {
    padding: 2px 4px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.blue30};
    color: ${({ theme }) => theme.colors.blue30};
  }
`;

export const AppSpanIconCover = styled.div`
  width: auto;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg {
    width: 16px;
    height: 16px;
  }

  & > p {
    ${fontSize("12px")}
    ${fontWeight("500")}
  }

  &.phone,
  &.New {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.blue30};
    }
    & > p {
      color: ${({ theme }) => theme.colors.blue30};
    }
  }
  &.email {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.magenta40};
    }
    & > p {
      color: ${({ theme }) => theme.colors.magenta40};
    }
  }
  &.whatsapp,
  &.Converted {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.green40};
    }
    & > p {
      color: ${({ theme }) => theme.colors.green40};
    }
  }
  &.referance {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.orange50};
    }
    & > p {
      color: ${({ theme }) => theme.colors.orange50};
    }
  }
  &.Contacted {
    & > p {
      color: ${({ theme }) => theme.colors.yellow30};
    }
  }
  &.Closed {
    & > p {
      color: ${({ theme }) => theme.colors.red40};
    }
  }

  &.new_lead {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.blue30};
    }
  }
  &.Qualified {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.yellow30};
    }
  }
  &.Proposal {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.magenta40};
    }
  }
  &.Won {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.green30};
    }
  }
  &.Lost {
    & > svg path {
      stroke: ${({ theme }) => theme.colors.red40};
    }
  }
`;
