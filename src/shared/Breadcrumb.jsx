import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fontSize, fontWeight } from "../styles/mixins";

export const AppTopPageInformation = styled.div`
  width: auto;
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0px;
`;

export const AppTopBreadcumb = styled.div`
  display: flex;
  gap: 8px;

  & > span {
    ${fontSize("11px")}
    color: ${({ theme }) => theme.colors.gray50};
  }

  & > a {
    display: flex;
    ${fontSize("11px")}
    ${fontWeight("600")}
    align-items: center;
    color: ${({ theme }) => theme.colors.gray50};
    transition: 0.5s;

    & > svg {
      width: 12px;
      height: 12px;
      margin-right: 4px;

      path {
        stroke: ${({ theme }) => theme.colors.gray50};
        transition: 0.5s;
      }
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.blue30};
      transition: 0.5s;

      & > svg path {
        stroke: ${({ theme }) => theme.colors.blue30};
        transition: 0.5s;
      }
    }
  }
`;

export const Breadcrumb = ({ items }) => {
  return (
    <AppTopPageInformation>
      <AppTopBreadcumb>
        {items.map((item, index) => (
          <Fragment key={index}>
            <Link to={item.to}>
              {item.icon}
              {item.label}
            </Link>
            {index < items.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </AppTopBreadcumb>
    </AppTopPageInformation>
  );
};
