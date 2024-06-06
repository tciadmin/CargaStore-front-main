import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import GreenStepper from "../Components/steppers/GreenStepper"
import InputForm from "../Components/inputs/InputForm"

const PageEditarEnvio = () => {
  const [stepIndex, setStepIndex] = useState(0)
  const steps = ["Datos personales", "Producto", "Envío"]
  const descripciones = [
    "Detalles del generador de carga",
    "Información del producto",
    "Detalles del envío",
  ]
  const select = ["Seca", "Peligrosa", "Refrigerada"]
  return (
    <section
      style={{ background: "#F6F6F6", height: "100%" }}
      id="arriba"
    >
      <Container
        maxWidth={"md"}
        sx={{ padding: "20px 0" }}
      >
        <GreenStepper
          steps={steps}
          activeStep={stepIndex}
        ></GreenStepper>
        <Typography
          variant="h5"
          textAlign={"center"}
          mt={5}
        >
          Editar envío
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            color: "#8C94A6",
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          {descripciones[stepIndex]}
        </Typography>
        {stepIndex === 0 && (
          <>
            <InputForm label="Usuario o empresa que envía"></InputForm>
            <InputForm label="Número de teléfono"></InputForm>
            <InputForm label="RUC"></InputForm>
            <InputForm label="Empresa que recibe"></InputForm>
            <InputForm label="Número de contacto"></InputForm>
            <InputForm label="RUC"></InputForm>
          </>
        )}
        {stepIndex === 1 && (
          <>
            <InputForm label="Nombre del producto"></InputForm>
            <InputForm label="Cantidad de unidades"></InputForm>
            <InputForm
              label="Tipo de carga"
              type="select"
              select={select}
            ></InputForm>
            <InputForm label="Peso total"></InputForm>
            <InputForm label="Volumen del paquete"></InputForm>
            <InputForm
              label="Valor ofertado"
              money={true}
            ></InputForm>
            <label
              style={{ color: "#475367", fontWeight: 500 }}
              htmlFor={"imagenes"}
            >
              Imagénes del producto
            </label>

            <Grid
              my={2}
              container
              justifyContent={"flex-start"}
              spacing={1}
            >
              <Grid
                item
                xs={4}
                md={3}
              >
                <img
                  src="/crearenvios/i1.png"
                  width={"150px"}
                  alt="imagen de prueba"
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
              >
                <img
                  src="/crearenvios/i2.png"
                  width={"150px"}
                  alt="imagen de prueba"
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
              >
                <img
                  src="/crearenvios/i3.png"
                  width={"150px"}
                  alt="imagen de prueba"
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
              >
                <img
                  src="/crearenvios/i4.png"
                  width={"150px"}
                  alt="imagen de prueba"
                />
              </Grid>
            </Grid>
          </>
        )}
        {stepIndex === 2 && (
          <>
            <InputForm
              label="Fecha de retiro"
              type="date"
            ></InputForm>
            <InputForm
              label="Hora de retiro"
              type="time"
            ></InputForm>
            <InputForm label="Dirección de retiro"></InputForm>
            <InputForm
              label="Fecha de entrega"
              type="date"
            ></InputForm>
            <InputForm
              label="Hora de entrega"
              type="time"
            ></InputForm>
            <InputForm label="Dirección de entrega"></InputForm>
          </>
        )}
        {stepIndex === 3 && (
          <>
            <InputForm label="Nombre"></InputForm>
            <InputForm label="Número de tarjeta"></InputForm>
            <InputForm
              label="Fecha de vencimiento"
              type="date"
            ></InputForm>
            <InputForm
              label="Monto a pagar"
              money={true}
            ></InputForm>
          </>
        )}
        <Button
          sx={{
            width: "100%",
            padding: "18px 0",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          onClick={() => {
            if (stepIndex < steps.length - 1) {
              setStepIndex(stepIndex + 1)
            }
          }}
          href="#arriba"
        >
          {stepIndex == steps.length - 1
            ? "Guardar cambios "
            : "Siguiente paso"}
        </Button>
      </Container>
    </section>
  )
}

export default PageEditarEnvio
