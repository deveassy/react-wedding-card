import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { SwiperContainer, WeddingDay, WeddingCount, SlideImg } from "./styles";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Pagination, Autoplay, Navigation]);

/**
 * 슬라이더 사진 모음
 */
const sliders = [
  { src: "/img/IMG1.png", alt: "swiper img1" },
  { src: "/img/IMG2.jpeg", alt: "swiper img2" },
  { src: "/img/IMG3.jpeg", alt: "swiper img3" },
];

function SwiperComponent() {
  const todayDate = new Date();
  todayDate.setHours(0);
  todayDate.setMinutes(0);
  todayDate.setSeconds(0, 0);
  const weddingDate = new Date("2021/10/16");

  /**
   * D-day
   */
  const weddingDday =
    (weddingDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24);

  return (
    <SwiperContainer>
      <Swiper
        style={{
          height: "373px",
        }}
        className="swiper-container"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-slide" style={{ position: "relative" }}>
          <WeddingDay style={{ top: "0" }}>2021.10.16 SAT</WeddingDay>
          <WeddingDay style={{ top: "30px" }}>12:00 PM</WeddingDay>
          <WeddingCount>D - {weddingDday}</WeddingCount>
          <SlideImg
            src="/img/mainIMG.jpg"
            alt="main img"
            style={{ opacity: "0.2" }}
          />
        </SwiperSlide>
        {sliders.map((slider) => {
          return (
            <SwiperSlide className="swiper-slide" key={slider.src}>
              <SlideImg src={slider.src} alt={slider.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
}

export default SwiperComponent;
