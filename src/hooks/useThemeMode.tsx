import { useCallback, useState } from "react";

/**
 * 초기 브라우저의 테마 모드
 */
const initialThemeMode = Boolean(localStorage.getItem("themeMode"));

/**
 * 테마 모드 업데이트를 위한 hook입니다.
 * @returns `themeMode`가 true이면 다크모드, false이면 라이트모드로 간주합니다.
 * `switchThemeMode`는 테마 모드를 스위치 할 수 있는 함수입니다.
 */
const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<boolean>(initialThemeMode);

  /**
   * 테마 모드의 값을 변경하면서 브라우저에 현재 테마 모드의 값을 저장
   * 추후 새로고침 시 사용자가 지정한 브라우저의 모드대로 초기 테마 모드가 설정되도록 합니다.
   */
  const switchThemeMode = useCallback(() => {
    console.log("switch theme mode");
    if (themeMode) {
      localStorage.removeItem("themeMode");
    } else {
      localStorage.setItem("themeMode", "true");
    }
    setThemeMode(!themeMode);
  }, [themeMode]);

  return {
    themeMode,
    switchThemeMode,
  };
};

export default useThemeMode;
