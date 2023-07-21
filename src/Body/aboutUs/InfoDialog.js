import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

export default function InfoDialog({ open, onClose, additionalInfo,additionaltitle }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{additionaltitle}</DialogTitle>
      <DialogContent>
        <Typography>{additionalInfo}</Typography>
      </DialogContent>
    </Dialog>
  );
}