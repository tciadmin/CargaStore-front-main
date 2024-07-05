import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  FormControl,
  OutlinedInput,
  useMediaQuery,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import GreenStepper from "../Components/steppers/GreenStepper";
import InputForm from "../Components/inputs/InputForm";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editOrder } from "../Redux/Actions/OrderActions/editOrder";
import { Colors } from "../Utils/Colors";

const PageEditarEnvio = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = ["Datos personales", "Producto", "Envío"];
  const mobile = useMediaQuery("(max-width:750px)");
  const dispatch = useDispatch();
  const descripciones = [
    "Detalles del generador de carga",
    "Información del producto",
    "Detalles del envío",
  ];
  const [selected, setSelected] = useState([]);
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
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      orderType: "",
      pick_up_date: "",
      pick_up_time: "",
      pick_up_city: "",
      delivery_date: "",
      delivery_time: "",
      name: "",
      card: "",
      expire: "",
      payment: "",
    },
  });
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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

              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Tipo de carga
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "300px" : "852px",
                }}
              >
                <Select
                  displayEmpty
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  inputProps={{ "aria-label": "Without label" }}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                  {...register("type")}
                >
                  {select.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* <InputForm
                {...register("type")}
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
                label="Tipo de carga"
                type="select"
                select={select}
              ></InputForm> */}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
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
                    src={{
                      ...register("image1"),
                    }}
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src={{
                      ...register("image2"),
                    }}
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src={{
                      ...register("image3"),
                    }}
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <img
                    src={{
                      ...register("image4"),
                    }}
                    width={"150px"}
                    alt="imagen de prueba"
                  />
                </Grid>
              </Grid>
            </>
          )}
          {stepIndex === 2 && (
            <>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Fecha de retiro
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("pick_up_date")}
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
                Hora de retiro
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("pick_up_time")}
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
                Dirección de retiro
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("pick_up_city")}
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
                Fecha de entrega
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("delivery_date")}
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
                Hora de entrega
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("delivery_time")}
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
                Dirección de entrega
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("delivery_address")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </>
          )}
          {stepIndex === 3 && (
            <>
              <p
                style={{
                  fontWeight: 400,
                  color: Colors.secondary.main,
                  textAlign: "left",
                }}
              >
                Nombre
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("name")}
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
                Número de tarjeta
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("card")}
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
                Fecha de vencimiento
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("expire")}
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
                Monto a pagar
              </p>
              <FormControl
                sx={{ m: 1, width: mobile ? "300px" : "852px" }}
                variant="outlined"
              >
                <OutlinedInput
                  {...register("payment")}
                  style={{
                    height: mobile ? "40px" : "50px",
                    borderRadius: "8px",
                  }}
                />
              </FormControl>
            </>
          )}
          <Button
            sx={{
              width: "100%",
              padding: "18px 0",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={handleSubmit((data) => {
              if (stepIndex < steps.length - 1) {
                setStepIndex(stepIndex + 1);
              }
              dispatch(editOrder(data));
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
