import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const SelectPage = () => (
  <Layout>
    <div className="radioButtons">
      <form id="MoodSelect">
        <div className="radio">
        <h4>Select your Mood:</h4>
          <label>
            <input type="radio" value="happy" checked={true} />
            Happy
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="sad" />
            Sad
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="angry" />
            Angry
          </label>
        </div>
      </form>
      <form id="PriceSelect">
        <div className="radio">
        <h4>How Much Would You Like to Spend?:</h4>
          <label>
            <input type="radio" value="low" checked={true} />
            $ (Low)
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="moderate" />
            $$ (Moderate)
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="expensive" />
            $$$ (Expensive)
          </label>
        </div>
      </form>
      <form id="ColorSelect">
        <div className="radio">
        <h4>Color Preference:</h4>
          <label>
            <input type="radio" value="ipa" checked={true} />
            IPA
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="amber" />
            Amber
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="dark" />
            Dark
          </label>
        </div>
      </form>
    </div>
    
  </Layout>
)

export default SelectPage