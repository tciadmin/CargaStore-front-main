import { Box, Stack } from "@mui/material"
import Avatar1 from "../../assets/Avatar/Avatar1.png"
import Avatar2 from "../../assets/Avatar/Avatar2.png"
import Avatar3 from "../../assets/Avatar/Avatar3.png"
import IconEye from "../../assets/Icons/IconEye.png"
import Frame from "../../assets/Icons/Frame.png"

export const CompPartners = () => {
  return (
    <Box sx={{ backgroundColor: "D0D5DD" }}>
      <Stack
        sx={{
          width: "770px",
          height: "50px",
          border: "1px solid",
          color: "#E4E7EC",
          marginLeft: "100px",
          marginTop: "20px",
        }}
      >
        <img
          style={{
            width: "22px",
            height: "22px",
            marginLeft: "745px",
            marginTop: "15px",
          }}
          src={IconEye}
        />
        <img
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "2px",
            marginTop: "-28px",
          }}
          src={Avatar1}
        />
        <Stack>
          <Stack
            sx={{
              width: "770px",
              height: "50px",
              border: "1px solid",
              color: "#E4E7EC",
              marginLeft: "1px",
              marginTop: "20px",
            }}
          >
            <img
              style={{
                width: "22px",
                height: "22px",
                marginLeft: "745px",
                marginTop: "15px",
              }}
              src={IconEye}
            />
            <img
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "2px",
                marginTop: "-30px",
              }}
              src={Avatar2}
            />
          </Stack>
          <Stack
            sx={{
              width: "770px",
              height: "50px",
              border: "1px solid",
              color: "#E4E7EC",
              marginLeft: "1px",
              marginTop: "18px", // Aquí se cambió el marginTop a "2px"
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                marginLeft: "2px",
                marginTop: "3px",
              }}
              src={Avatar3}
            />
          </Stack>
        </Stack>
        <img
          style={{
            width: "23px",
            height: "23px",
            marginLeft: "746px",
            marginTop: "-35px",
          }}
          src={IconEye}
        />
        <img
          style={{
            width: "63px",
            height: "63px",
            marginLeft: "725px",
            marginTop: "220px",
          }}
          src={Frame}
        />
      </Stack>
    </Box>
  )
}
