import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import GreenStepper from "../Components/steppers/GreenStepper";
import InputForm from "../Components/inputs/InputForm";
import { useNavigate } from "react-router-dom";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createOrder } from "../Redux/Actions/OrderActions/createOrder";
import { Colors } from "../Utils/Colors";

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
                    {...register("company_name", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.company_name && (
                    <p style={{ color: "red" }}>
                      {errors.company_name.message}
                    </p>
                  )}
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
                    {...register("company_phone", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.company_phone && (
                    <p style={{ color: "red" }}>
                      {errors.company_phone.message}
                    </p>
                  )}
                </FormControl>

                {/* <InputForm
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
                )} */}
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
                    {...register("ruc", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.ruc && (
                    <p style={{ color: "red" }}>{errors.ruc.message}</p>
                  )}
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
                    {...register("receiving_company", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.receiving_company && (
                    <p style={{ color: "red" }}>
                      {errors.receiving_company.message}
                    </p>
                  )}
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
                    {...register("contact_number", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.contact_number && (
                    <p style={{ color: "red" }}>
                      {errors.contact_number.message}
                    </p>
                  )}
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
                    {...register("receiving_company_RUC", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.receiving_company_RUC && (
                    <p style={{ color: "red" }}>
                      {errors.receiving_company_RUC.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("product_name", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.product_name && (
                    <p style={{ color: "red" }}>
                      {errors.product_name.message}
                    </p>
                  )}
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
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.quantity && (
                    <p style={{ color: "red" }}>{errors.quantity.message}</p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("type", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.type && (
                    <p style={{ color: "red" }}>{errors.type.message}</p>
                  )}
                </FormControl>

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
                    {...register("weight", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.weight && (
                    <p style={{ color: "red" }}>{errors.weight.message}</p>
                  )}
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
                    {...register("volume", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.volume && (
                    <p style={{ color: "red" }}>{errors.volume.message}</p>
                  )}
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
                    {...register("offered_price", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.offered_price && (
                    <p style={{ color: "red" }}>
                      {errors.offered_price.message}
                    </p>
                  )}
                </FormControl>

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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("pick_up_date", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.pick_up_date && (
                    <p style={{ color: "red" }}>
                      {errors.pick_up_date.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("pick_up_time", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.pick_up_time && (
                    <p style={{ color: "red" }}>
                      {errors.pick_up_time.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("pick_up_address", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.pick_up_address && (
                    <p style={{ color: "red" }}>
                      {errors.pick_up_address.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("delivery_date", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.delivery_date && (
                    <p style={{ color: "red" }}>
                      {errors.delivery_date.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("delivery_time", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.delivery_time && (
                    <p style={{ color: "red" }}>
                      {errors.delivery_time.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("delivery_address", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.delivery_address && (
                    <p style={{ color: "red" }}>
                      {errors.delivery_address.message}
                    </p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("card", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.card && (
                    <p style={{ color: "red" }}>{errors.card.message}</p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("expire", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.expire && (
                    <p style={{ color: "red" }}>{errors.expire.message}</p>
                  )}
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
                  sx={{ m: 1, width: mobile ? "300px" : "666px" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    style={{
                      height: mobile ? "40px" : "50px",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.payment && (
                    <p style={{ color: "red" }}>{errors.payment.message}</p>
                  )}
                </FormControl>
              </>
            )}
            <Button
              sx={{
                width: mobile ? "300px" : "666px",
                padding: mobile ? "" : "18px 0",
                fontWeight: "bold",
                fontSize: "1rem",
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
