import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import "./infodialog.css"; // Import the CSS file

export default function InfoDialog({ open, onClose, additionalInfo, additionaltitle }) {
    return (
      <Dialog open={open} onClose={onClose} className="info-dialog-container">
        <div className="info-dialog-overlay" /> {/* Overlay with background image */}
        <DialogTitle fontSize={"2rem"}>{additionaltitle}</DialogTitle>
        <DialogContent>
          <Typography fontSize={"1.5rem"}>{additionalInfo}</Typography>
        </DialogContent>
      </Dialog>
    );
  }