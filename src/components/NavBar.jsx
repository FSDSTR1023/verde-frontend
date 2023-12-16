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

                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: '#7C7C7C',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem',
                                textTransform: 'uppercase'
                            }}
                        >
                            INICIO
                        </Button>
                    </NavLink>

                    <NavLink
                        to="/signin"
                        className={({ isActive, isPending }) => isActive ? 'active' : ''}
                    >
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: '#7C7C7C',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem',
                                textTransform: 'uppercase'
                            }}
                        >
                            SIGN IN
                        </Button>
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) => isActive ? 'active' : ''}
                    >
                        <Button
                            sx={{
                                mr: 5,
                                fontFamily: 'Tenor Sans',
                                color: '#7C7C7C',
                                fontSize: '1rem',
                                letterSpacing: '0.04rem',
                                textTransform: 'uppercase'
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
