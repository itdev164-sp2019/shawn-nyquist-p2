import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"




const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
      marginBottom: `1.80rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.85rem 0.5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="HomeLink">
    <Link 
      to="/" 
      style={{ 
        margin: `0 auto`,
        color: `white`, 
        textDecoration: `none`, 
        
      }}
    >
      Home
    </Link>
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
