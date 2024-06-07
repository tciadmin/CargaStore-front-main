import { Button, Container, Grid, LinearProgress, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import GreenStepper from '../Components/steppers/GreenStepper'
import InputForm from '../Components/inputs/InputForm';
import { useNavigate } from 'react-router-dom';
import CompNavLanding from '../Components/NavLanding/CompNavLanding';

const PageCrearEnvios = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const mobile = useMediaQuery("(max-width:750px)");

  const steps = [
    'Datos personales',
    'Producto',
    'Envío',
    "Pago"
  ];
  const descripciones = [
    "Detalles del generador de carga",
    "Información del producto",
    "Detalles del envío",
    "Pago con tarjeta"
  ]
  const select = [
    "Seca", "Peligrosa", "Refrigerada"
  ]
  const navigate = useNavigate();
  return (
    <>
    <CompNavLanding></CompNavLanding>
    <section style={{ background: "#F6F6F6", height: "100%" }} id="arriba">
      <Container maxWidth={"md"} sx={{ padding: "20px 0" }}>
        {!mobile ? <>
          <GreenStepper steps={steps} activeStep={stepIndex}></GreenStepper>
        </>
          : <>
            <svg width="24" style={{ marginLeft: "15px", cursor: "pointer" }} onClick={() => {
              setStepIndex(stepIndex - 1);
              if (stepIndex == 0) {
                navigate("/home")
              }
            }} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_343_8051)">
                <path d="M23.25 12H0.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.25 1.5L0.75 12L11.25 22.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_343_8051">
                  <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                </clipPath>
              </defs>
            </svg>
            <Stack direction="row" justifyContent={"center"}>
              <Typography color="secondary" mb={1} fontWeight={600} fontSize={"14px"}>Paso {stepIndex + 1}</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={(stepIndex + 1) * 25} />
          </>

        }
        <Typography variant="h5" textAlign={"center"} mt={5} >Crear envío</Typography>
        <Typography variant="h6" sx={{ fontSize: "16px", marginBottom: 5, color: "#8C94A6", textAlign: "center", fontWeight: 400 }} >{descripciones[stepIndex]}</Typography>
        <Stack direction="column" alignItems={"center"}>
          {
            stepIndex === 0 &&
            <>
              <InputForm label="Usuario o empresa que envía" inputW={mobile ? '90%' : '100%'}></InputForm>
              <InputForm label="Número de teléfono" inputW={mobile ? '90%' : '100%'}></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="RUC"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Empresa que recibe"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Número de contacto"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="RUC"></InputForm>
            </>
          }
          {
            stepIndex === 1 &&
            <>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Nombre del producto"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Cantidad de unidades"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Tipo de carga" type="select" select={select}></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Peso total"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Volumen del paquete"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Valor ofertado" money={true}></InputForm>
              <Stack direction="row" width={mobile ? "90%" : "100%"} justifyContent={"space-between"}>
                <label style={{ color: "#475367", fontWeight: 500 }} htmlFor={"imagenes"}>Imagénes del producto</label>
                <label style={{ color: "#475367", fontWeight: 800, cursor: "pointer" }} >Subir</label>

              </Stack>

              <Grid container margin="0 auto" width="100%" my={2} mb={2} justifyContent={"flex-start"} spacing={1}>
                <Grid item container xs={6} sm={3} direction="row" justifyContent={"center"}>
                  <img src="/crearenvios/i1.png" width={mobile ? "90px" : "150px"} alt="imagen de prueba" />
                </Grid>
                <Grid item container xs={6} sm={3} direction="row" justifyContent={"center"}>
                  <img src="/crearenvios/i2.png" width={mobile ? "90px" : "150px"} alt="imagen de prueba" />
                </Grid>
                <Grid item container xs={6} sm={3} direction="row" justifyContent={"center"}>
                  <img src="/crearenvios/i3.png" width={mobile ? "90px" : "150px"} alt="imagen de prueba" />
                </Grid>
                <Grid item container xs={6} sm={3} direction="row" justifyContent={"center"}>
                  <img src="/crearenvios/i4.png" width={mobile ? "90px" : "150px"} alt="imagen de prueba" />
                </Grid>
              </Grid>
            </>
          }
          {
            stepIndex === 2 &&
            <>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Fecha de retiro" type='date'></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Hora de retiro" type='time'></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Dirección de retiro"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Fecha de entrega" type='date'></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Hora de entrega" type='time'></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Dirección de entrega"></InputForm>
            </>
          }
          {
            stepIndex === 3 &&
            <>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Nombre"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Número de tarjeta"></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Fecha de vencimiento" type='date'></InputForm>
              <InputForm inputW={mobile ? '90%' : '100%'} label="Monto a pagar" money={true}></InputForm>
            </>
          }
          <Button sx={{ width: mobile ? "90%" : "100%", padding: mobile ? "" : "18px 0", fontWeight: "bold", fontSize: "16px" }}

            onClick={() => {
              if (stepIndex < steps.length - 1) {
                setStepIndex(stepIndex + 1)
              }
            }
            }
            href="#arriba"
          >{stepIndex == steps.length - 1 ? "Pagar " : "Siguiente paso"}</Button>
        </Stack>
      </Container>

    </section>
    </>
  )
}

export default PageCrearEnvios