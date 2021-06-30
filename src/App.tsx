import React, { Fragment, useEffect } from "react";
import { GlobalStyle } from "./globals/styles.js";
import RootRoute from "./routes";

import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./modules";
import { updatePost } from "./modules/post";

const store = createStore(rootReducer);

function RenderApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    const postId = "v6subHi6XYmqJn6xypq2";
    fetch(
      `https://us-central1-enoveh-toy.cloudfunctions.net/getPost?postId=${postId}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.status === 200) {
          dispatch(updatePost(json.result as PostTypes));
        }
      });
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
