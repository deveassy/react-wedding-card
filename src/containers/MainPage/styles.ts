import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Loader = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
  font-size: 20px;
  color: #999;
`;

// 피드(프로필이름 + 사진슬라이더 + 좋아요 + 메세지)
const FeedBox = styled.div`
  margin-bottom: 10px;
`;

const ProfileNameBox = styled(FlexDiv)`
  flex-direction: row;
  margin-left: 15px;
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 10px;
`;
const ProfileName = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const LoveImg = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 5px;
`;

const MainMsg = styled.p`
  padding: 0 20px;
  margin: 0 0 10px;
`;

export {
  Loader,
  FeedBox,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  LoveImg,
  MainMsg,
};
