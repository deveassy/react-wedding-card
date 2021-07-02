import React from "react";
import {
  TabContainer,
  LogoLinkBox,
  LogoLink,
  LogoImg,
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
        <LogoLink to={paths.main} onClick={() => window.scrollTo(0, 0)}>
          <LogoImg src="/img/logo.png" alt="logo img" />
          <p style={{ margin: 0 }}>Doristagram</p>
        </LogoLink>
      </LogoLinkBox>
      <StoryLinkBox>
        <StoryLink to={paths.groom}>
          <StoryImg src="/img/IMG6.jpeg" alt="groom story img" />
          iamjaeill
        </StoryLink>
        <StoryLink to={paths.bride}>
          <StoryImg src="/img/IMG5.jpeg" alt="bride story img" />
          iameundori
        </StoryLink>
        <StoryLink to={paths.map}>
          <StoryImg src="/img/kmapicon.png" alt="map story img" />
          kakaomap
        </StoryLink>
      </StoryLinkBox>
    </TabContainer>
  );
}
