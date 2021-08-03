import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

/* 페이지 */
import { MainPage, GroomPage, BridePage, MapPage } from "../containers";
/* 컴포넌트 */
import { Header, RouterContainer } from "../components";
/* 라우트 정보 */
import pathInfo from "./paths.json";

/**
 * 메인 라우트
 * - 유저 세션에 대한 기능이 없다면 대부분의 페이지가 이 곳에 정의 됨
 */
export default function MainRoutes() {
  const renderHeader = (): ReactElement => {
    return <Header />;
  };
  return (
    <RouterContainer renderHeader={renderHeader}>
      <Switch>
        <Route exact path={pathInfo.main} component={MainPage} />
        <Route path={pathInfo.groom} component={GroomPage} />
        <Route path={pathInfo.bride} component={BridePage} />
        <Route path={pathInfo.map} component={MapPage} />
      </Switch>
    </RouterContainer>
  );
}
