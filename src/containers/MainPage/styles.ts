import styled, { css } from "styled-components";

type timeProps = { time?: any };

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div``;

// 피드(프로필이름 + 사진슬라이더 + 좋아요 + 메세지)
const FeedBox = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
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
`;

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

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;
const WeddingDay = styled.h2<timeProps>`
  position: absolute;
  /* ${(props) => {
    if (props.time) {
      return css`
        top: 30px;
      `;
    }
    return 0;
  }}; */
  left: 50%;
  transform: translateX(-50%);
  font-family: "Kaushan";
`;
const WeddingCount = styled.h3`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Kaushan";
`;

const MainMsg = styled.p`
  padding-left: 20px;
`;

// 댓글
const CommentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;
const CommentInput = styled.input`
  width: 75vw;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
`;
const AddButton = styled.button`
  padding: 5px;
`;

const Comment = styled.div`
  padding: 5px;
`;

export {
  Container,
  FeedBox,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  LikeBox,
  LikeImgBtn,
  LikeImg,
  WeddingDay,
  WeddingCount,
  LikeNum,
  MainMsg,
  CommentBox,
  CommentInput,
  AddButton,
  Comment,
  SlideImg,
};
