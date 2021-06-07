import React, { Fragment } from "react";

import { GlobalStyle } from "./globals/styles";
import RootRoute from "./routes";

/**
 * 앱의 랜더에 필요한 설정 적용
 * - 글로벌 스타일 적용
 */
function RenderApp() {
  return (
    <Fragment>
      {/* 글로벌 스타일 정의 */}
      <GlobalStyle />
      {/* 페이지 라우트 */}
      <RootRoute />
    </Fragment>
  );
}

function App() {
  return <RenderApp />;
}

export default App;
