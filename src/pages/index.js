import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import { graphql } from "gatsby";
import ContactOne from "../components/contact/ContactOne";
import Helmet from "../components/common/Helmet";
import Layout from "../components/Layout";
import AboutMe from "../components/tab/AboutMe";
import PortfolioSection from "../components/portfolio/PortfolioSection";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    title: "Hello, I’m  Carolyn <br/><span>UX Researcher and Strategist.</span>",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const PortfolioLanding = ({ data }) => {
  const fluid = data.getImage.img.fluid;
  const caseStudies = data.getCaseStudies.nodes;
  const background = data.getBackgroundImage.img.fluid
  const about = data.getAboutMe.nodes[0].data.description;

  let title = "About Me";

  return (
    <div>
      <Helmet pageTitle="Carolyn's Portfolio" />
      <Layout landing>
        {/* Start Slider Area   */}
        <div id="home" className="fix">
          <div className="slider-wrapper">
            {/* Start Single Slide */}
            {SlideList.map((value, index) => (
              <BackgroundImage fluid={background}
                className="bg-image-fade slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1
                            className="title"
                            dangerouslySetInnerHTML={{ __html: value.title }}
                          ></h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundImage>
            ))}
            {/* End Single Slide */}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div id="about" className="fix">
          <div className="about-area ptb--120  bg_color--1">
            <div className="about-wrapper">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-5">
                    <div className="thumbnail">
                      <Image
                        className="w-100"
                        fluid={fluid}
                        alt="About Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about-inner inner">
                      <div className="section-title">
                        <h2 className="title">{title}</h2>
                        <p className="description">{about}</p>
                      </div>
                      <div className="row mt--30">
                        <AboutMe tabStyle="tab-style--1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End About Area */}

        {/* Start Portfolio Area */}
        <PortfolioSection caseStudies={caseStudies}/>
        {/* End Portfolio Area */}

        {/* Start COntact Area */}
        <div id="contact" className="fix">
          <div className="rn-contact-area ptb--120 bg_color--1">
            <ContactOne />
          </div>
        </div>
        {/* End COntact Area */}
      </Layout>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export const query = graphql`
  {
    getImage: file(relativePath: { eq: "images/linkedin.png" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    getBackgroundImage: file(relativePath: { eq: "images/rainbow-background.jpg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    getCaseStudies: allAirtable(filter: { table: { eq: "Case Studies" } }) {
      nodes {
        id
        data {
          slug
          title
          description
          url
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    getAboutMe: allAirtable(filter: { table: { eq: "About" } }) {
      nodes {
        id
        data {
          description
        }
      }
    }
  }
`;

export default PortfolioLanding;
