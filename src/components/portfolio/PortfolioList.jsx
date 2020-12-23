import { Link } from "gatsby"
import Image from 'gatsby-image'
import React from "react"

const PortfolioList = ({ caseStudies, column, styevariation, item }) => {
  return (
    <>
      {caseStudies.map((study) => (
        <div className={`${column}`} key={study.id}>
          <div className={`portfolio ${styevariation}`}>
            <div className="thumbnail-inner">
              <div className={`thumbnail`}>
              <Image fluid={study.data.image.localFiles[0].childImageSharp.fluid}/>
              </div>
              <div className={`bg-blr-image`}>
              <Image fluid={study.data.image.localFiles[0].childImageSharp.fluid}/>
              </div>
            </div>
            <div className="content">
              <div className="inner">
                <p>Case Study</p>
                <h4>
                  <Link to={study.data.slug}>{study.data.title}</Link>
                </h4>
                <div className="portfolio-button">
                  <Link className="rn-btn" to={study.data.slug}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PortfolioList
