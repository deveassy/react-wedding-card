import React, { ReactNode } from "react";
import {
  ModalContainer,
  OpenModal,
  ModalHeader,
  ModalMain,
  ModalFooter,
  CloseButton,
  EmoticonImg,
} from "./styles";

type ModalProps = {
  open: boolean;
  close: any;
  header: string;
  footer: string;
  children: ReactNode;
  active: any;
};

const Modal = (props: ModalProps) => {
  const { children, open, close, header, footer, active } = props;
  return (
    <ModalContainer open={open}>
      <OpenModal active={active}>
        <ModalHeader>
          <EmoticonImg src={header} alt="emoticon" />
        </ModalHeader>
        <ModalMain>{children}</ModalMain>
        <ModalFooter>
          <CloseButton onClick={close}>{footer}</CloseButton>
        </ModalFooter>
      </OpenModal>
    </ModalContainer>
  );
};

export default Modal;
