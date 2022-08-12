import React, { useContext } from "react";
import PropTypes, { func } from 'prop-types'
import { ThemeContext } from './App'
function Button(props) {
  const theme = useContext(ThemeContext)
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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}