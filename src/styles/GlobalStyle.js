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
  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: sans-serif;
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
  img, picture, svg {
    display: block;
    max-width: 100%;
  }
  audio, canvas, progress, video {
    vertical-align: baseline;
    display: inline-block;
  }
  input, button, optgroup, textarea, select {
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
  mark {
    color: #000;
    background: #ff0;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  sup {
    top: -.5em;
  }
  sub {
    bottom: -.25em;
  }
  code, kbd, pre, samp {
    font-family: monospace;
    font-size: 1em;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after, q::before, q::after {
    content: "";
  }
  [hidden], template {
    display: none;
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
    height: auto;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  #root, #__next {
    isolation: isolate;
  }
`;
