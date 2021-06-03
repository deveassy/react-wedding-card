import React from "react";
import styled from "styled-components";

function BridePage() {
  return (
    <Container>
      <BrideImg />
      <BrideMsg>
        안녕하세요. <br />
        드디어 신부가 되는 000입니다. <br />
        저희 둘이 이제는 결실을 맺으려 합니다. <br />
        그 순간속에 여러분을 초대합니다.
        <br />
        부디 저희의 기쁜 날에 함께해주시는 <br />
        모두에게도 기쁜 날이 될 수 있길 바랍니다.
      </BrideMsg>
      <AccountMsg>신부에게 축하의 마음 담아 축의금 보내기</AccountMsg>
      <AccountBox>
        <p>신부 측 계좌번호</p>
        <AccountButton>보기</AccountButton>
      </AccountBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const BrideImg = styled.div`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 50%;
`;

const BrideMsg = styled.p`
  margin: 10px;
  font-size: 1.2em;
`;

const AccountBox = styled.div`
  display: flex;
  align-items: center;
`;

const AccountButton = styled.button`
  width: 70px;
  height: 35px;
  padding: 10px;
  margin-left: 20px;
  border: 0;
  border-radius: 50%;
  background-color: #ffcead;
`;

const AccountMsg = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-top: 20px;
  font-size: 0.7em;
  border-top: 1px solid #ccc;
`;

export default BridePage;
