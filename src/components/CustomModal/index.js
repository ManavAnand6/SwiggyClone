import React from "react";
import "./style.js";
import { createPortal } from "react-dom";
import { styles } from "./style.js";

export function CustomModal({
  visible = false,
  openModal = () => {},
  children,
}) {
  return (
    <div>
      {visible
        ? createPortal(
            <>
              <div style={styles.modalWrapper} onClick={openModal} />
              <div style={styles.modalContainer}>{children}</div>
            </>,
            document.body
          )
        : null}
    </div>
  );
}
