import { AppBar, Box, Toolbar } from "@mui/material";
import { useId } from "react";


export const ActionBarClient = ({
    left = [{ IconOrButton: <></>, text: '' }],
    right = [{ IconOrButton: <></>, text: '' }]
}) => {
    return (
        <Box >
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {
                            left.map((ib, i) => <div
                                key={`left-${useId()}-${i}`}
                                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                {ib?.IconOrButton}
                                {ib.text && <p style={{ marginLeft: '.3em', marginRight: '1em' }}>{ib.text}</p>}
                            </div>)
                        }
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {
                            right.map((ib, i) => <div
                                key={`left-${useId()}-${i}`}
                                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                {ib?.IconOrButton}
                                {ib.text && <p style={{ marginLeft: '.3em', marginRight: '1em' }}>{ib.text}</p>}
                            </div>)
                        }
                    </Box>

                </Toolbar>
            </AppBar>

        </Box>
    )
}
