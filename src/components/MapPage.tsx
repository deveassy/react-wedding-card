import React from "react";
import styled from "styled-components";

function MapPage() {
  return (
    <PageContainer>
      <div>네이버 지도 API 연결하기?</div>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default MapPage;
