import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const IndexPage = () => (
  <Layout>
    <div className="App">
      <button><Link to="/random-select">Pick A Beer For Me!</Link></button>
      <button><Link to="/beer-list">Show Me All Beers!</Link></button>
      <button><Link to="/select">Help Me Pick A Beer!</Link></button>  
    </div>  
  </Layout>
)

export default IndexPage
