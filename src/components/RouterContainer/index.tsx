import React, { FC } from "react";
import {
  BodyContainer,
  FooterContainer,
  HeaderContainer,
  Root,
} from "./styles";
import { ILayout } from "./types";

/**
 * 헤더, 바디, 푸터 레이아웃 정의
 * - 각 랜더 함수의 유무에 따라 선택적으로 랜더
 */
const RouterContainer: FC<ILayout> = (props) => {
  const { children: body, renderHeader, renderFooter } = props;
  return (
    <Root>
      {renderHeader ? (
        <HeaderContainer>{renderHeader()}</HeaderContainer>
      ) : null}
      <BodyContainer>{body}</BodyContainer>
      {renderFooter ? (
        <FooterContainer>{renderFooter()}</FooterContainer>
      ) : null}
    </Root>
  );
};

export default RouterContainer;
