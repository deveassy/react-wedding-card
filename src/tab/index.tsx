import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import BridePage from "../components/BridePage";
import GroomPage from "../components/GroomPage";
import MainPage from "../components/MainPage";
import MapPage from "../components/MapPage";
import PhotoPage from "../components/PhotoPage";

export default function PageTab() {
  return (
    <TabContainer>
      <MainLogo>
        <LinkButton to="/">Eundoristagram</LinkButton>
      </MainLogo>
      <StoryButton>
        <LinkButton to="/groom">GROOM</LinkButton>
        <LinkButton to="/bride">BRIDE</LinkButton>
        <LinkButton to="/map">MAP</LinkButton>
      </StoryButton>
      <PhotoButton>
        <LinkButton to="/photo">PHOTO</LinkButton>
      </PhotoButton>
      <RouteContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/groom" component={GroomPage} />
          <Route path="/bride" component={BridePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/photo" component={PhotoPage} />
        </Switch>
      </RouteContainer>
    </TabContainer>
  );
}

const TabContainer = styled.div``;

const MainLogo = styled.div``;
const StoryButton = styled.div``;
const PhotoButton = styled.div``;

const LinkButton = styled(Link)``;

const RouteContainer = styled.div``;
