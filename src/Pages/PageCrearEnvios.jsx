import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import GreenStepper from "../Components/steppers/GreenStepper";
import InputForm from "../Components/inputs/InputForm";
import { useNavigate } from "react-router-dom";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createOrder } from "../Redux/Actions/OrderActions/createOrder";

const PageCrearEnvios = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const mobile = useMediaQuery("(max-width:750px)");

  const steps = ["Datos personales", "Producto", "Envío", "Pago"];
  const descripciones = [
    "Detalles del generador de carga",
    "Información del producto",
    "Detalles del envío",
    "Pago con tarjeta",
  ];
  const select = ["Seca", "Peligrosa", "Refrigerada"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company_name: "",
      company_phone: "",
      ruc: "",
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

  const onClick = (data) => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      dispatch(createOrder(data));
    }
  };

  return (
    <>
      <CompNavLanding></CompNavLanding>
      <section style={{ background: "#F6F6F6", height: "100%" }} id="arriba">
        <Container maxWidth={"md"} sx={{ padding: "20px 0" }}>
          {!mobile ? (
            <>
              <GreenStepper steps={steps} activeStep={stepIndex}></GreenStepper>
            </>
          ) : (
            <>
              <svg
                width="24"
                style={{ marginLeft: "15px", cursor: "pointer" }}
                onClick={() => {
                  setStepIndex(stepIndex - 1);
                  if (stepIndex == 0) {
                    navigate("/shipments");
                  }
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_343_8051)">
                  <path
                    d="M23.25 12H0.75"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 1.5L0.75 12L11.25 22.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_343_8051">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 -1 24 24)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Stack direction="row" justifyContent={"center"}>
                <Typography
                  color="secondary"
                  mb={1}
                  fontWeight={600}
                  fontSize={"14px"}
                >
                  Paso {stepIndex + 1}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={(stepIndex + 1) * 25}
              />
            </>
          )}
          <Typography variant="h5" textAlign={"center"} mt={5}>
            Crear envío
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              marginBottom: 5,
              color: "#8C94A6",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            {descripciones[stepIndex]}
          </Typography>
          <Stack direction="column" alignItems={"center"}>
            {stepIndex === 0 && (
              <>
                <InputForm
                  label="Usuario o empresa que envía"
                  inputW={mobile ? "90%" : "100%"}
                  {...register("company_name", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.company_name && (
                  <p style={{ color: "red" }}>{errors.company_name.message}</p>
                )}
                <InputForm
                  label="Número de teléfono"
                  inputW={mobile ? "90%" : "100%"}
                  {...register("company_phone", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.company_phone && (
                  <p style={{ color: "red" }}>{errors.company_phone.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="RUC"
                  {...register("ruc", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.ruc && (
                  <p style={{ color: "red" }}>{errors.ruc.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Empresa que recibe"
                  {...register("receiving_company", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.receiving_company && (
                  <p style={{ color: "red" }}>
                    {errors.receiving_company.message}
                  </p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Número de contacto"
                  {...register("contact_number", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.contact_number && (
                  <p style={{ color: "red" }}>
                    {errors.contact_number.message}
                  </p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="RUC"
                  {...register("receiving_company_RUC", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.receiving_company_RUC && (
                  <p style={{ color: "red" }}>
                    {errors.receiving_company_RUC.message}
                  </p>
                )}
              </>
            )}
            {stepIndex === 1 && (
              <>
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Nombre del producto"
                  {...register("product_name", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.product_name && (
                  <p style={{ color: "red" }}>{errors.product_name.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Cantidad de unidades"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.quantity && (
                  <p style={{ color: "red" }}>{errors.quantity.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Tipo de carga"
                  type="select"
                  select={select}
                  {...register("type", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.type && (
                  <p style={{ color: "red" }}>{errors.type.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Peso total"
                  {...register("weight", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.weight && (
                  <p style={{ color: "red" }}>{errors.weight.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Volumen del paquete"
                  {...register("volume", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.volume && (
                  <p style={{ color: "red" }}>{errors.volume.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Valor ofertado"
                  money={true}
                  {...register("offered_price", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.offered_price && (
                  <p style={{ color: "red" }}>{errors.offered_price.message}</p>
                )}
                <Stack
                  direction="row"
                  width={mobile ? "90%" : "100%"}
                  justifyContent={"space-between"}
                >
                  <label
                    style={{ color: "#475367", fontWeight: 500 }}
                    htmlFor={"imagenes"}
                  >
                    Imagénes del producto
                  </label>
                  <img
                    src={{
                      ...register("product_pic", {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                      }),
                    }}
                  />
                  <label
                    style={{
                      color: "#475367",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    Subir
                  </label>
                </Stack>

                <Grid
                  container
                  margin="0 auto"
                  width="100%"
                  my={2}
                  mb={2}
                  justifyContent={"flex-start"}
                  spacing={1}
                >
                  <Grid
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={"center"}
                  >
                    <img
                      src="/crearenvios/i1.png"
                      width={mobile ? "90px" : "150px"}
                      alt="imagen de prueba"
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={"center"}
                  >
                    <img
                      src="/crearenvios/i2.png"
                      width={mobile ? "90px" : "150px"}
                      alt="imagen de prueba"
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={"center"}
                  >
                    <img
                      src="/crearenvios/i3.png"
                      width={mobile ? "90px" : "150px"}
                      alt="imagen de prueba"
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={"center"}
                  >
                    <img
                      src="/crearenvios/i4.png"
                      width={mobile ? "90px" : "150px"}
                      alt="imagen de prueba"
                    />
                  </Grid>
                </Grid>
              </>
            )}
            {stepIndex === 2 && (
              <>
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Fecha de retiro"
                  type="date"
                  {...register("pick_up_date", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.pick_up_date && (
                  <p style={{ color: "red" }}>{errors.pick_up_date.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Hora de retiro"
                  type="time"
                  {...register("pick_up_time", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.pick_up_time && (
                  <p style={{ color: "red" }}>{errors.pick_up_time.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Dirección de retiro"
                  {...register("pick_up_address", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.pick_up_address && (
                  <p style={{ color: "red" }}>
                    {errors.pick_up_address.message}
                  </p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Fecha de entrega"
                  type="date"
                  {...register("delivery_date", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.delivery_date && (
                  <p style={{ color: "red" }}>{errors.delivery_date.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Hora de entrega"
                  type="time"
                  {...register("delivery_time", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.delivery_time && (
                  <p style={{ color: "red" }}>{errors.delivery_time.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Dirección de entrega"
                  {...register("delivery_address", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.delivery_address && (
                  <p style={{ color: "red" }}>
                    {errors.delivery_address.message}
                  </p>
                )}
              </>
            )}
            {stepIndex === 3 && (
              <>
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Nombre"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Número de tarjeta"
                  {...register("card", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.card && (
                  <p style={{ color: "red" }}>{errors.card.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Fecha de vencimiento"
                  type="date"
                  {...register("expire", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.expire && (
                  <p style={{ color: "red" }}>{errors.expire.message}</p>
                )}
                <InputForm
                  inputW={mobile ? "90%" : "100%"}
                  label="Monto a pagar"
                  money={true}
                  {...register("payment", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></InputForm>
                {errors.payment && (
                  <p style={{ color: "red" }}>{errors.payment.message}</p>
                )}
              </>
            )}
            <Button
              sx={{
                width: mobile ? "90%" : "100%",
                padding: mobile ? "" : "18px 0",
                fontWeight: "bold",
                fontSize: "16px",
              }}
              onClick={handleSubmit(onClick)}
              href="#arriba"
            >
              {stepIndex == steps.length - 1 ? "Pagar " : "Siguiente paso"}
            </Button>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default PageCrearEnvios;
