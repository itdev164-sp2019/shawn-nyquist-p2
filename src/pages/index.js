import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from 'styled-components'
import { Button as Base } from 'rebass'
import "./styles.css"


const IndexPage = () => (
  <Layout>
    <div className="ButtonGroup">
      <button><Link to="/random-select">Pick A Beer For Me!</Link></button>
      <button><Link to="/beer-list">Show Me All Beers!</Link></button>
      <button><Link to="/select">Help Me Pick A Beer!</Link></button>  
    </div>
    <div>
      
    
    </div>
  </Layout>
)

export default IndexPage
