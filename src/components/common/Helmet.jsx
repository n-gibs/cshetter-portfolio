import React from "react"
import { Helmet } from "react-helmet"

const PageHelmet = ({pageTitle}) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} </title>
        <meta
          name="description"
          content="Carolyn Shetter is a User Experience Researcher and Stragegist. This is where she showcases her work."
        />
      </Helmet>
    </>
  )
}

export default PageHelmet
