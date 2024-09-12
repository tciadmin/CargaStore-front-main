import {
  Avatar,
  // Box,
  // Button,
  Grid,
  // Modal,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
// import { html2pdf } from 'html2pdf.js';
// import React, { useRef, useState } from 'react';
// import { Colors } from '../../Utils/Colors';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 500,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 0,
// };
const ConductorAsignadoCard = ({
  nombre,
  marca,
  modelo,
  capacidad,
  carga,
  imagen,
  estrellas,
}) => {
  const mobile = useMediaQuery('(max-width:750px)');
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const componentRef = useRef();
  //Generar pdf
  // const generatePdf = () => {
  //   const opt = {
  //     margin: 1,
  //     filename: 'Factura_:' + Date.now() + '.pdf',
  //     image: { type: 'png', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: {
  //       unit: 'in',
  //       format: 'letter',
  //       orientation: 'portrait',
  //     },
  //   };

  //   html2pdf().set(opt).from(componentRef.current).save();
  // };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Conductor asignado</Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          spacing={1}
          style={{
            border: mobile ? '1px solid #007C52' : 'none',
            marginTop: 2,
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <Grid item container xs={mobile ? 4 : 6}>
            <Grid
              item
              container
              direction="row"
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
            >
              <Grid
                item
                container
                justifyContent="center"
                xs={mobile ? 12 : 4}
              >
                <Avatar
                  sx={{
                    width: mobile ? '100px' : '80px',
                    height: mobile ? '100px' : '80px',
                  }}
                  src={imagen}
                />
              </Grid>
              {!mobile && (
                <Grid
                  item
                  xs={8}
                  direction="column"
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography>{nombre}</Typography>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={estrellas}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={mobile ? 8 : 6}>
            <Stack
              direction="column"
              justifyContent={'center'}
              alignItems={'flex-start'}
            >
              {mobile && (
                <Grid
                  item
                  container
                  direction="column"
                  width="100%"
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography>{nombre}</Typography>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={estrellas}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
              )}
              <Typography fontSize="16px" fontWeight={600}>
                Marca:{' '}
                <span style={{ fontWeight: '400' }}>{marca}</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Modelo:{' '}
                <span style={{ fontWeight: '400' }}>{modelo}</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Capacidad:{' '}
                <span style={{ fontWeight: '400' }}>{capacidad}</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Carga:{' '}
                <span style={{ fontWeight: '400' }}>{carga}</span>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {/* <Grid
          item
          container
          direction={'row'}
          width={'100%'}
          justifyContent={'center'}
          mt={3}
          xs={12}
        >
          <Button
            style={{ alignSelf: 'center', fontWeight: 600 }}
            onClick={() => handleOpen()}
          >
            Ver factura
          </Button>
        </Grid> */}
      </Grid>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Box
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'right',
              cursor: 'pointer',
              padding: '5px',
            }}
          >
            <img
              onClick={handleClose}
              style={{
                display: 'flex',
                justifyContent: 'right',
                alignContent: 'right',
              }}
              src="/imgShipments/CloseButton.svg"
            />
          </Box>

          <Box
            style={{
              display: 'flex',
              border: '1px solid',
              borderColor: Colors.terciary.main,
              borderRadius: '8px',
              padding: '20px',
              gap: '15px',
              justifyContent: 'center',
              width: '90%',
            }}
          >
            <Box
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                gap: '10px',
              }}
              ref={componentRef}
            >
              <h3 style={{ textAlign: 'center' }}>
                Bobinas de papel
              </h3>

              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Cliente: <p style={{ fontWeight: 400 }}>María paz</p>{' '}
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Unidades: <p style={{ fontWeight: 400 }}>385</p>
              </span>
              <span
                style={{
                  display: 'flex',
                  fontWeight: 500,
                  gap: '5px',
                }}
              >
                Dirección de retiro:
                <p style={{ fontWeight: 400 }}>
                  Calle 1, La paz, Bolivia
                </p>
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Dirección de entrega:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {' '}
                  Calle 365, La paz, Bolivia
                </p>
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Fecha de entrega y retiro:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {' '}
                  23/02/2023 - 25/02/23
                </p>
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Fecha de pago:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {' '}
                  23/02/2023
                </p>
              </span>
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 500,
                }}
              >
                Conductor:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {' '}
                  Luis Alvarez
                </p>
              </span>
              {/* <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Calificación del cliente:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  5 estrellas
                </p>
              </span> */}
      {/* <span
                                style={{
                                    display: "flex",
                                    gap: "5px",
                                    fontWeight: 500,
                                }}
                            >
                                Reseña:
                                <p
                                    style={{
                                        fontWeight: 400,
                                    }}
                                >
                                    "Luis cuidó la mercadería, ha sido muy cordial y la entrega
                                    fue muy rápida"
                                </p>
                            </span> */}
      {/* <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'right',
                  marginLeft: '150px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    gap: '5px',
                    fontWeight: 500,
                  }}
                >
                  Valor del envío: $12.000
                </span>
                <span
                  style={{
                    display: 'flex',
                    gap: '5px',
                    fontWeight: 400,
                  }}
                >
                  Decuento 20% por comisión: -$2.400
                </span>
                <span
                  style={{
                    display: 'flex',
                    gap: '5px',
                    fontWeight: 500,
                    color: Colors.primary.main,
                  }}
                >
                  Valor final: 9.600
                </span>
              </Box>
            </Box>
          </Box>

          <Typography
            id="modal-modal-description"
            style={{
              color: Colors.cuaternary.main,
              cursor: 'pointer',
            }}
            onClick={() => generatePdf()}
          >
            Ver factura
          </Typography> */}

      {/* <Button variant="contained" style={{ marginBottom: "10px" }}>
                        Efectuar pago al conductor
                    </Button> */}
      {/* //   </Box> */}
      {/* // </Modal> */}
    </>
  );
};

export default ConductorAsignadoCard;
