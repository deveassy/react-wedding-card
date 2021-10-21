import { useState } from "react";

/**
 * 테마 모드 업데이트를 위한 hook
 * @returns `themeMode`가 true이면 다크모드, false이면 라이트모드
 * `switchThemeMode`는 테마 모드를 스위치 할 수 있는 함수
 */
const useThemeMode = () => {
  // 브라우저의 테마 정보를 확인
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 브라우저의 테마 정보를 토대로 초기 상태값 지정
  let initialTheme = isBrowserDarkMode;
  const [themeMode, setThemeMode] = useState<boolean>(initialTheme);

  // 사용자가 지정한 테마가 있는지 확인 후 존재 - 해당 테마로 설정 , 부재 - 브라우저 기본 테마로 설정
  const localSettingTheme = Boolean(localStorage.getItem("themeMode"));
  if (localSettingTheme) {
    initialTheme = localSettingTheme;
  }

  const setMode = (mode: boolean) => {
    localStorage.setItem("themeMode", JSON.stringify(mode));
    setThemeMode(mode);
  };

  const switchThemeMode = () => {
    setMode(!themeMode);
  };

  return {
    themeMode,
    switchThemeMode,
  };
};

export default useThemeMode;
