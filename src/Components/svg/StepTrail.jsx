import React from 'react'

const StepTrail = ({active = false, vertical = false}) => {
  return (
<svg style={{rotate: vertical ? "90deg" : "0deg"}} width="99" height="32" viewBox="0 0 99 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="7.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="13.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="19.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="25.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="31.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="37.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="43.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="49.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="55.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="61.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="67.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="73.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="79.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="85.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="91.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
<circle cx="97.5" cy="16" r="1.5" fill={active ? "#007C52":"#8C94A6"}/>
</svg>  )
}

export default StepTrail