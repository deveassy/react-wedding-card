import React from "react";
import styled from "styled-components";

function MainPage() {
  return (
    <PageContainer>
      <PhotoBox>
        <SoliNameBox>
          <SoliProfileImg src="/img/eundol.jpeg" />
          <SoliName>iameundori + iamjaeill</SoliName>
        </SoliNameBox>
        {/* <PhotoButton to="/photo"> */}
        <PhotoButton>
          <SoliPhoto src="/img/soli.jpg" />
        </PhotoButton>
        <LikeBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <LikeImg src="/img/heart.png" />
            <p> + 3648 days</p>
          </div>
          <LikeNum>좋아요 1234개</LikeNum>
        </LikeBox>
        <MainMsg>
          iameundori + iamjaeill
          <br />
          <br />
          " 2021년 10월 16일 "<br />
          오래전 작은인연이 저희를 연인으로 만들었고 <br />
          지금 그 인연으로 저희가 하나가 됩니다.
          <br />
          아직은 많이 부족하지만
          <br />
          늘 그 순간을 생각하며
          <br />
          서로 아껴주고 사랑하며 살겠습니다.
          <br />
          오셔서 지켜봐주시고 축복해주세요 !
        </MainMsg>
      </PhotoBox>
      <CommentBox>
        <form>
          <CommentInput placeholder="댓글을 입력하세요." />
          <AddButton>입력</AddButton>
        </form>
        <Comment>
          <p>어머 진짜 결혼하는구나~ 축하해~</p>
          <p>결혼식때 보자~</p>
          <p>와 이거 잘만들었다 어디서했어?</p>
        </Comment>
      </CommentBox>
    </PageContainer>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const PageContainer = styled.div``;

const PhotoBox = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const SoliNameBox = styled(FlexDiv)`
  flex-direction: row;
  margin-left: 15px;
`;

const SoliProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 10px;
`;

const SoliName = styled.p`
  font-size: 1em;
`;

const SoliPhoto = styled.img`
  width: 100vw;
  height: 350px;
`;

// const PhotoButton = styled(Link)``;
const PhotoButton = styled.div`
  border-bottom: 1px solid #ccc;
`;

const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 0 -20px 10px;
`;

const LikeImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 20px;
`;

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
  padding: 10px;
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

export default MainPage;
