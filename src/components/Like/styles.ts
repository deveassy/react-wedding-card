import styled from "styled-components";

const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 -20px;
`;
const LikeImgBtn = styled.span`
  background-color: none;
`;
const LikeImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 20px;
`;
const LikeNum = styled.p`
  flex-direction: column;
  font-size: 0.8em;
`;

export { LikeBox, LikeImgBtn, LikeImg, LikeNum };
