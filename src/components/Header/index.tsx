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
        <LogoLink to={paths.main}>
          <LogoImg src="/img/logo.png" />
        </LogoLink>
      </LogoLinkBox>
      <StoryLinkBox>
        <StoryLink to={paths.groom}>
          <StoryImg src="/img/IMG6.jpeg" />
          iamjaeill
        </StoryLink>
        <StoryLink to={paths.bride}>
          <StoryImg src="/img/IMG5.jpeg" />
          iameundori
        </StoryLink>
        <StoryLink to={paths.map}>
          <StoryImg src="/img/kmapicon.png" />
          kakaomap
        </StoryLink>
      </StoryLinkBox>
    </TabContainer>
  );
}
