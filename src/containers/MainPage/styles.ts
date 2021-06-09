import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div``;

const PhotoBox = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const NameBox = styled(FlexDiv)`
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

const Name = styled.p`
  font-size: 1em;
`;

const WeddingPhoto = styled.img`
  width: 100vw;
  height: 350px;
`;

const PhotoSlider = styled.div`
  border-bottom: 1px solid #ccc;
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 -20px 10px;
`;

const LikeImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 20px;
`;

const DdayBox = styled(FlexDiv)`
  flex-direction: row;
`;

const Dday = styled.p``;

const LikeNum = styled.p`
  margin: -3px 0 -1px 20px;
  flex-direction: column;
`;

const MainMsg = styled.p`
  padding-left: 20px;
`;

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

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  PhotoBox,
  NameBox,
  ProfileImg,
  Name,
  WeddingPhoto,
  PhotoSlider,
  LikeBox,
  LikeImg,
  DdayBox,
  Dday,
  LikeNum,
  MainMsg,
  CommentBox,
  CommentInput,
  AddButton,
  Comment,
  SlideImg,
};
