import React from "react";
import {
  TabContainer,
  LogoLinkBox,
  LogoLink,
  StoryLinkBox,
  StoryImg,
  StoryLink,
} from "./styles";
import paths from "../../routes/paths.json";

/**
 * 헤더 정보
 * - 탭 포함
 */
export default function Header() {
  return (
    <TabContainer>
      <LogoLinkBox>
        <LogoLink to={paths.main}>Doristagram</LogoLink>
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
    </TabContainer>
  );
}
