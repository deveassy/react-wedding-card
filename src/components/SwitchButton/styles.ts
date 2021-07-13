import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 7%;
  z-index: 90;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    right: 15%;
  }

  @media only screen and (min-width: 900px) {
    right: 25%;
  }

  @media only screen and (min-width: 1024px) {
    right: 35%;
  }
`;

export const ModeImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const SContainer = styled.div`
  width: 100%;
`;
