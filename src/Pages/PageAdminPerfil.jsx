import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Avatar, Button, Snackbar, Stack, useMediaQuery } from "@mui/material";
import InputForm from "../Components/inputs/InputForm";
import { getUser, patchBasicUserData } from "../Redux/Actions/UserActions/userActions";
import Cookies from 'js-cookie'
const PageAdminPerfil = () => {
  const mobile = useMediaQuery("(max-width: 750px)");
  const dispatch = useDispatch();
  const [editar, setEditar] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);

  const [errorValidation, setErrorValidation] = useState({ value: false, message: "Mensaje incorrecto" });
  const { user } = useSelector(state => state.user);
  const [data, setData] =useState(user);

  React.useEffect(() => {

    dispatch(getUser(Cookies.get("id")));
    setData(user);
    setEditar(false);
  }, []);
 useEffect(() => {
    if (!editar) {
      setData(user);
    }

  }, [user])

  const putBasicData = () => {
    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
    if (!data.name) {
      setErrorValidation({ value: true, message: "El campo nombre debe completarse" })
    } else if (!data.lastname) {
      setErrorValidation({ value: true, message: "El campo apellido debe completarse" })

    } else {

      if (regex.test(data.name) == false) {
        setErrorValidation({ value: true, message: "Su nombre no puede contener carácteres especiales ni números" })

      } else if (regex.test(data.lastname) == false) {
        setErrorValidation({ value: true, message: "Su apellido no puede contener carácteres especiales ni números" })

      } else {
 setEditar(false)
              setDataChanged(true)
                dispatch(patchBasicUserData(data.name, data.lastname))
              }
             
            }
       
  }


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
          value={data.name} 
          setter={(valor) => {
            setData(prevState => ({
              ...prevState,
              name: valor
            }))
          }}
            label="Nombre"
            sizeH="35px"
            marginT={3}
            marginB={3}
            readOnly={!editar}
          />
          <InputForm
          value={data.lastname} 
          setter={(valor) => {
            setData(prevState => ({
              ...prevState,
              lastname: valor
            }))
          }}
            label="Apellido"
            sizeH="35px"
            marginB={3}
            readOnly={!editar}
          />

          <InputForm
          value={user.email} 
            label="Correo electrónico"
            type="email"
            sizeH="35px"
            marginB={3}
            readOnly={true}
          />

          {editar ? (
            <Button variant="contained" style={{ fontWeight: "bold" }}
            onClick={()=>putBasicData()}
            >
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

      <Snackbar open={errorValidation.value} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={() => setErrorValidation({ value: false, message: "" })}>
        <Alert
          onClose={() => setErrorValidation({ value: false, message: "" })}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {errorValidation.message}
        </Alert>
      </Snackbar>
      <Snackbar open={dataChanged} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} autoHideDuration={6000} onClose={() => setDataChanged(false)}>
        <Alert
          onClose={() => setDataChanged(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Los cambios se guardaron con éxito!
        </Alert>
      </Snackbar>
    </>
  );
};

export default PageAdminPerfil;
