import { Box, InputAdornment, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

const InputForm = ({label, type = "text", select = [], money=false, sizeH = "50px",inputW = "100%", marginB = 5, marginT = 0, sizeXL = false, readOnly = false}) => {

  return (
<Box display="flex" flexDirection={"column"} mb={marginB} mt={marginT} width={inputW} justifyContent={"flex-start"}  >
    <label style={{color: "#475367", fontWeight: 500, marginBottom: 2}} htmlFor={"input-"+label}>{label}</label>
   
   {
    type == "select" ?
    <Select
          labelId="demo-simple-select-helper-label"
          id={"input-"+label}
          value={label}
          sx={{backgroundColor: "white"}}
    
          label=""
        >
          {select.length >0 ? 
          select.map((item)=>
        <MenuItem value={item}>
          {item}
      </MenuItem>
        ):
        <MenuItem value="">
        <em>None</em>
      </MenuItem>}
          
        </Select>
        :
        <OutlinedInput
          readOnly= {readOnly}
      
          id={"input-"+label}
          type={type}
          startAdornment={money && <InputAdornment position="start">$</InputAdornment>}
          defaultValue=""
          
          sx={{backgroundColor: "white", height: sizeH, alignItems: sizeXL ?  "flex-start" : "center"}}
        />
   }
        </Box>
)
}

export default InputForm