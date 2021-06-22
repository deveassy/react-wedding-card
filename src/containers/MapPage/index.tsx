import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PageContainer,
  MapMsg,
  MapBox,
  LocationName,
  Location,
  MapLinkBox,
  MapLink,
  MapImg,
  MapName,
} from "./styles";
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function MapPage() {
  const { location } = useSelector((state) => ({
    location: state.postReducer.location,
  }));

  useEffect(() => {
    // create map
    const container = document.getElementById("kakaomap");
    const options = {
      center: new kakao.maps.LatLng(location._latitude, location._longitude),
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
  }, [location]);

  return (
    <PageContainer>
      <MapMsg>☺︎ 오시는 길 ☺︎</MapMsg>
      <MapBox>
        <LocationName>명진컨벤션웨딩부페</LocationName>
        <Location>인천광역시 강화군 강화읍 충렬사로 138</Location>
        <div id="kakaomap" style={{ width: "80vw", height: "35vh" }}></div>
        <MapLinkBox>
          {/* map link 연결방식에 대해 생각해봐야 함 */}
          <MapLink href="https://play.google.com/store/apps/details?id=com.skt.tmap.ku&hl=ko&gl=US">
            <MapImg src="/img/tmapicon.png" alt="티맵로고" />
            <MapName>티맵</MapName>
          </MapLink>
          <MapLink href="https://map.naver.com/v5/entry/place/16550040?c=14078705.2648180,4541454.9695063,15,0,0,0,dh">
            <MapImg src="/img/navermapicon.png" alt="네이버맵로고" />
            <MapName>네이버맵</MapName>
          </MapLink>
        </MapLinkBox>
      </MapBox>
    </PageContainer>
  );
}

export default MapPage;
