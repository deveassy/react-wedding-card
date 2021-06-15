import React, { Fragment, ChangeEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import CommentComponent from "../../components/Comment";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import {
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
  SlideImg,
} from "./styles";

SwiperCore.use([Pagination, Autoplay, Navigation]);

/**
 * 슬라이더 사진 모음
 */
const sliders = [
  { src: "/img/soli.jpg", alt: "img1" },
  { src: "/img/bride.jpg", alt: "img2" },
  { src: "/img/groom.jpg", alt: "img3" },
];

// type MainProps = {
//   time?: any;
// };

function MainPage() {
  // const { time } = props;

  const [value, setValue] = useState("");
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const todayDate = new Date();
  todayDate.setHours(0);
  todayDate.setMinutes(0);
  todayDate.setSeconds(0, 0);

  const anniversaryDate = new Date("2011/06/09");
  const weddingDate = new Date("2021/10/16");

  /**
   * D+day
   */
  const meetDate =
    (todayDate.getTime() - anniversaryDate.getTime()) / (1000 * 60 * 60 * 24) +
    1;

  /**
   * D-day
   */
  const weddingDday =
    (weddingDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24);

  /**
   * 좋아요 기능 -> 서버 연결 되면, 사용자가 좋아요버튼을 눌렀는지 확인 후 좋아요 갯수에 반영되도록 코드 수정하기
   */
  const handleClick = () => {
    setLike(!like);
    setCount(1);
    if (count === 1) return setCount(0);
  };

  return (
    <Fragment>
      <FeedBox>
        <ProfileNameBox>
          <ProfileImg src="/img/eundol.jpeg" />
          <ProfileName>iameundori + iamjaeill</ProfileName>
        </ProfileNameBox>
        <Swiper
          style={{
            height: "373px",
          }}
          className="swiper-container"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide
            className="swiper-slide"
            style={{ position: "relative" }}
          >
            <WeddingDay style={{ top: "0" }}>2021.10.16 SAT</WeddingDay>
            <WeddingDay style={{ top: "30px" }}>12:00 PM</WeddingDay>
            <WeddingCount>D - {weddingDday}</WeddingCount>
            <SlideImg
              src="/img/soli.jpg"
              alt="main-img"
              style={{ opacity: "0.2" }}
            />
          </SwiperSlide>
          {sliders.map((slider) => {
            return (
              <SwiperSlide className="swiper-slide">
                <SlideImg src={slider.src} alt={slider.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 좋아요 버튼 부분 */}
        <LikeBox>
          <LikeImgBtn onClick={handleClick}>
            {like === true ? (
              <LikeImg src="/img/heart.png" />
            ) : (
              <LikeImg src="/img/emptyHeart.png" />
            )}
          </LikeImgBtn>
          <LikeNum>좋아요 {count}개</LikeNum>
        </LikeBox>
        {/* 메인 메세지 부분 */}
        <MainMsg>
          iameundori + iamjaeill
          <br />
          <br />
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
      {/* 댓글 부분 - 컴포넌트 분리시킴 */}
      <CommentComponent />
    </Fragment>
  );
}

export default MainPage;
