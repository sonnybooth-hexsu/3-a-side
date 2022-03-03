import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// eslint-disable-next-line no-unused-vars
import styles from "../styles/global.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="bg-primary p-4 text-white text-center">
      <h1 className="mb-0">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
