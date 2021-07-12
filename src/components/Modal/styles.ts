import styled, { css, keyframes } from "styled-components";

type ModalContainerProps = {
  open: boolean;
};

type OpenModalProps = {
  active: any;
};

const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props): string => {
    if (props.open === true) return "flex";
    return "none";
  }};
  align-items: ${(props): string => {
    if (props.open === true) return "center";
    return "flex-start";
  }};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OpenModal = styled.section<OpenModalProps>`
  width: 330px;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.basicContentBox};
  overflow: hidden;
  ${(props) => {
    if (props.active) {
      return css`
        animation: ${ModalShow} 0.3s;
      `;
    }
  }};
`;

const ModalHeader = styled.header`
  position: relative;
  padding: 25px 30px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.basicLine};
  border-top: 1px solid ${(props) => props.theme.basicLine};
  color: ${(props) => props.theme.basicFont};
`;

const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 8px 70px;
  color: #fff;
  background-color: ${(props) => props.theme.basicBtnBg};
  border: 0;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
`;

const ModalShow = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const EmoticonImg = styled.img`
  width: 170px;
`;

export {
  ModalContainer,
  OpenModal,
  ModalHeader,
  ModalMain,
  ModalFooter,
  CloseButton,
  EmoticonImg,
};
