import React from "react";
import InputText from "../components/InputText";
import { Box, Button, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";

export const NewGallery = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);

    const data = {
      nameGallery: dataForm.get("nameGallery"),
      client: dataForm.get("client"),
      photosNumber: dataForm.get("photosNumber"),
      priceFullGallery: dataForm.get("priceFullGallery"),
      files: dataForm.get("files"),
    };

    console.log({ data });
  };

  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          bgcolor: "white",
          px: "90px",
          py: "40px",
        }}
      >
        <Typography
          variant="h6"
          textAlign="left"
          fontFamily="Tenor Sans"
          color="#7C7C7C"
        >
          DATOS
        </Typography>
        <InputText placeholder="Nombre de la galería" name="nameGallery" />
        <InputText placeholder="Cliente" name="client" />
        <Typography
          variant="h6"
          textAlign="left"
          fontFamily="Tenor Sans"
          color="#7C7C7C"
        >
          CONFIGURACIÓN
        </Typography>
        <InputText
          placeholder="Número de fotos que tiene que seleccinar el cliente"
          name="photosNumber"
        />
        <InputText
          placeholder="Precio galería completa"
          name="priceFullGallery"
        />
        <Typography
          variant="h6"
          textAlign="left"
          fontFamily="Tenor Sans"
          color="#7C7C7C"
        >
          IMÁGENES
        </Typography>
        <MuiFileInput
          multiple
          label="Subir imágenes"
          name="files"
        ></MuiFileInput>
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "4em",
            bgcolor: "#D9D9D9",
          }}
        >
          CREAR
        </Button>
      </Box>
    </div>
  );
};

