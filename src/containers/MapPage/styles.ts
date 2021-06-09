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

export { PageContainer, MapMsg, MapBox, LocationName, Location };
