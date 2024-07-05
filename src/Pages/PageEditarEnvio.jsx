import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import GreenStepper from "../Components/steppers/GreenStepper";
import InputForm from "../Components/inputs/InputForm";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { useForm } from "react-hook-form";

const PageEditarEnvio = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = ["Datos personales", "Producto", "Envío"];
  const descripciones = [
    "Detalles del generador de carga",
    "Información del producto",
    "Detalles del envío",
  ];
  const select = ["Seca", "Peligrosa", "Refrigerada"];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      company_name: "",
      company_phone: "",
      ruc: "",
      receiving_company: "",
      contact_number: "",
      receiving_company_RUC: "",
      product_name: "",
      quantity: "",
      type: "",
      weight: "",
      volume: "",
      offered_price: "",
      product_pic: "",
      orderType: "",
      pick_up_date: "",
      pick_up_time: "",
      pick_up_address: "",
      delivery_date: "",
      delivery_time: "",
      name: "",
      card: "",
      expire: "",
      payment: "",
    },
  });
  return (
    <>
      <CompNavLanding></CompNavLanding>
      <section style={{ background: "#F6F6F6", height: "100%" }} id="arriba">
        <Container maxWidth={"md"} sx={{ padding: "20px 0" }}>
          <GreenStepper steps={steps} activeStep={stepIndex}></GreenStepper>
          <Typography variant="h5" textAlign={"center"} mt={5}>
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
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Usuario o empresa que envía
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("company_name")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Número de teléfono
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("company_phone")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                RUC
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("ruc")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Empresa que recibe
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("receiving_company")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Número de contacto
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("contact_number")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                RUC
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("receiving_company_RUC")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </>
          )}
          {stepIndex === 1 && (
            // product_pic: "",
            // orderType: "",
            <>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Nombre del producto
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("product_name")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Cantidad de unidades
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("quantity")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>

              <InputForm
                {...register("type")}
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
                label="Tipo de carga"
                type="select"
                select={select}
              ></InputForm>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Peso total
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("weight")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Volumen del paquete
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("volume")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Valor ofertado
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("offered_price")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
              <label
                style={{ color: "#475367", fontWeight: 500 }}
                htmlFor={"imagenes"}
              >
                Imagénes del producto
              </label>

              <Grid my={2} container justifyContent={"flex-start"} spacing={1}>
                <Grid item xs={4} md={3}>
                  <img
                    src="/crearenvios/i1.png"
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src="/crearenvios/i2.png"
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src="/crearenvios/i3.png"
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
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
              <InputForm label="Fecha de retiro" type="date"></InputForm>
              <InputForm label="Hora de retiro" type="time"></InputForm>
              <InputForm label="Dirección de retiro"></InputForm>
              <InputForm label="Fecha de entrega" type="date"></InputForm>
              <InputForm label="Hora de entrega" type="time"></InputForm>
              <InputForm label="Dirección de entrega"></InputForm>
            </>
          )}
          {stepIndex === 3 && (
            <>
              <InputForm label="Nombre"></InputForm>
              <InputForm label="Número de tarjeta"></InputForm>
              <InputForm label="Fecha de vencimiento" type="date"></InputForm>
              <InputForm label="Monto a pagar" money={true}></InputForm>
            </>
          )}
          <Button
            sx={{
              width: "100%",
              padding: "18px 0",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={handleSubmit(() => {
              if (stepIndex < steps.length - 1) {
                setStepIndex(stepIndex + 1);
              }
            })}
            href="#arriba"
          >
            {stepIndex == steps.length - 1
              ? "Guardar cambios "
              : "Siguiente paso"}
          </Button>
        </Container>
      </section>
    </>
  );
};

export default PageEditarEnvio;
