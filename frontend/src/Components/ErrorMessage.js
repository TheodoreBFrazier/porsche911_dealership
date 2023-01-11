import React from "react";

import { Snackbar } from "@mui/material";
import Stack from "@mui/material/Stack";


const Alert = React.forwardRef(function MuiAlert(props, ref) {
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
            <Stack spacing={2} sx={{ width: "50%" }}>
                <Snackbar
                    openMessage={openMessage}
                    autoHideDuration={4000}
                    anchorOrigin={anchorOrigin}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={severity}
                        sx={{ width: "100%" }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
};

