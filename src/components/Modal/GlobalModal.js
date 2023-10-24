// GlobalModal.jsx

import React, { useEffect } from "react";
import "./GlobalModal.css";

function GlobalModal({ isOpen, message, onClose, autoCloseInSeconds = 3 }) {
  useEffect(() => {
    if (isOpen) {
      const timerId = setTimeout(() => {
        onClose();
      }, autoCloseInSeconds * 1000);

      // Limpiar el timer si el modal se cierra antes del tiempo especificado
      return () => clearTimeout(timerId);
    }
  }, [isOpen, onClose, autoCloseInSeconds]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </>
  );
}

export default GlobalModal;
