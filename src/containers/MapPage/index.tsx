import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import {
  PageContainer,
  HowToCome,
  MapBox,
  LocationName,
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

// 기본 위도 경도
const defaultLocation = {
  _latitude: 37.73106585767622,
  _longitude: 126.47569078291531,
};

function MapPage() {
  const [error, setError] = useState(false);
  const location = useSelector(
    (state: RootState) => state.postReducer?.location
  );

  useEffect(() => {
    // create map
    try {
      const container = document.getElementById("kakaomap");
      const options = {
        center: new kakao.maps.LatLng(
          location?._latitude || defaultLocation._latitude,
          location?._longitude || defaultLocation._longitude
        ),
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
    } catch (error) {
      console.log("cannot use kakaomap api, please check your URL");
      setError(true);
    }
  }, [location]);

  return (
    <PageContainer>
      <HowToCome
        style={{
          borderBottom: "1px solid #CA8A8B",
          fontSize: "0.8em",
          fontFamily: "Marker Felt",
        }}
      >
        Location
      </HowToCome>
      <HowToCome style={{ fontSize: "1.2em", color: "#777" }}>
        오시는 길
      </HowToCome>
      <MapBox>
        <LocationName>명진컨벤션웨딩부페</LocationName>
        <p>인천광역시 강화군 강화읍 충렬사로 138</p>
        <div id="kakaomap" style={{ width: "360px", height: "360px" }}>
          {error ? (
            <p style={{ textAlign: "center", color: "darkgrey" }}>
              일시적인 오류로 인해 지도 확인이 불가능합니다
            </p>
          ) : undefined}
        </div>
        <div style={{ marginTop: "10px", fontSize: "0.7em", color: "#888" }}>
          아래 아이콘을 클릭하면 앱으로 연결됩니다.
        </div>
        <MapLinkBox>
          <MapLink href="kakaomap://look?p=37.73106585767622,126.47569078291531">
            <MapImg src="/img/kmapicon.png" alt="kakaomap logo" />
            <MapName>카카오맵</MapName>
          </MapLink>
          <MapLink href="tmap://search?name=명진컨벤션웨딩부페">
            <MapImg src="/img/tmapicon.png" alt="tmap logo" />
            <MapName>티맵</MapName>
          </MapLink>
          <MapLink href="nmap://place?lat=37.73106585767622&lng=126.47569078291531&name=%eb%aa%85%ec%a7%84%ec%bb%a8%eb%b2%a4%ec%85%98%ec%9b%a8%eb%94%a9%eb%b6%80%ed%8e%98&appname=https://doristagram--pr34-ethan-config-github-5u0z5ljj.web.app/">
            <MapImg src="/img/navermapicon.png" alt="navermap logo" />
            <MapName>네이버맵</MapName>
          </MapLink>
        </MapLinkBox>
      </MapBox>
    </PageContainer>
  );
}

export default MapPage;
