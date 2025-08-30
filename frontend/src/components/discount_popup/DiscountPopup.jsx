import { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import "./DiscountPopup.css";

export const DiscountPopup = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {open && (
        <Paper
          style={{
            position: "fixed",
            bottom: 50,
            right: 25,
            height: 180,
            width: 400,
            padding: 16,
            borderRadius: 8,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <div className="discount-popup-content">
            <IconButton size="small" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
            <p>Get 10% Off</p>
            <p>Enter your email to get 10% off your first order.</p>
            <input />
            <button>Continue</button>
          </div>
        </Paper>
      )}
    </div>
  );
}
