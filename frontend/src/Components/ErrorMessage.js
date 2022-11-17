import React from "react";

import { Snackbar } from "@mui/material";

const MuiAlert = React.forwardRef(function MuiAlert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function ErrorMessage({
    openMessage,
    anchorOrigin,
    handleClose,
    severity,
    message
}) {
    return (
        <div> 
            <Snackbar
                openMessage={openMessage}
                autoHideDuration={4000}
                anchorOrigin={anchorOrigin}
                onClose={handleClose}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

