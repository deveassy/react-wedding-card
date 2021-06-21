import React, { Fragment, useEffect } from "react";
import { GlobalStyle } from "./globals/styles.js";
import RootRoute from "./routes";

import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./modules";
import { updatePost } from "./modules/post";

import postMock from "./mocks/post.json";

const store = createStore(rootReducer);

function RenderApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePost(postMock as PostTypes));
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
