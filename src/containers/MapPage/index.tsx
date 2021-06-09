import React, { useEffect } from "react";
import {
  PageContainer,
  MapMsg,
  MapBox,
  LocationName,
  Location,
} from "./styles";
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function MapPage() {
  useEffect(() => {
    // create map
    const container = document.getElementById("kakaomap");
    const options = {
      center: new kakao.maps.LatLng(37.731031916277374, 126.4757658840934),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // create address-coordinates change obj
    const geocoder = new kakao.maps.services.Geocoder();
    // research coordinates from address
    geocoder.addressSearch("인천 강화군 강화읍 충렬사로 138", function (
      result: any,
      status: any
    ) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // indication marker
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // custom location info
        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">은솔&재일 결혼식장</div>',
        });
        infowindow.open(map, marker);

        // move to center
        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <PageContainer>
      <MapMsg>☺︎ 오시는 길 ☺︎</MapMsg>
      <MapBox>
        <LocationName>명진컨벤션웨딩부페</LocationName>
        <Location>인천광역시 강화군 강화읍 충렬사로 138</Location>
        <div id="kakaomap" style={{ width: "80vw", height: "40vh" }}></div>
      </MapBox>
    </PageContainer>
  );
}

export default MapPage;
