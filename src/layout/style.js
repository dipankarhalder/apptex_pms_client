import styled from "styled-components";

export const AppMainCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const AppBgSec = styled.div`
  width: 52%;
  height: 100vh;
  background: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
