import { createGlobalStyle } from "styled-components";
import Caveat from "../globals/fonts/CaveatBrush-Regular.ttf";
import Dokdo from "../globals/fonts/EastSeaDokdo-Regular.ttf";
import Lato from "../globals/fonts/Lato-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Caveat Brush';
    src: url(${Caveat}) format("truetype");
  }

  @font-face {
    font-family: "East Sea Dokdo";
    src: url(${Dokdo}) format("truetype");
  }

  @font-face {
    font-family: "Lato";
    src: url(${Lato}) format("truetype");
  }

body {
 margin: 0;
  font-family: "Lato";
}
`;
