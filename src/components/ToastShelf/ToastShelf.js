import React, { useContext } from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ ...delegated }) {
  const { toasts, dismissToast } = useContext(ToastContext);

  return (
    <ol {...delegated} className={styles.wrapper}>
      {toasts.map(({ message, variant, id }, index) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => dismissToast(index)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
