import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Colors } from '../../Utils/Colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

export const CompMarketplacePostular = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const images = [
    { src: '/public/imgMarketplace/FirstImgBobina.jpg' },
    { src: '/public/imgMarketplace/SecondImgBobina.jpg' },
    { src: '/public/imgMarketplace/ThirdImgBobina.jpg' },
  ];

  return (
    <Box
      style={{
        display: 'flex',
        padding: 30,
        gap: '30px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Box style={{ display: 'flex', width: '40%', height: '100%' }}>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {images.map((image, i) => (
            <Box key={i}>
              <img style={{ height: '150px' }} src={image.src} />
            </Box>
          ))}
        </Box>
        <Box>
          <img
            style={{ height: '450px' }}
            src="/public/imgMarketplace/BigImgBobina.jpg"
          />
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          height: '100%',
          justifyContent: 'center',
          gap: '15px',
          textAlign: 'justify',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span
            style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
          >
            Valor ofertado: <p style={{ fontWeight: 400 }}>$12.000</p>
          </span>
          <h1>Bobinas de papel</h1>
        </Box>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Box style={{ display: 'flex', gap: '5px' }}>
            <img src="/public/imgMarketplace/List.svg" />
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Producto:{' '}
              <p style={{ fontWeight: 400 }}>Bobinas de papel</p>
            </span>
          </Box>

          <Box style={{ display: 'flex', gap: '5px' }}>
            <img src="/public/imgMarketplace/List.svg" />
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Cantidad de unidades:{' '}
              <p style={{ fontWeight: 400 }}>147</p>
            </span>
          </Box>

          <Box style={{ display: 'flex', gap: '5px' }}>
            <img src="/public/imgMarketplace/List.svg" />
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Volumen: <p style={{ fontWeight: 400 }}>1 tonelada</p>
            </span>
          </Box>

          <Box style={{ display: 'flex', gap: '5px' }}>
            <img src="/public/imgMarketplace/List.svg" />
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Tipo de carga: <p style={{ fontWeight: 400 }}>Seca</p>
            </span>
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <h3>Información adicional</h3>
          <Box>
            <span>
              Es un envío internacional de bobinas de papel que
              despacha El mundo mágico en Perú hacia Colombia para El
              mundo de papel. La carga no posee contenido peligroso
              pero es necesario embalarlas con film protector especial
              para poder preservar el contenido de manera intacta.
            </span>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          height: '100%',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid',
            borderColor: Colors.terciary.main,
            padding: '10px',
            borderRadius: '10px',
            gap: '10px',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <h3>Información del cliente</h3>
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Nombre: <p style={{ fontWeight: 400 }}>Carlos Pérez</p>
            </span>
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Ciudad de origen: <p>Quito, Perú</p>
            </span>
            <span
              style={{ display: 'flex', gap: '5px', fontWeight: 600 }}
            >
              Empresa:{' '}
              <p style={{ fontWeight: 400 }}>
                Distribuidora de papel s.a
              </p>
            </span>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <h3>Información del envío</h3>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Fecha de retiro:{' '}
                <p style={{ fontWeight: 400 }}>12/03/24</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Hora de retiro:{' '}
                <p style={{ fontWeight: 400 }}>12:00hs</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Dirección de retiro:{' '}
                <p style={{ fontWeight: 400 }}>
                  Calle 12, Quito, Perú
                </p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Teléfono: <p style={{ fontWeight: 400 }}>123456</p>
              </span>
            </Box>

            <img
              style={{ width: '300px' }}
              src="/public/imgRegister/RegDivider.svg"
            />
            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Fecha de retiro:{' '}
                <p style={{ fontWeight: 400 }}>21/03/24</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Hora de retiro:{' '}
                <p style={{ fontWeight: 400 }}>12:00hs</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Dirección de retiro:{' '}
                <p style={{ fontWeight: 400 }}>Calle 21, Colombia</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Teléfono: <p style={{ fontWeight: 400 }}>123456</p>
              </span>
            </Box>

            <Box style={{ display: 'flex', gap: '5px' }}>
              <img src="/public/imgMarketplace/List.svg" />
              <span
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontWeight: 600,
                }}
              >
                Destinatario:{' '}
                <p style={{ fontWeight: 400 }}>El mundo del papel</p>
              </span>
            </Box>
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
        <Box
          sx={style}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
              width: '100%',
            }}
          >
            <Box
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'right',
                cursor: 'pointer',
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

            <img src="/public/imgMarketplace/PostulationSent.jpg" />

            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Postulación enviada
            </Typography>

            <Typography
              id="modal-modal-description"
              style={{ marginBottom: '30px' }}
            >
              Si te asignan el envío recibirás una notificación
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
