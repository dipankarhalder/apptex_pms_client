import { useState, useCallback } from "react";
import { ToastContext } from "./toastContext";
import { Toast } from "./index";

export const ToastProvider = ({ children }) => {
  const [toastState, setToastState] = useState({
    show: false,
    type: "",
    heading: "",
    description: "",
  });

  const addToast = useCallback((message, duration = 5000) => {
    if (!message.type) return;

    setToastState({
      show: true,
      type: message.type,
      heading: message.title,
      description: message.description,
    });
    setTimeout(() => {
      setToastState((prev) => ({ ...prev, show: false }));
    }, duration);
  }, []);

  const removeToast = useCallback(() => {
    setToastState((prev) => ({ ...prev, show: false }));
  }, []);

  const contextValue = {
    showToast: addToast,
    hideToast: removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toastState.show && (
        <Toast
          show={toastState.show}
          removeToast={removeToast}
          toastData={toastState}
        />
      )}
    </ToastContext.Provider>
  );
};
