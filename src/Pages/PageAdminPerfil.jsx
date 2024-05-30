import React, { useState } from 'react'
import { Avatar, Button, Stack } from '@mui/material'
import InputForm from '../Components/inputs/InputForm';

const PageAdminPerfil = () => {
  const [editar, setEditar] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent={"center"}>
        <Stack display="flex" width="100%" maxWidth={"650px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <Avatar
            alt="Admin"
            src="imagen"
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <InputForm label="Nombre" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
          <InputForm label="Apellido" sizeH='35px' marginB={3} readOnly={!editar} />

          <InputForm label="Correo electrónico" type='email' sizeH='35px' marginB={3} readOnly={!editar} />




          {editar ?
            <Button variant="contained" style={{ fontWeight: "bold" }} > Guardar Cambios
            </Button>

            :
            <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
            </Button>

          }
        </Stack>
      </Stack>
    </>)
}

export default PageAdminPerfil