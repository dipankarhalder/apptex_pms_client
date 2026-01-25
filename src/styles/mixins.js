import { css } from "styled-components";

/** Font Styles */
export const fontFamily = css`
  font-family: ${({ theme }) => theme.font.primary};
`;
export const fontSize = (size) => css`
  font-size: ${size};
`;
export const fontWeight = (key) => css`
  font-weight: ${({ theme }) => theme.fontWeight[key]};
`;
export const textColor = (key) => css`
  color: ${({ theme }) => theme.colors[key]};
`;

/** Background Styles */
export const backgroundColor = (key) => css`
  background-color: ${({ theme }) => theme.colors[key]};
`;

/** BorderRadius Styles */
export const borderRadius = (radius) => css`
  border-radius: ${radius};
`;

/** Border Styles */
export const borderStyleColor = (size, key) => css`
  border: ${size}px solid ${({ theme }) => theme.colors[key]};
`;

/** Flex Styles */
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const rowCenter = css`
  display: flex;
  justify-content: center;
`;
export const columnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/** Grid container */
export const gridContainer = (gap) => css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => gap ?? theme.spacing.grid}px;
`;

/** Grid column span (1–12) */
export const gridColumn = (span = 12) => css`
  grid-column: span ${span};
`;

/** Responsive grid column */
export const responsiveGridColumn = ({ xs = 12, sm, md, lg, xl }) => css`
  grid-column: span ${xs};
  ${({ theme }) =>
    theme?.breakpoints?.sm &&
    sm &&
    css`
      @media (min-width: ${theme.breakpoints.sm}) {
        grid-column: span ${sm};
      }
    `}
  ${({ theme }) =>
    theme?.breakpoints?.md &&
    md &&
    css`
      @media (min-width: ${theme.breakpoints.md}) {
        grid-column: span ${md};
      }
    `}
  ${({ theme }) =>
    theme?.breakpoints?.lg &&
    lg &&
    css`
      @media (min-width: ${theme.breakpoints.lg}) {
        grid-column: span ${lg};
      }
    `}
  ${({ theme }) =>
    theme?.breakpoints?.xl &&
    xl &&
    css`
      @media (min-width: ${theme.breakpoints.xl}) {
        grid-column: span ${xl};
      }
    `}
`;

// const Grid = styled.div`
//   ${gridContainer()};
// `;
// const Grid = styled.div`
//   ${gridContainer(24)};
// `;
// const Col = styled.div`
//   ${({ span }) => gridColumn(span)};
// `;
// const Col = styled.div`
//   ${({ theme }) =>
//     responsiveGridColumn({ xs: 12, md: 6, lg: 4 })};
// `;
