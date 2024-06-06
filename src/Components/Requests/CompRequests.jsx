import { Stack } from "@mui/material"
import Requests from "../../assets/Requests/Requests.png"
import Requests2 from "../../assets/Requests/Requests2.png"
import Frame from "../../assets/Icons/Frame.png"

export const CompRequests = () => {
  return (
    <>
      <Stack
        sx={{
          width: "604px",
          height: "181px",
          //border: "1px solid",
          marginLeft: "200px",
          marginTop: "60px",
        }}
      >
        <img
          style={{ width: "450px", height: "", marginTop: "10px" }}
          src={Requests}
        />
      </Stack>
      <Stack
        sx={{
          width: "604px",
          height: "181px",
          //border: "1px solid",
          marginLeft: "205px",
          marginTop: "60px",
        }}
      >
        <img
          style={{ width: "450px", height: "", marginTop: "-20px" }}
          src={Requests2}
        />
        <Stack>
          <img
            style={{ width: "70px", height: "70px", marginLeft: "620px" }}
            src={Frame}
          />
        </Stack>
      </Stack>
    </>
  )
}
