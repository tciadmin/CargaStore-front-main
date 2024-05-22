import React from 'react'

const CircleStep = ({active = false}) => {
  return (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1043_1388)">
<circle cx="16" cy="16" r="15" fill="transparent" stroke={active ? "#007C52": "#8C94A6"} stroke-width="2"/>
<circle cx="16" cy="16" r="5.5" fill={active ? "#007C52": "#8C94A6"}/>
</g>
<defs>
<clipPath id="clip0_1043_1388">
<rect width="32" height="32" fill="transparent"/>
</clipPath>
</defs>
</svg>
  )
}

export default CircleStep