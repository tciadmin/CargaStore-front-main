import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Colors } from "../../Utils/Colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CompMarketplacePostular = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const images = [
    { src: "/src/assets/imgMarketplace/FirstImgBobina.jpg" },
    { src: "/src/assets/imgMarketplace/SecondImgBobina.jpg" },
    { src: "/src/assets/imgMarketplace/ThirdImgBobina.jpg" },
  ];

  return (
    <Box
      style={{
        display: "flex",
        padding: 30,
        gap: "40px",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Box style={{ display: "flex", width: "40%", height: "100%" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          {images.map((image, i) => (
            <Box>
              <img style={{ height: "150px" }} src={image.src} />
            </Box>
          ))}
        </Box>
        <Box>
          <img
            style={{ height: "450px" }}
            src="/src/assets/imgMarketplace/BigImgBobina.jpg"
          />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "100%",
          justifyContent: "center",
          gap: "15px",
          textAlign: "justify",
        }}
      >
        <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
            Valor ofertado: <p style={{ fontWeight: 400 }}>$12.000</p>
          </span>
          <h1>Bobinas de papel</h1>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
            Producto: <p style={{ fontWeight: 400 }}>Bobinas de papel</p>
          </span>
          <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
            Cantidad de unidades: <p style={{ fontWeight: 400 }}>147</p>
          </span>
          <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
            Volumen: <p style={{ fontWeight: 400 }}>1 tonelada</p>
          </span>
          <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
            Tipo de carga: <p style={{ fontWeight: 400 }}>Seca</p>
          </span>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3>Información adicional</h3>
          <Box>
            <span>
              Es un envío internacional de bobinas de papel que despacha El
              mundo mágico en Perú hacia Colombia para El mundo de papel. La
              carga no posee contenido peligroso pero es necesario embalarlas
              con film protector especial para poder preservar el contenido de
              manera intacta.
            </span>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "100%",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            borderColor: Colors.terciary.main,
            padding: "10px",
            borderRadius: "10px",
            gap: "10px",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3>Información del cliente</h3>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Nombre: <p style={{ fontWeight: 400 }}>Carlos Pérez</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Ciudad de origen: <p>Quito, Perú</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Empresa:{" "}
              <p style={{ fontWeight: 400 }}>Distribuidora de papel s.a</p>
            </span>
          </Box>
          <Box style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3>Información del envío</h3>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Fecha de retiro: <p style={{ fontWeight: 400 }}>12/03/24</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Hora de retiro: <p style={{ fontWeight: 400 }}>12:00hs</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Dirección de retiro:{" "}
              <p style={{ fontWeight: 400 }}>Calle 12, Quito, Perú</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Teléfono: <p style={{ fontWeight: 400 }}>123456</p>
            </span>

            <img
              style={{ width: "300px" }}
              src="/src/assets/imgRegister/RegDivider.svg"
            />

            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Fecha de retiro: <p style={{ fontWeight: 400 }}>21/03/24</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Hora de retiro: <p style={{ fontWeight: 400 }}>12:00hs</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Dirección de retiro:{" "}
              <p style={{ fontWeight: 400 }}>Calle 21, Colombia</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Teléfono: <p style={{ fontWeight: 400 }}>123456</p>
            </span>
            <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
              Destinatario:{" "}
              <p style={{ fontWeight: 400 }}>El mundo del papel</p>
            </span>
          </Box>
        </Box>
        <Button onClick={handleOpen}>Postularse</Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
