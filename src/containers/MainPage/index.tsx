import React, { ChangeEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
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
} from "./styles";

function MainPage() {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const todayData = new Date();
  todayData.setHours(0);
  todayData.setMinutes(0);
  todayData.setSeconds(0, 0);

  const anniversaryDate = new Date("2011/06/09");

  const differenceData =
    (todayData.getTime() - anniversaryDate.getTime()) / (1000 * 60 * 60 * 24) +
    1;

  return (
    <Container>
      <PhotoBox>
        <NameBox>
          <ProfileImg src="/img/eundol.jpeg" />
          <Name>iameundori + iamjaeill</Name>
        </NameBox>
        {/* <PhotoSlider>
          <WeddingPhoto src="/img/soli.jpg" />
        </PhotoSlider> */}
        <Swiper
          style={{
            height: "400px",
            border: "1px solid #000",
          }}
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide style={{ backgroundColor: "yellow", height: "100%" }}>
            Slide 1
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "yellowgreen" }}>
            Slide 2
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "blue" }}>Slide 3</SwiperSlide>
        </Swiper>
        <LikeBox>
          <DdayBox>
            <LikeImg src="/img/heart.png" />
            <Dday> + {differenceData} days</Dday>
          </DdayBox>
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
          <CommentInput
            placeholder="댓글을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <AddButton>입력</AddButton>
        </form>
        <Comment>
          <p>어머 진짜 결혼하는구나~ 축하해~</p>
          <p>결혼식때 보자~</p>
          <p>와 이거 잘만들었다 어디서했어?</p>
        </Comment>
      </CommentBox>
    </Container>
  );
}

export default MainPage;
