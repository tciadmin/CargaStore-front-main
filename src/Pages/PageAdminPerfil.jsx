import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Stack, useMediaQuery } from "@mui/material";
import InputForm from "../Components/inputs/InputForm";

const PageAdminPerfil = () => {
  const mobile = useMediaQuery("(max-width: 750px)");
  const dispatch = useDispatch();
  const [editar, setEditar] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent={"center"}>
        <Stack
          display="flex"
          width={mobile ? "90%" : "100%"}
          maxWidth={"650px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {editar ? (
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="avatar"
                type="file"
              />
            ) : (
              ""
            )}
            <label htmlFor="avatar">
              <Avatar
                alt="Profile"
                src="imagen"
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: "center",
                  cursor: editar ? "cell" : "default",
                }}
              />
            </label>
          </div>
          <InputForm
            label="Nombre"
            sizeH="35px"
            marginT={3}
            marginB={3}
            readOnly={!editar}
          />
          <InputForm
            label="Apellido"
            sizeH="35px"
            marginB={3}
            readOnly={!editar}
          />

          <InputForm
            label="Correo electrónico"
            type="email"
            sizeH="35px"
            marginB={3}
            readOnly={!editar}
          />

          {editar ? (
            <Button variant="contained" style={{ fontWeight: "bold" }}>
              {" "}
              Guardar Cambios
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => setEditar(true)}
              style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }}
            >
              {" "}
              Editar
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default PageAdminPerfil;
