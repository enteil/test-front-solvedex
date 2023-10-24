import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function GlobalSnackbar({ isOpen, message, onClose, autoCloseInSeconds = 3 }) {
  useEffect(() => {
    if (isOpen) {
      const timerId = setTimeout(() => {
        onClose();
      }, autoCloseInSeconds * 1000);

      return () => clearTimeout(timerId);
    }
  }, [isOpen, onClose, autoCloseInSeconds]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isOpen}
      autoHideDuration={autoCloseInSeconds * 1000}
      onClose={onClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}

export default GlobalSnackbar;
