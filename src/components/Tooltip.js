import React, { useState } from 'react'

const Tooltip = ({text}) => {
    const [showText,setShowText] = useState(false)
  return (
    <div
    className='tooltipText'
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
    >
        {showText && <p>{text}</p>}
        <p>Hover over me to see another tooltip</p>
        <hr />
    </div>
  )
}

export default Tooltip