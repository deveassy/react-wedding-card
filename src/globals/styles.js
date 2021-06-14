import { createGlobalStyle } from "styled-components";
import RanchoRegular from "./fonts/Rancho-Regular.ttf";
import KaushanScript from "./fonts/KaushanScript-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: 'Dancing Script', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
} */
/* @font-face {
  font-family: 'Kaushan Script', cursive;
  src: url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
} */
@font-face {
        font-family: 'Rancho';
        src: local('Rancho'), url${RanchoRegular} format('truetype');
        font-weight: 700;
        font-style: normal;
}

@font-face {
        font-family: 'Kaushan';
        src: local('Kaushan'), url${KaushanScript} format('truetype');
        font-weight: 700;
        font-style: normal;
}


body {
 margin: 0;
}
`;
