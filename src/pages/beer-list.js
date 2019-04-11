import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const beerList = [
    {id: 1, name: 'Miller High Life', alcoholContent: 10, price: '$$'},
    {id: 2, name: 'Spotted Cow', alcoholContent: 9, price: '$$'},
    {id: 3, name: 'Coors', alcoholContent: 12, price: '$'},
    {id: 4, name: 'Budweiser', alcoholContent: 16, price: '$'},
    {id: 5, name: 'Bud Light', alcoholContent: 10, price: '$'},
    {id: 6, name: 'Coors Light', alcoholContent: 6, price: '$'},
    {id: 7, name: 'Miller Light', alcoholContent: 5, price: '$'},
    {id: 8, name: 'Heinekin', alcoholContent: 7, price: '$$'},
    {id: 9, name: 'Blue Moon', alcoholContent: 11, price: '$$'},
    {id: 10, name: 'Sprecher', alcoholContent: 12, price: '$$$'},
    {id: 11, name: 'Pale Ale', alcoholContent: 30, price: '$$'},
    {id: 12, name: 'Guiness', alcoholContent: 14, price: '$$&'},
]




const FullBeerListPage = () => (
  <Layout>
    <div>
      <h4>A list of all beers should appear here!</h4>
      <ul>
        {beerList.map(beer => {
          return <li>{beer.name} - Alcohol Content: {beer.alcoholContent}%</li>;
        })}
      </ul>
    </div>
  </Layout>
)

export default FullBeerListPage