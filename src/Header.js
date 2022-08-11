import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button theme={props.theme} onClick ={props.onToggleTheme}>
        Mudar Tema
      </Button>
      <hr />
    </>
  )
}

export default Header

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  title: "Zeca's Blog"
}