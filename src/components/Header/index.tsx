import React from "react";
import {
  TabContainer,
  LogoLinkBox,
  LogoLink,
  LogoImg,
  StoryLinkBox,
  StoryImgBox,
  StoryImg,
  StoryName,
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
          <StoryImgBox>
            <StoryImg src="/img/IMG6.jpeg" alt="groom story img" />
          </StoryImgBox>
          <StoryName>iamjaeill</StoryName>
        </StoryLink>
        <StoryLink to={paths.bride}>
          <StoryImgBox>
            <StoryImg src="/img/IMG5.jpeg" alt="bride story img" />
          </StoryImgBox>
          <StoryName>iameundori</StoryName>
        </StoryLink>
        <StoryLink to={paths.map}>
          <StoryImgBox>
            <StoryImg src="/img/kmapicon.png" alt="map story img" />
          </StoryImgBox>
          <StoryName>kakaomap</StoryName>
        </StoryLink>
      </StoryLinkBox>
    </TabContainer>
  );
}
