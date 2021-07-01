import React, { Fragment, useEffect } from "react";
import { Toast } from "./styles";

type ToastProps = {
  children: string;
  isActive: boolean;
  setIsActive: (a: boolean) => void;
};

export default function ToastMessage(props: ToastProps) {
  const { children, isActive, setIsActive } = props;
  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  });
  return (
    <Fragment>
      {isActive ? (
        <Toast show={true}>{children}</Toast>
      ) : (
        <Toast show={false} />
      )}
    </Fragment>
  );
}
