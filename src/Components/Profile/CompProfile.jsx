import { Stack, Button, Typography, Box, Rating, Card } from "@mui/material"
import CompNav from "../Nav/CompNav" // Importa el componente CompNav
import Profile from "../../assets/Profile/Profile.png"
import Profile4 from "../../assets/Profile/Profile4.png"
import { useState } from "react"

export const CompProfile = () => {
  const [value, setValue] = useState(2)

  return (
    <Stack>
      <CompNav /> {/* Llama al componente CompNav */}
      <Box
        sx={{
          width: "1263px",
          border: "1px solid",
          color: "#E4E7EC",
          height: "100%",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Stack
          sx={{
            //border: " 1px solid",
            width: "500px",
            marginLeft: "420px",
            marginTop: "40px",
          }}
        >
          <img
            style={{ marginLeft: "-4px", width: "490px" }}
            src={Profile}
          />
          <Typography
            sx={{
              fontweight: 500,
              fontSize: "12px",
              color: " black",
              marginTop: "40px",
            }}
          >
            Deja tu reseña
          </Typography>
          <Card
            sx={{ width: "488px", height: "115px", borderRadius: "8px" }}
          ></Card>

          <Typography sx={{ color: "white" }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#007C52",
                marginLeft: "393px",
                fontWeight: 600,
                marginTop: "10px",
              }}
              variant="contained"
            >
              Publicar
            </Button>
          </Typography>
          <Rating
            sx={{ marginTop: "-33px" }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          />
          <img
            style={{ marginLeft: "1px", marginTop: "30px" }}
            src={Profile4}
          />
        </Stack>
      </Box>
    </Stack>
  )
}
