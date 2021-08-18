import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container, Img } from "./globals/styles.js";
import RootRoute from "./routes";

import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import rootReducer from "./modules";
import { updatePost } from "./modules/post";
import { darkTheme, lightTheme } from "./globals/theme";
import SwitchButton from "./components/SwitchButton";
import useThemeMode from "./hooks/useThemeMode";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

function RenderApp() {
  const { themeMode, switchThemeMode } = useThemeMode();
  const [isInitComplete, setInitComplete] = useState(false);

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
          setInitComplete(true);
        }
      });
  }, [dispatch]);

  if (!isInitComplete)
    return (
      <Container>
        <Img src="/img/weddingPhoto.png" alt="메인 로더 사진" />
      </Container>
    );

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <SwitchButton changeTheme={switchThemeMode} isDark={themeMode} />
      <GlobalStyle />
      <RootRoute initComplete={isInitComplete} />
    </ThemeProvider>
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
