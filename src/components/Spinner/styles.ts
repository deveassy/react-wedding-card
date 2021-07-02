import styled, { keyframes } from "styled-components";

const Effect = keyframes`
0% {
   transform: rotate(0deg);
 }
 100% {
   transform: rotate(360deg);
 }
`;

export const SpinnerBox = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 20px;
  background-color: transparent;
  border: 4.5px solid rgba(209, 205, 205, 0.6);
  border-radius: 50%;
  border-left-color: #9b6cbf;
  animation: ${Effect} 2000ms infinite;
`;
