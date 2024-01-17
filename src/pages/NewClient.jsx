import React from 'react'
import InputText from '../components/InputText'
import { Box, Button, Typography } from '@mui/material'

export const NewClient = () => {

  const handleSubmit = (e) => {

    e.preventDefault()
    const dataForm = new FormData(e.currentTarget);

    const data = {
      name: dataForm.get('name'),
      surname: dataForm.get('surname'),
      email: dataForm.get('email'),
      address: dataForm.get('address'),
      phone: dataForm.get('phone'),

    }

    console.log({ data })

  }

  return (
    <Box
      onSubmit={handleSubmit}
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Typography variant="h3" textAlign='center' fontFamily='Tenor Sans' color='#7C7C7C' >
        NUEVO CLIENTE
      </Typography>
      <InputText placeholder='Nombre' name='name' />
      <InputText placeholder='Apellido' name='surname' />
      <InputText placeholder='Email' name='email' />
      <InputText placeholder='Teléfono' name='phone' />
      <InputText placeholder='Dirección' name='address' />
      <Button type='submit' variant="contained" sx={{
        height: '4em',
        bgcolor: '#D9D9D9'
      }}
      >
        Medium
      </Button>
    </Box>
  )
}
