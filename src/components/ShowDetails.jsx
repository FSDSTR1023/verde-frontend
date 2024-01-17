import { Box, IconButton, Modal } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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

export const ShowDetails = ({ modal }) => {

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

            <IconButton aria-label="details" onClick={handleOpen} >
                <VisibilityOutlinedIcon color='disabled' />
            </IconButton>
        </>
    )
}
