import React, { ReactNode } from "react";
import {
  ModalContainer,
  OpenModal,
  ModalHeader,
  ModalMain,
  ModalFooter,
  CloseButton,
} from "./styles";

type ModalProps = {
  open: boolean;
  close: any;
  header: string;
  children: ReactNode;
  active: any;
};

const Modal = (props: ModalProps) => {
  const { children, open, close, header, active } = props;
  return (
    <ModalContainer open={open}>
      <OpenModal active={active}>
        <ModalHeader>{header}</ModalHeader>
        <ModalMain>{children}</ModalMain>
        <ModalFooter>
          <CloseButton onClick={close}>닫기</CloseButton>
        </ModalFooter>
      </OpenModal>
    </ModalContainer>
  );
};

export default Modal;
