import React from 'react'
import "../styles/Image.css"
const Image = ({value,title}) => {
  return (
    <img className='image' src={value}  alt = {title} />
  )
}

export default Image