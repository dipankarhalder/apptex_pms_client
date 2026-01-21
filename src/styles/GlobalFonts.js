import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'AvenirNext';
    src: url('/fonts/BG-TF-Bold-Web.woff2') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'AvenirNext';
    src: url('/fonts/BG-TF-Medium-Web.woff2') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'AvenirNext';
    src: url('/fonts/BG-TF-Regular-Web.woff2') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
