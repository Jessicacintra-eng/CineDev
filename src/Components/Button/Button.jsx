import React from 'react'

const Button = ({text, link}) => {
  return (
    <button onClick={link}>{text}</button>
  )
}

export default Button