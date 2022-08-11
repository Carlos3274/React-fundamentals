import React from 'react'
import PropTypes from 'prop-types'


function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.children}</h2>
      <hr />
    </>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  title: "Zeca's Blog"
}