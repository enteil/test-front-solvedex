import React from "react";
import Dialog from "@mui/material/Dialog";

export const Modal = ({ open, handleClose, children }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {children}
    </Dialog>
  );
};
