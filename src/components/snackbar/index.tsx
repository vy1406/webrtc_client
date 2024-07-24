import React from "react";
import { Snackbar as MuiSnackBar, Alert } from "@mui/material";
import { INIT_SNACKBAR, useSnackBarContext } from "@context/snackbarContext";

export default function SnackBar() {
  const { snackbarData, setSnackbarData } = useSnackBarContext();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    snackbarData.onClose();
    setSnackbarData(INIT_SNACKBAR);
  };

  if (!snackbarData?.isOpen) {
    return null;
  }

  return (
    <div>
      <MuiSnackBar
        open={snackbarData.isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarData.body}
        </Alert>
      </MuiSnackBar>
    </div>
  );
}
