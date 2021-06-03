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
      <LogoLinkBox>
        <LogoLink to="/">Doristagram</LogoLink>
      </LogoLinkBox>
      <StoryLinkBox>
        <StoryLink to="/groom">
          <StoryImg>잴</StoryImg>
          GROOM
        </StoryLink>
        <StoryLink to="/bride">
          <StoryImg>솔</StoryImg>
          BRIDE
        </StoryLink>
        <StoryLink to="/map">
          <StoryImg>지도</StoryImg>
          MAP
        </StoryLink>
      </StoryLinkBox>
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

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TabContainer = styled.div`
  position: relative;
  padding-top: 80px;
`;

const LogoLinkBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 15px;
  background: linear-gradient(to top left, yellow, orange, #cc0e74, purple);
`;

const LogoLink = styled(Link)`
  font-family: "Dancing Script", cursive;
  font-size: 1.8em;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
`;

const StoryLinkBox = styled(FlexDiv)`
  justify-content: space-between;
  /* padding: 10px; */
  border-bottom: 1px solid #ccc;
`;
const StoryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  font-size: 1.2em;
  color: #000;
`;

const StoryImg = styled(FlexDiv)`
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  font-size: 1.5em;
`;

const RouteContainer = styled.div``;
