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
        <StoryLink to={paths.groom}>
          <StoryImg src="/img/groom.jpg" />
          iamjaeill
        </StoryLink>
        <StoryLink to={paths.bride}>
          <StoryImg src="/img/bride.jpg" />
          iameundori
        </StoryLink>
        <StoryLink to={paths.map}>
          <StoryImg src="/img/kmap.png" />
          kakaomap
        </StoryLink>
      </StoryLinkBox>
    </TabContainer>
  );
}
