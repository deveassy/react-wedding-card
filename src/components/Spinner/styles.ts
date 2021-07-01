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
  border: 4.5px solid #9b6cbf;
  border-radius: 50%;
  border-top-color: rgba(209, 205, 205, 0.6);
  border-bottom-color: rgba(209, 205, 205, 0.6);
  border-right-color: rgba(209, 205, 205, 0.6);
  animation: ${Effect} 2000ms infinite;
`;
