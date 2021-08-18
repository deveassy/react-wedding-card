import React, { useCallback, useState } from "react";

const initialThemeMode = Boolean(localStorage.getItem("themeMode"));

function useThemeMode() {
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  const switchThemeMode = useCallback(() => {
    if (themeMode) {
      localStorage.removeItem("themeMode");
    } else {
      localStorage.setItem("themeMode", "true");
    }
    setThemeMode(!themeMode);
  }, [themeMode]);

  return { themeMode, switchThemeMode };
}

export default useThemeMode;
