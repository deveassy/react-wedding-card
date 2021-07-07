import styled, { createGlobalStyle } from "styled-components";
import Dokdo from "../globals/fonts/EastSeaDokdo-Regular.ttf";
import Lato from "../globals/fonts/Lato-Regular.ttf";
import Marker from "../globals/fonts/markerfelt.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "East Sea Dokdo";
    src: url(${Dokdo}) format("truetype");
  }

  @font-face {
    font-family: "Lato";
    src: url(${Lato}) format("truetype");
  }

  @font-face {
    font-family: "Marker Felt";
    src: url(${Marker}) format("truetype");
  }

body {
  max-width: 500px;
  margin: 0 auto;
  font-family: "Lato";

  color: ${(props) => props.theme.basicFont};
  background-color: ${(props) => props.theme.basicBg};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ced4da;
`;

export const Img = styled.img`
  width: 80%;
`;
