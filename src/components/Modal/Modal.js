import React from "react";
import Dialog from "@mui/material/Dialog";

export const Modal = ({ open, handleClose, children, maxWidth }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={maxWidth ? true : false}
    >
      {children}
    </Dialog>
  );
};
// xs: Extra pequeño.
// sm: Pequeño.
// md: Mediano.
// lg: Grande.
// xl: Extra grande.
