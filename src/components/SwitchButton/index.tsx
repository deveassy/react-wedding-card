import React from "react";
import { Container, ModeImg } from "./styles";

type SwitchProps = {
  changeTheme: () => void;
  isDark: boolean;
};

export default function SwitchButton(props: SwitchProps) {
  const { changeTheme, isDark } = props;
  return (
    <Container onClick={changeTheme}>
      {isDark ? (
        <ModeImg src="/img/moon.png" alt="" />
      ) : (
        <ModeImg src="/img/sun.png" alt="" />
      )}
    </Container>
  );
}
