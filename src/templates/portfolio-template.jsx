import React from "react";
import { graphql, Link } from "gatsby";
import PageHelmet from "../components/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import BackgroundImage from "gatsby-background-image";

const Template = ({ data }) => {
  const { content, title, description, image } = data.study.nodes[0].data;

  return (
    <>
      <PageHelmet pageTitle={title} />

      {/* <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      /> */}
      <Layout>
        {/* Start Breadcrump Area         data-black-overlay="7"
         */}
        <BackgroundImage
          fluid={image.localFiles[0].childImageSharp.fluid}
          className="bg-image-fade rn-page-title-area pt--120 pb--190 bg_image"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">{title}</h2>
                  {/* <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.{" "}
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    {/* <h2>{title}</h2> */}
                    <p className="subtitle">{description}</p>
                    <ReactMarkdown source={content} />

                    {/* <div className="portfolio-view-list d-flex flex-wrap">

                  </div> */}

                    {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">

                  </div> */}
                  </div>
                  <div className="inner">
                    <div className="portfolio-button">
                      <Link className="rn-btn" to="/#portfolio">
                        Back to Portfolio
                      </Link>
                    </div>

                    {/* <div className="thumb position-relative mb--30">
                    <img
                      src="/assets/images/portfolio/portfolio-big-03.jpg"
                      alt="Portfolio Images"
                    />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="ZOoVOfieAF8"
                      onClose={() => setIsOpen(false)}
                    />
                    <button
                      className="video-popup position-top-center"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div> */}

                    {/* <div className="thumb mb--30">
                    <img
                      src="/assets/images/portfolio/portfolio-big-02.jpg"
                      alt="Portfolio Images"
                    />
                  </div>

                  <div className="thumb">
                    <img
                      src="/assets/images/portfolio/portfolio-big-01.jpg"
                      alt="Portfolio Images"
                    />
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Layout>
    </>
  );
};

export const query = graphql`
  query GetSingleCaseStudy($slug: String) {
    study: allAirtable(
      filter: { table: { eq: "Case Studies" }, data: { slug: { eq: $slug } } }
    ) {
      nodes {
        data {
          content
          description
          title
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
  }
`;

export default Template;
