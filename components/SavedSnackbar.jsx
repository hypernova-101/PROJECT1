import { Snackbar, Alert } from "@mui/material";

export default function SavedSnackbar({ isOpen, handleClose }) {
    return (
        <>
            <Snackbar open={isOpen} autoHideDuration={800} onClose={handleClose} anchorOrigin={{ 'vertical': 'top', 'horizontal': 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Saved!
                </Alert>
            </Snackbar>
        </>
    );
}