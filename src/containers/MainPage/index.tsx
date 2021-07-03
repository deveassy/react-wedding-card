import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CommentComponent from "../../components/Comment";
import SwiperComponent from "../../components/Swiper";
import LikeComponent from "../../components/Like";

import Spinner from "../../components/Spinner";

import {
  Loader,
  FeedBox,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  LoveImg,
  MainMsg,
} from "./styles";
import { RootState } from "../../modules";

function MainPage() {
  const todayDate = new Date();
  todayDate.setHours(0);
  todayDate.setMinutes(0);
  todayDate.setSeconds(0, 0);
  const anniversaryDate = new Date("2021/01/01");

  /**
   * D+day
   */
  const meetDate =
    (todayDate.getTime() - anniversaryDate.getTime()) / (1000 * 60 * 60 * 24) +
    1;

  const post = useSelector((state: RootState) => state.postReducer);

  if (!post)
    return (
      <Loader>
        WELCOME!
        <Spinner />
      </Loader>
    );

  return (
    <Fragment>
      <FeedBox>
        <ProfileNameBox>
          <ProfileImg src="/img/IMG4.jpg" alt="main small profile img" />
          <ProfileName>
            BrideID
            <LoveImg src="/img/love.png" alt="heart img" />
            GroomID
          </ProfileName>
        </ProfileNameBox>
        {/* 사진 스와이퍼 부분 */}
        <SwiperComponent />
        {/* 좋아요 버튼 부분 */}
        <LikeComponent likes={post.likes} />
        {/* 메인 메세지 부분 */}
        <ProfileName style={{ marginLeft: "20px" }}>
          BrideID
          <LoveImg src="/img/love.png" alt="heart img" />
          GroomID
        </ProfileName>
        <MainMsg>
          처음 만난지 {meetDate}일.
          <br />
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
      </FeedBox>
      {/* 댓글 부분 */}
      <CommentComponent comments={post.comments} />
    </Fragment>
  );
}

export default MainPage;
