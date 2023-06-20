import React from "react";
import { createPortal } from "react-dom";

export function CustomModal({
  visible = false,
  openModal = () => {},
  modalWrapperStyle = {},
  modalContainerStyle = {},
  children,
}) {
  return (
    <div>
      {visible
        ? createPortal(
            <>
              <div style={modalWrapperStyle} onClick={openModal} />
              <div style={modalContainerStyle}>{children}</div>
            </>,
            document.body
          )
        : null}
    </div>
  );
}
