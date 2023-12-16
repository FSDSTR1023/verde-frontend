import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <Stack
                direction="row"
                justifyContent='space-between'
                bgcolor='white'
                sx={{
                    width: '100%',
                    m: '0',
                    boxShadow: '0px 4px 4px -4px rgba(34, 60, 80, 0.6)'
                }}
            >
                <Stack
                    sx={{
                        mx: 8,
                        my: 1
                    }}
                >
                    <img src="/logo.svg" alt="Logo de Picerly" loading="lazy" />
                </Stack>

                <Stack
                    direction='row'
                    justifyContent='end'
                    alignItems='center'
                >

                    <NavLink to="/">
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: 'black',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem'
                            }}
                        >
                            INICIO
                        </Button>
                    </NavLink>

                    <NavLink to="/signin">
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: 'black',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem'
                            }}
                        >
                            SIGN IN
                        </Button>
                    </NavLink>

                    <NavLink to="/login">
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: 'black',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem'
                            }}
                        >
                            LOGIN
                        </Button>
                    </NavLink>

                </Stack>

            </Stack>
        </>
    )
}
