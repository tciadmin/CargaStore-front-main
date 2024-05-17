import { Box, InputAdornment, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

const InputForm = ({label, type = "text", select = [], money=false}) => {
  return (
<Box display="flex" flexDirection={"column"} mb={5}justifyContent={"flex-start"}  >
    <label style={{color: "#475367", fontWeight: 500, marginBottom: 5}} htmlFor={label}>{label}</label>
   
   {
    type == "select" ?
    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
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
          id={label}
          type={type}
          startAdornment={money && <InputAdornment position="start">$</InputAdornment>}
          defaultValue=""
          sx={{backgroundColor: "white"}}
        />
   }
        </Box>
)
}

export default InputForm