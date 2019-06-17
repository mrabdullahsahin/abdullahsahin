import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">Home</Link>
      <Link to="/yearlygoal">Yearly Goal</Link>
      <Link to="/openstartup">Open Startup</Link>
      <Link to="/booklist">Book List</Link>
      <Link to="/about">About</Link>
      <Link to="Contact">Contact</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
