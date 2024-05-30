import { Box } from '@mui/material'
import React from 'react'

const ResponsiveImageBox = ({w = "100%", h="100%", url}) => {
  return (
    <Box width={w}  height={h} style={{background: `url(${url})`, borderRadius:"5px", backgroundSize: "cover"}}></Box>
)
}

export default ResponsiveImageBox