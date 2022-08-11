import React from "react";
import PropTypes, { func } from 'prop-types'

function Button(props) {
console.log(props.theme)
const theme = props.theme
  return (
    <button
      style={{ 
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff' 
       }}
      onClick={props.onClick}>
       {props.children}
    </button>
  )
}

export default Button

Button.PropTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}