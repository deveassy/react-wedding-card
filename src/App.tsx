import React, { Fragment, useEffect } from "react";

import { GlobalStyle } from "./globals/styles.js";
import RootRoute from "./routes";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./modules";
import { updatePost } from "./modules/post";

import postMock from "./mocks/post.json";

const store = createStore(rootReducer);

/**
 * 앱의 랜더에 필요한 설정 적용
 * - 글로벌 스타일 적용
 */
function RenderApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: "UPDATE_POST", payload: postMock });
    dispatch(updatePost(postMock));
  }, [dispatch]);
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
