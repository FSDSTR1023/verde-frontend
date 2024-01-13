import { Box, Fab, Modal, Typography } from "@mui/material";
import { Add } from '@material-ui/icons';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: '#FFF',
    borderRadius: '17px',
    boxShadow: '2px 6px 6px 4px rgba(0, 0, 0, 0.30)',
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export const FAB = ({ modal }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modal}
                </Box>
            </Modal>

            <Fab color="info" aria-label="add" sx={{ position: 'fixed', bottom: '3em', right: '3em', }} onClick={handleOpen}>
                <Add />
            </Fab>
        </>
    )
}
