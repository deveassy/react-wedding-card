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
  color: ${(props) => props.theme.basicFont};
`;

const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin: 10px; */
  background-color: ${(props) => props.theme.basicContentBox};
  border-radius: 2px;
`;

const LocationName = styled.h1`
  margin-bottom: -10px;
  color: ${(props) => props.theme.basicFont};
`;

const MapLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MapLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.basicFont};
`;

const MapImg = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 50%;
`;

const AddressDescription = styled.p`
  color: ${(props) => props.theme.basicFont};
`;

export {
  PageContainer,
  HowToCome,
  MapBox,
  LocationName,
  MapLinkBox,
  MapLink,
  MapImg,
  AddressDescription,
};
