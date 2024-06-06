import { Stack, Button, Box } from "@mui/material"
import CompNav from "../Nav/CompNav" // Importa el componente CompNav
import Publication from "../../assets/Publication/Publication.png"
import Publication2 from "../../assets/Publication/Publication2.png"
import Publication3 from "../../assets/Publication/Publication3.png"

export const CompPublication = () => {
  return (
    <Stack>
      <CompNav /> {/* Llama al componente CompNav */}
      <Box
        sx={{
          width: "1263px",
          border: "1px solid",
          color: "#E4E7EC",
          height: "522px",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Stack
          sx={{
            //border: " 1px solid",
            width: "1190px",
            marginLeft: "40px",
            marginTop: "70px",
          }}
        >
          <img
            style={{ width: "508px", height: "422px" }}
            src={Publication}
          />
          <img
            style={{
              width: "290px",
              height: "",
              marginLeft: "565px",
              marginTop: "-425px",
            }}
            src={Publication2}
          />
          <img
            style={{
              width: "300px",
              height: "",
              marginLeft: "899px",
              marginTop: "-290px",
            }}
            src={Publication3}
          />
          <Stack>
            <Button
              sx={{
                width: "139px",
                height: "34px",
                marginLeft: "640px",
                marginTop: "-20px",
                //fontWeight: 600,
              }}
              variant="outlined"
            >
              Duplicar envío
            </Button>
            <Button
              sx={{
                width: "130px",
                height: "34px",
                marginLeft: "1060px",
                marginTop: "-409px",
              }}
            >
              Editar envio
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
