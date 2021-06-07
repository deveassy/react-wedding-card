import React from "react";
import {
  Container,
  BrideImg,
  BrideMsg,
  AccountMsg,
  AccountBox,
  AccountButton,
} from "./styles";

function BridePage() {
  return (
    <Container>
      <BrideImg src="/img/bride.jpg" />
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

export default BridePage;
