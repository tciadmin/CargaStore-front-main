import {
  Box,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const InputForm = ({value="",setter,label, type = "text",cambiar = false, select = [], money=false, sizeH = "50px",inputW = "100%", marginB = 5, marginT = 0, sizeXL = false, readOnly = false}) => {  
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      mb={marginB}
      mt={marginT}
      width={inputW}
      justifyContent={"flex-start"}
    >
      <label
        style={{ color: "#475367", fontWeight: 500, marginBottom: 2 }}
        htmlFor={"input-" + label}
      >
        {label}
      </label>

      {type == "select" ? (
        <Select
          labelId={"select-label-" + label}
          id={"input-" + label}
          value={label}
          sx={{ backgroundColor: "white" }}
          label=""
        >
          {select.length > 0 ? (
            select.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      ) : (
        <OutlinedInput
        
          readOnly= {readOnly}
          value={value}
          id={"input-" + label}
          type={type}
          onChange={(e) => setter(e.target.value)}
          startAdornment={
            money && <InputAdornment position="start">$</InputAdornment>
          }
          endAdornment={
            cambiar && <Typography color="primary">Cambiar</Typography>
          }
          defaultValue=""
          sx={{
            backgroundColor: "white",
            height: sizeH,
            alignItems: sizeXL ? "flex-start" : "center",
          }}
        />
      )}
    </Box>
  );
};

export default InputForm;
