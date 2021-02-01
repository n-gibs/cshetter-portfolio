import React from "react";
import { graphql, Link } from "gatsby";
import PageHelmet from "../components/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components";
import Layout from "../components/Layout";
import BackgroundImage from "gatsby-background-image";

const Template = ({ data }) => {
  const { title, image } = data.study.nodes[0].data;
  const {body} = data.content;

  return (
    <Wrapper className="section">
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
                    {/* <p className="subtitle">{description}</p> */}
                    <MDXRenderer>{body}</MDXRenderer>

                    {/* <div className="portfolio-view-list d-flex flex-wrap">

                  </div> */}

                    {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">

                  </div> */}
                  </div>
                  <div className="inner">
                    <div className="portfolio-btn">
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
    </Wrapper>
  );
};

export const query = graphql`
  query GetSingleCaseStudy($slug: String) {
    study: allAirtable(
      filter: { table: { eq: "Case Studies" }, data: { slug: { eq: $slug } } }
    ) {
      nodes {
        data {
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
    content: mdx(frontmatter: {slug: {eq: $slug}}) {
      body
    }
  }
`;

const Wrapper = styled.section`

  .portfolio-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portfolio-details {
    .inner {
        @media #{$lg-layout} {
            padding: 0 100px;
        }
        @media #{$md-layout} {
            padding: 0 50px;
        }
        @media #{$sm-layout} {
            padding: 0 30px;
        }
        @media #{$large-mobile} {
            padding: 0px;
        }
        li {
          font-size: 18px;
        }
        padding: 0 210px;
        h2 {
            line-height: 50px;
            display: block;
            margin-bottom: 0;
            padding-top: 25px;
            padding-bottom: 25px;
        }
        p {
            font-size: 18px;
            line-height: 30px;
            color: rgba(29, 29, 36, 0.75);
            margin-bottom: 30px;

            @media #{$lg-layout} {
                margin-bottom: 22px;
            }

            @media #{$md-layout} {
                margin-bottom: 22px;
            }

            @media #{$sm-layout} {
                margin-bottom: 22px;
            }
            &.subtitle {
                color: $heading-color;
                font-size: 23px;
                line-height: 44px;
                margin-top: 28px;

                @media #{$lg-layout} {
                    font-size: 20px;
                    line-height: 38px;
                    margin-top: 24px;
                }
                @media #{$md-layout} {
                    font-size: 18px;
                    line-height: 38px;
                    margin-top: 24px;
                }
                @media #{$sm-layout} {
                    font-size: 18px;
                    line-height: 38px;
                    margin-top: 24px;
                }
            }
        }
        .portfolio-view-list {
            margin: 0 -40px;
            .port-view {
                margin: 0 40px;
                span {
                    font-size: 16px;
                    color: rgba(29, 29, 36, 0.75);
                    display: block;
                    margin-bottom: 10px;
                    font-weight: 500;
                }
                h4 {
                    font-size: 22px;
                    font-weight: 500;
                }
            }
        }
    }
}


  .rn-page-title {
    h2 {
        &.title {

            font-size: 72px;
            @media #{$lg-layout} {
                font-size: 56px;
            }
            @media #{$md-layout} {
                font-size: 50px;
            }
            @media #{$sm-layout} {
                font-size: 40px;
                line-height: 59px;
            }
            color: $theme-color;
        }
    }
    p {
        font-size: 22px;
        line-height: 27px;
        color: #c6c9d8;
    }
}
`;
export default Template;
