import { Alert, Button, Snackbar } from '@mui/material'
import React from 'react'

export default function ToastMessage({open, setOpen}) {

    const handleOpen = () => {
        setOpen(true);
      };
      
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={3000} 
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    This is a toast message.
                </Alert>
            </Snackbar>
        </div>
    )
}
