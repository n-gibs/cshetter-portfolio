import React from "react"
import { Helmet } from "react-helmet"

const PageHelmet = ({pageTitle}) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} || React Multipurpose Template </title>
        <meta
          name="description"
          content="Trydo – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ."
        />
      </Helmet>
    </>
  )
}

export default PageHelmet
