import React, { Fragment } from "react";

import { GlobalStyle } from "./globals/styles.js";
import RootRoute from "./routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);

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
  return (
    <Provider store={store}>
      <RenderApp />
    </Provider>
  );
}

export default App;
