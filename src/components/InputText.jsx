import { Box, TextField } from '@mui/material'

const InputText = ({ placeholder, name }) => {
    return (
        <Box width={'50vw'}>
            <TextField
                fullWidth
                name={name}
                label={placeholder}
                id="fullWidth"
                sx={{
                    fontFamily: 'Be Vietnam Pro'
                }} />
        </Box>
    )
}

export default InputText