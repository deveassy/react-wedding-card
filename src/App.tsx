import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import PageTab from "./tab";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <RootRouter>
          <PageTab />
        </RootRouter>
      </BrowserRouter>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dancing Script', cursive;
    src: url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
  }
 body {
   margin: 0;
   /* background-color: #fff5eb; */
 }
`;

export default App;
