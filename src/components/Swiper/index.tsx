import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { WeddingDay, WeddingCount, SlideImg } from "./styles";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Pagination, Autoplay, Navigation]);

/**
 * 슬라이더 사진 모음
 */
const sliders = [
  { src: "/img/soli.jpg", alt: "img1" },
  { src: "/img/bride.jpg", alt: "img2" },
  { src: "/img/groom.jpg", alt: "img3" },
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
    <Fragment>
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
    </Fragment>
  );
}

export default SwiperComponent;
