import { useState } from "react";
import styled from "styled-components";
import { AddCompanyForm } from "./AddCompanyForm";
import { AddProject, AddCompany, AddWarehouse } from "../config/Icons";
import { borderRadius, fontSize, fontWeight } from "../styles/mixins";

export const AppInitPopCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppInitPopInside = styled.div`
  padding: 28px 26px;
  ${borderRadius("10px")}
  width: 500px;
  background: ${({ theme }) => theme.colors.white100};
`;

export const AppSelectionInit = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > h2 {
    text-align: center;
    ${fontSize("17px")}
    ${fontWeight("600")}
    margin-bottom: 3px;
  }

  & > p {
    text-align: center;
    ${fontSize("13px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.gray60};
  }

  & > ul {
    display: flex;
    width: 100%;
    gap: 16px;
    justify-content: center;
    margin-top: 30px;

    & > li {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 30%;
      align-items: center;
      padding: 16px 14px;
      ${borderRadius("6px")}

      &:nth-child(1) {
        background: ${({ theme }) => theme.colors.green100};
        & > svg path {
          fill: ${({ theme }) => theme.colors.green40};
        }
      }

      &:nth-child(2) {
        background: ${({ theme }) => theme.colors.blue100};
        & > svg path {
          fill: ${({ theme }) => theme.colors.blue40};
        }
      }

      &:nth-child(3) {
        background: ${({ theme }) => theme.colors.magenta100};
        & > svg path {
          fill: ${({ theme }) => theme.colors.magenta40};
        }
      }

      & > svg {
        width: 50px;
        height: 50px;
      }

      & > p {
        text-align: center;
        ${fontSize("14px")}
        ${fontWeight("500")}
      }
    }
  }
`;

export const AddInitPop = () => {
  const [companyPop, setCompanyPop] = useState(false);

  const handleCompanyPop = () => setCompanyPop(!companyPop);

  return (
    <AppInitPopCover>
      <AppInitPopInside>
        {!companyPop && (
          <AppSelectionInit>
            <h2>If don't you know us? Please explore</h2>
            <p>Please select one of the options below:</p>
            <ul>
              <li>
                <AddProject />
                <p>
                  Start a <br />
                  New Project
                </p>
              </li>
              <li onClick={() => handleCompanyPop()}>
                <AddCompany />
                <p>
                  Register <br />a Company
                </p>
              </li>
              <li>
                <AddWarehouse />
                <p>
                  Set-up a <br />
                  Warehouse
                </p>
              </li>
            </ul>
          </AppSelectionInit>
        )}

        {companyPop && <AddCompanyForm closeBtn={handleCompanyPop} />}
      </AppInitPopInside>
    </AppInitPopCover>
  );
};
