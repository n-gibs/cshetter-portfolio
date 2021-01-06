import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

// const SocialShare = [
//   { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
//   { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
//   { Social: <FaInstagram />, link: "https://www.instagram.com/" },
//   { Social: <FaTwitter />, link: "https://twitter.com/" },
// ];

// const query = graphql`
//   {
//     file(relativePath: { eq: "images/logo/logo.png" }) {
//       img: childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const FooterTwo = () => {
  // const {
  //     file: {
  //       img: { fluid },
  //     },
  //   } = useStaticQuery(query)

  return (
    <Wrapper classname="section">
      <div
        className="footer-style-2 ptb--30 bg_image bg_image--1"
        data-black-overlay="6"
      >
        <div className="wrapper plr--50 plr_sm--20">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner">
                <div className="logo text-center text-sm-left mb_sm--20"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner text-center">
                {/* <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="inner text-lg-center text-center mt_md--20 mt_sm--20">
                <div className="text">
                  <p>Copyright © {(new Date().getFullYear())} Carolyn Shetter. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer-style-2 {
    p {
      color: #c6c9d8;
      font-size: 14px;
      opacity: 0.75;
    }
  }
`;
export default FooterTwo;
