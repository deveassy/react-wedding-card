import { createGlobalStyle } from "styled-components";
import Dokdo from "../globals/fonts/EastSeaDokdo-Regular.ttf";
import Lato from "../globals/fonts/Lato-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "East Sea Dokdo";
    src: url(${Dokdo}) format("truetype");
  }

  @font-face {
    font-family: "Lato";
    src: url(${Lato}) format("truetype");
  }

body {
  width: 373px;
  margin: 0 auto;
  font-family: "Lato";
}
`;
