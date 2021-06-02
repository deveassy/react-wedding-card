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
 
`;

export default App;
