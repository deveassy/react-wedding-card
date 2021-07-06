import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 7%;
  z-index: 90;
  width: 50px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.basicLine};

  background-color: ${(props) => props.theme.basicBtnBg};
  color: ${(props) => props.theme.basicFont};
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => {
    if (props.src === "/img/moon.png") return "#FFED99";
    return "#F9B208";
  }};
`;

export const SContainer = styled.div`
  width: 100%;
  background-color: green;
`;