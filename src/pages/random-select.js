import React from "react"
import { Link } from "gatsby"

import beerList from "../components/BeerList/beerList"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const array = beerList;

const RandomBeerPage = () => (
  <Layout>
  <div>
    <h4>We will randomly pick a beer for you!</h4>
    <h4>{beerList[1].name}</h4>
  </div>  
  </Layout>
)

export default RandomBeerPage