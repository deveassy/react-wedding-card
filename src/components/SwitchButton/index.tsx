import React from "react";
import { Container, ModeImg, SContainer } from "./styles";

type SwitchProps = {
  changeTheme: () => void;
  isDark: boolean;
};

export default function SwitchButton(props: SwitchProps) {
  const { changeTheme, isDark } = props;
  return (
    <SContainer>
      <Container onClick={changeTheme}>
        <ModeImg
          src={isDark ? "/img/moon.png" : "/img/sun.png"}
          alt={isDark ? "dark img" : "light img"}
        />
      </Container>
    </SContainer>
  );
}
