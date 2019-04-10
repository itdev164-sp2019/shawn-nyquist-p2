import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import beerList from '../components/beerList'

const listItems = beerList.map((beer) => <li key={beer.name}>{beer.name}</li>);

const FullBeerListPage = () => (
  <Layout>
    <p1>List of all beers!</p1>
    <div>
    
    </div>
  </Layout>
)

export default FullBeerListPage