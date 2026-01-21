import { createGlobalStyle } from "styled-components";
import { fontFamily, fontWeight, fontSize } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    ${fontSize("15px")}
    ${fontFamily};
    ${fontWeight("500")};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "ss01", "ss02", "ss07", "ss08", "ss09";
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
    ${fontFamily};
    ${fontWeight("500")};
  }
  select {
    appearance: none;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    ${fontFamily};
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }
  ol, ul {
    padding-left: 0;
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after, q::before, q::after {
    content: "";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    ${fontFamily};
    ${fontWeight("500")};
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  #root, #__next {
    isolation: isolate;
  }
`;
