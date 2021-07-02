import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HowToCome = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 10px 0;
  color: #ccc;
`;

const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 370px;
  margin: 10px;
  background-color: #f6f6f6;
`;

const LocationName = styled.h1`
  margin-bottom: -10px;
`;

const MapLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const MapLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
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
  HowToCome,
  MapBox,
  LocationName,
  MapLinkBox,
  MapLink,
  MapImg,
  MapName,
};
