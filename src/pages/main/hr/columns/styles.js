import styled, { css } from "styled-components";
import { fontSize, fontWeight } from "../../../../styles/mixins";

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

    &.festival {
      & > svg path {
        stroke: ${({ theme }) => theme.colors.blue30};
      }
    }
    &.optional {
      & > svg path {
        stroke: ${({ theme }) => theme.colors.magenta40};
      }
    }
    &.national {
      & > svg path {
        stroke: ${({ theme }) => theme.colors.green30};
      }
    }
  }
`;

export const AppStatusPtag = styled.div`
  display: flex;

  & > p {
    display: flex;
    gap: 5px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  & > p {
    padding: 2px 5px;
    border-radius: 4px;
    ${fontSize("11px")}
    ${fontWeight("600")}

    &.festival {
      border: 1px solid ${({ theme }) => theme.colors.blue30};
      color: ${({ theme }) => theme.colors.blue30};
    }
    &.optional {
      border: 1px solid ${({ theme }) => theme.colors.magenta40};
      color: ${({ theme }) => theme.colors.magenta40};
    }
    &.national {
      border: 1px solid ${({ theme }) => theme.colors.green30};
      color: ${({ theme }) => theme.colors.green30};
    }
    &.hold {
      border: 1px solid ${({ theme }) => theme.colors.gray50};
      color: ${({ theme }) => theme.colors.gray50};
    }
    &.danger {
      border: 1px solid ${({ theme }) => theme.colors.red50};
      color: ${({ theme }) => theme.colors.red50};
    }
  }
`;

export const AppPriceDeduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  & > p {
    &:nth-child(1) {
      ${fontWeight("600")}
      ${fontSize("12px")}
    }
    &:nth-child(2) {
      ${fontWeight("500")}
      ${fontSize("10px")}
    }
  }
`;

export const HolidayDate = styled.span`
  font-size: 14px;

  ${({ status }) =>
    status === "PAST" &&
    css`
      color: ${({ theme }) => theme.colors.gray70};
      text-decoration: line-through;
    `}

  ${({ status }) =>
    status === "TODAY" &&
    css`
      color: ${({ theme }) => theme.colors.green30};
      font-weight: 600;
    `}

  ${({ status }) =>
    status === "UPCOMING" &&
    css`
      color: ${({ theme }) => theme.colors.gray30};
      font-weight: 500;
    `}
`;

export const AppShiftStatus = styled.div`
  display: flex;

  & > p {
    padding: 2px 5px;
    border-radius: 4px;
    ${fontSize("12px")}
    ${fontWeight("500")}

    &.item_morning {
      color: ${({ theme }) => theme.colors.blue40};
    }
    &.item_evening {
      color: ${({ theme }) => theme.colors.yellow40};
    }
    &.item_night {
      color: ${({ theme }) => theme.colors.teal40};
    }
  }
`;

export const ActionButton = styled.button`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
