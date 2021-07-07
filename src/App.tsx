import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container, Img } from "./globals/styles.js";
import RootRoute from "./routes";

import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import rootReducer, { RootState } from "./modules";
import { updatePost } from "./modules/post";
import { darkTheme, lightTheme } from "./globals/theme";
import SwitchButton from "./components/SwitchButton";
import useThemeMode from "./hooks/useThemeMode";

const store = createStore(rootReducer);

function RenderApp() {
  const { themeMode, switchThemeMode } = useThemeMode();

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

  const post = useSelector((state: RootState) => state.postReducer);
  if (!post)
    return (
      <Container>
        <Img src="/img/weddingPhoto.jpeg" alt="메인 로더 사진" />
        <h2>WELCOME</h2>
      </Container>
    );

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <SwitchButton changeTheme={switchThemeMode} isDark={themeMode} />
      <GlobalStyle />
      <RootRoute />
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
