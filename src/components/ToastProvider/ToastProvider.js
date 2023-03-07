import React from "react";
import ToastShelf from "../ToastShelf";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const clearToast = React.useCallback(() => setToasts([]), []);

  useEscapeKey(clearToast);

  function createToast(message, variant) {
    const random = Math.random();

    setToasts([...toasts, { id: random, message, variant }]);
  }

  function dismissToast(index) {
    const newToasts = [...toasts];
    newToasts.splice(index, 1);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      <ToastShelf role="region" aria-live="polite" aria-label="Notification" />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
