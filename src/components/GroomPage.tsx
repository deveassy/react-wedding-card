import React from "react";
import styled from "styled-components";

function GroomPage() {
  return (
    <PageContainer>
      <GroomImg />
      <GroomMsg>
        안녕하세요. <br />
        드디어 신랑이 되는 000입니다. <br />
        저희 둘이 이제는 결실을 맺으려 합니다. <br />
        그 순간속에 여러분을 초대합니다.
        <br />
        부디 저희의 기쁜 날에 함께해주시는 <br />
        모두에게도 기쁜 날이 될 수 있길 바랍니다.
      </GroomMsg>
      <AccountBox>
        <p>신랑 측 계좌번호</p>
        <AccountButton>복사</AccountButton>
      </AccountBox>
      <AddMsg>
        어려운 시국에 직업 오시기 어려우신 분들께서는
        <br />
        신랑에게 보내는 축의금은 이쪽 계좌로 보내주시면 감사하겠습니다.
      </AddMsg>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const GroomImg = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

const GroomMsg = styled.p`
  margin: 10px;
  font-size: 1.2em;
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AccountButton = styled.button`
  width: 70px;
  height: 35px;
  padding: 10px;
  margin-left: 20px;
  border: 0;
  border-radius: 50%;
  background-color: #b6c9f0;
`;

const AddMsg = styled.p`
  font-size: 0.7em;
`;

export default GroomPage;
