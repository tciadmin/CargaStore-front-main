import { Button, Stack, TextField, Typography } from "@mui/material"
import Avatar from "../../assets/Avatar/Avatar.png"

export const CompEditThree = () => {
  return (
    <Stack style={{ position: "relative" }}>
      <img
        style={{
          position: "absolute",
          top: "30px", // Ajusta este valor para mover la imagen hacia arriba o hacia abajo
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
          marginTop: "160px",
          marginLeft: "-160px",
        }}
      >
        <Stack
          sx={{
            width: "400px",
            gap: 1.5,
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
            Nombre
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
            Banco
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
            Tipo de cuenta
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
            Número de cuenta
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
              marginTop: "17px",
            }}
            variant="outlined"
          >
            <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
              Editar datos
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
