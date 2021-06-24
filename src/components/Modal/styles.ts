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
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OpenModal = styled.section<OpenModalProps>`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
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
  padding: 16px 64px 16px 16px;
  background-color: #ecdbba;
  font-weight: 700;
`;

const ModalMain = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #687980;
  border-radius: 5px;
  font-size: 13px;
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

export {
  ModalContainer,
  OpenModal,
  ModalHeader,
  ModalMain,
  ModalFooter,
  CloseButton,
};
