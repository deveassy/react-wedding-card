import styled, { css, keyframes } from "styled-components";

const fadein = keyframes`
  0% { bottom: 0px; opacity: 0; } 
  100% { bottom: 10px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { bottom: 10px; opacity: 1; } 
  100% { bottom: 0px; opacity: 0; }
`;

interface Props {
  show: boolean;
}

export const Toast = styled.div<Props>`
  z-index: 100;
  position: absolute;
  left: -20px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  width: 100%;
  background-color: #9b6cbf;
  color: #fff;
  text-align: center;
  padding: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.8rem;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.0s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.0s
        `
      : ""};
  animation-fill-mode: forwards;
`;
