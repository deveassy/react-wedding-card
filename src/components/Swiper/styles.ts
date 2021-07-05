import styled from "styled-components";

const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 373px;
  margin: 0 auto;
  background-color: transparent;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => {
    if (props.alt === "main img") return "0.3";
    return null;
  }};
`;
const WeddingDay = styled.p`
  z-index: 100;
  position: absolute;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  font-family: "East Sea Dokdo";
  font-size: 2.3em;
  color: ${(props) => props.theme.basicFont};
`;
const WeddingCount = styled.p`
  z-index: 100;
  position: absolute;
  top: 70px;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  font-family: "East Sea Dokdo";
  font-size: 1.7em;
  color: #a0937d;
`;

export { SwiperContainer, SlideImg, WeddingDay, WeddingCount };
