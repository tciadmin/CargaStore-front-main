import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postPayment } from "../../Redux/Actions/PaymentActions/paymentActions";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import Modal from "@mui/material/Modal";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import CompNavLanding from "../NavLanding/CompNavLanding";
// import "./styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function CompPayDriver() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      doc: "",
      pedido: "",
      account: "",
      total: "",
    },
  });

  const onClickPay = (pay) => {
    dispatch(postPayment(pay)) && navigate("/payment") && handleOpen();
  };

  return (
    <Box>
      <CompNavLanding />

      <Box
        sx={{
          display: "flex",
          backgroundColor: Colors.terciary.main,
        }}
        style={{ overflow: mobile ? "" : "hidden" }}
      >
        <Box
          style={{
            display: "flex",
            width: "100%",
            margin: 30,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Box
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <h1 style={{ fontSize: "1.5rem" }}> Acreditar pago </h1>
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.contrastText,
              }}
            >
              Detalles de la transferencia
            </p>
          </Box>

          <form className="inputContainer" onSubmit={handleSubmit(onClickPay)}>
            {/* //? --------------------------------------------- NAME */}
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.main,
              }}
            >
              Nombre del conductor
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
                placeholder="Luis Alvarez"
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- DOC */}
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.main,
              }}
            >
              Documento de identidad
            </p>
            <FormControl
              sx={{ m: 1, width: mobile ? "300px" : "666px" }}
              variant="outlined"
            >
              <OutlinedInput
                {...register("doc", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                placeholder="11111111111"
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
              />
              {errors.doc && (
                <p style={{ color: "red" }}>{errors.doc.message}</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- PEDIDO */}
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.main,
              }}
            >
              Número de pedido
            </p>
            <FormControl
              sx={{ m: 1, width: mobile ? "300px" : "666px" }}
              variant="outlined"
            >
              <OutlinedInput
                {...register("pedido", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                placeholder="#12345"
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
              />
              {errors.pedido && (
                <p style={{ color: "red" }}>{errors.pedido.message}</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- ACCOUNT */}
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.main,
              }}
            >
              Número de cuenta
            </p>
            <FormControl
              sx={{ m: 1, width: mobile ? "300px" : "666px" }}
              variant="outlined"
            >
              <OutlinedInput
                {...register("account", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                placeholder="12345"
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
              />
              {errors.account && (
                <p style={{ color: "red" }}>{errors.account.message}</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- TOTAL */}
            <p
              style={{
                fontWeight: 400,
                color: Colors.secondary.main,
              }}
            >
              Total (-20% comisión)
            </p>
            <FormControl
              sx={{ m: 1, width: mobile ? "300px" : "666px" }}
              variant="outlined"
            >
              <OutlinedInput
                {...register("total", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                placeholder="$11.234"
                style={{
                  height: mobile ? "40px" : "50px",
                  borderRadius: "8px",
                }}
              />
              {errors.total && (
                <p style={{ color: "red" }}>{errors.total.message}</p>
              )}
            </FormControl>
            <Button
              variant="contained"
              sx={{
                m: 1,
                width: mobile ? "300px" : "666px",
                height: "40px",
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: "8px",
              }}
              type="submit"
            >
              Confirmar pago
            </Button>
          </form>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "right",
                  cursor: "pointer",
                }}
              >
                <img
                  onClick={handleClose}
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignContent: "right",
                  }}
                  src="/imgShipments/CloseButton.svg"
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  padding: "20px",
                  gap: "10px",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    // width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/imgAdminPayment/AccreditedPayment.jpg" />
                </Box>

                <Box
                  style={{
                    display: "flex",
                    // width: "70%",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h3 style={{ textAlign: "center", fontWeight: 500 }}>
                    Pago acreditado
                  </h3>

                  <span
                    style={{ display: "flex", gap: "5px", fontWeight: 400 }}
                  >
                    Luis Alvarez recibirá una notificación de la transacción
                    realizada
                  </span>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}
