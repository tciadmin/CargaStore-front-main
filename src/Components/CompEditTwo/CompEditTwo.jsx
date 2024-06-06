import {
  InputAdornment,
  Button,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material"
import Avatar from "../../assets/Avatar/Avatar.png"

const CompEditTwo = () => {
  return (
    <Box>
      <Stack style={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            top: "20px", // Ajusta este valor para mover la imagen hacia arriba o hacia abajo
            left: "44%",
            transform: "translateX(-50%)",
            height: "100px",
            width: "100px",
          }}
          src={Avatar}
        />

        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            gap: 1,
            marginTop: "150px",
            marginLeft: "-160px",
          }}
        >
          <Stack
            sx={{
              width: "400px",
              gap: 1.1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                marginBottom: "-12px",
                marginLeft: "-1.5px",
              }}
            >
              Nombre de la empresa
            </Typography>
            <TextField
              size="small"
              sx={{
                borderRadius: "4px",
                width: "450px",
                fontSize: "8px",
                "& .MuiInputBase-root": {
                  height: "34px",
                },
              }}
            ></TextField>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                marginBottom: "-12px",
                marginLeft: "-1.5px",
              }}
            >
              RUC
            </Typography>
            <TextField
              size="small"
              sx={{
                borderRadius: "4px",
                width: "450px",
                fontSize: "8px",
                "& .MuiInputBase-root": {
                  height: "34px",
                },
              }}
            ></TextField>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                marginBottom: "-12px",
                marginLeft: "-1.5px",
              }}
            >
              Dirección
            </Typography>
            <TextField
              size="small"
              sx={{
                borderRadius: "4px",
                width: "450px",
                fontSize: "8px",
                "& .MuiInputBase-root": {
                  height: "34px",
                },
              }}
            ></TextField>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                marginBottom: "-12px",
                marginLeft: "-1.5px",
              }}
            >
              País
            </Typography>
            <TextField
              size="small"
              sx={{
                borderRadius: "4px",
                width: "450px",
                fontSize: "8px",
                "& .MuiInputBase-root": {
                  height: "34px",
                },
              }}
            ></TextField>

            <Button
              sx={{
                width: "110px",
                height: "32px",
                mt: 2,
                borderRadius: "4px",
                padding: "8px 12px ",
                marginLeft: "170px",
                marginTop: "5px",
              }}
              variant="outlined"
            >
              <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                Editar datos
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "450px",
            border: "1px solid",
            color: "#D0D5DD",
            marginLeft: "180px",
            marginTop: "25px",
          }}
        ></Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "-9px",
              marginLeft: "180px",
              marginTop: "25px",
            }}
          >
            Contraseña
          </Typography>
          <Box sx={{ marginLeft: "180px" }}>
            <TextField
              size="small"
              sx={{
                borderRadius: "4px",
                width: "450px",
                fontSize: "8px",
                "& .MuiInputBase-root": {
                  height: "34px",
                  marginTop: "10px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        fontSize: "12px",
                        border: "none",
                        marginLeft: "20rem",
                        fontWeight: 600,
                      }}
                      variant="text"
                    >
                      Cambiar
                    </Button>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CompEditTwo
