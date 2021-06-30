import React, { useState } from "react";
import Modal from "../../components/Modal";
import {
  Container,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  BrideImg,
  BrideMsg,
  AccountMsg,
  AccountBox,
  AccountButton,
  AccountNum,
  CopyButton,
} from "./styles";

function BridePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copy, setCopy] = useState("복사");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCopy = () => {
    var obj = document.getElementById("numInput") as HTMLInputElement;
    obj.select(); //인풋 컨트롤의 내용 전체 선택
    document.execCommand("copy"); //복사
    obj.setSelectionRange(0, 0); //선택영역 초기화
    setCopy("완료!");
  };
  return (
    <Container>
      <ProfileNameBox>
        <ProfileImg src="/img/IMG4.jpg" alt="bride small profile img" />
        <ProfileName>iameundori</ProfileName>
      </ProfileNameBox>
      <BrideImg src="/img/IMG5.jpeg" alt="bride profile img" />
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
        <AccountButton onClick={openModal}>보기</AccountButton>
        <Modal
          active
          open={modalOpen}
          close={closeModal}
          header="계좌번호 보기"
        >
          <p>우리</p>
          <AccountNum type="text" id="numInput" value="123456700" readOnly />
          <CopyButton onClick={handleCopy}>{copy}</CopyButton>
        </Modal>
      </AccountBox>
    </Container>
  );
}

export default BridePage;
