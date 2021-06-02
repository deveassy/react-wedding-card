import React, { ReactNode } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import MainPage from "../components/MainPage";
import BridePage from "../components/BridePage";
import GroomPage from "../components/GroomPage";
import PhotoPage from "../components/PhotoPage";
import MapPage from "../components/MapPage";

export default function RootRouter({ children }: { children: ReactNode }) {
  const NotFound = () => {
    return <NoPage>죄송합니다. 주소를 확인해주세요 :)</NoPage>;
  };
  return (
    <RouterContainer>
      <Switch>
        {children}
        <Route exact path="/" component={MainPage} />
        <Route path="/groom" component={GroomPage} />
        <Route path="/bride" component={BridePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/photo" component={PhotoPage} />
        <Route component={NotFound} />
      </Switch>
    </RouterContainer>
  );
}

const RouterContainer = styled.div``;

const NoPage = styled.h1``;
