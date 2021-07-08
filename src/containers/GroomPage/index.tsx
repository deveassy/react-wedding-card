import React, { useState } from "react";
import Modal from "../../components/Modal";
import {
  Container,
  ProfileNameBox,
  ProfileImg,
  ProfileName,
  GroomImg,
  GroomMsg,
  AccountMsg,
  AccountBox,
  MoneyButton,
  MoneyImg,
  MainContainer,
  NumContainer,
  AccountNum,
  CopyButton,
} from "./styles";

function GroomPage() {
  const [modalOpen, setModalOpen] = useState(false);

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

    (document.getElementById("button") as HTMLInputElement).disabled = true;
  };

  return (
    <Container>
      <ProfileNameBox>
        <ProfileImg src="/img/IMG4.jpg" alt="groom small profile img" />
        <ProfileName>GroomID</ProfileName>
      </ProfileNameBox>
      <GroomImg src="/img/IMG6.jpeg" alt="groom profile img" />
      <GroomMsg>
        안녕하세요. <br />
        드디어 신랑이 되는 000입니다. <br />
        저희 둘이 이제는 결실을 맺으려 합니다. <br />
        그 순간속에 여러분을 초대합니다.
        <br />
        부디 저희의 기쁜 날에 함께해주시는 <br />
        모두에게도 기쁜 날이 될 수 있길 바랍니다.
      </GroomMsg>
      <AccountMsg>
        <p>코로나는 도대체 언제 끝날까요 ㅠㅠ?</p>
        <p style={{ margin: 0 }}>가긴 어렵지만 축하해주고 싶으신 분들께서는</p>
      </AccountMsg>
      <AccountBox>
        <MoneyButton onClick={openModal}>
          <MoneyImg
            src="/img/money.jpeg"
            alt="money img"
            style={{ width: "100px" }}
          />
        </MoneyButton>
        <Modal
          active
          open={modalOpen}
          close={closeModal}
          header="/img/emoticon2.png"
          footer="보내러가자~"
        >
          <MainContainer>
            <p style={{ margin: 0 }}>감사합니다. 잘 쓸게요!</p>
            <NumContainer>
              우리
              <AccountNum
                type="text"
                id="numInput"
                value="123456700"
                readOnly
              />
              <CopyButton onClick={handleCopy} id="button">
                복사
              </CopyButton>
            </NumContainer>
          </MainContainer>
        </Modal>
      </AccountBox>
    </Container>
  );
}

export default GroomPage;
