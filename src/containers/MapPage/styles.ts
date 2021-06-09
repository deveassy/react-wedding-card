import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapMsg = styled.p`
  font-size: 1.3em;
`;

const MapBox = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
`;

const LocationName = styled.h1`
  margin-top: -10px;
`;

const Location = styled.p``;

const MapLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

const MapLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

const MapImg = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

const MapName = styled.p``;

export {
  PageContainer,
  MapMsg,
  MapBox,
  LocationName,
  Location,
  MapLinkBox,
  MapLink,
  MapImg,
  MapName,
};
