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

  @font-face {
    font-family: 'SLEIGothicTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'TDTDTadakTadak';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/TDTDTadakTadak.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'KimNamyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KimNamyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  width: 373px;
  margin: 0 auto;
  font-family: "Lato";
}
`;
