import React, { useState } from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const query = graphql`
  {
    file(relativePath: { eq: "images/contact-pic.jpg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ContactOne = () => {
  const {
    file: {
      img: { fluid },
    },
  } = useStaticQuery(query);

  const [rnName, setRnName] = useState("");
  const [rnEmail, setRnEmail] = useState("");
  const [rnSubject, setRnSubject] = useState("");
  const [rnMessage, setRnMessage] = useState("");
  return (
    <Wrapper className="section">
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Me</h2>
                <p className="description">
                  Send a message if you want to connect.
                </p>
              </div>
              <div className="form-wrapper">
                <form action="https://formspree.io/f/mzbkgkdk" method="POST">
                  <div className="form-group">
                    <label htmlFor="item01">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="item01"
                        value={rnName}
                        onChange={e => {
                          setRnName(e.target.value);
                        }}
                        placeholder="Your Name *"
                      />
                    </label>

                    <label htmlFor="item02">
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        id="item02"
                        value={rnEmail}
                        onChange={e => {
                          setRnEmail(e.target.value);
                        }}
                        placeholder="Your email *"
                      />
                    </label>

                    <label htmlFor="item03">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        id="item03"
                        value={rnSubject}
                        onChange={e => {
                          setRnSubject(e.target.value);
                        }}
                        placeholder="Write a Subject"
                      />
                    </label>
                    <label htmlFor="item04">
                      <textarea
                        className="form-control"
                        type="text"
                        id="item04"
                        name="message"
                        value={rnMessage}
                        onChange={e => {
                          setRnMessage(e.target.value);
                        }}
                        placeholder="Your Message"
                      />
                    </label>
                  </div>
                  <button
                    className="rn-button-style--2 btn-solid submit-btn btn"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <Image fluid={fluid} alt="about-me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-form--1 {
    label {
      display: block;
      margin-bottom: 0;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      padding: 0 20px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      transition: all 0.3s ease;
      height: 50px;
      line-height: 46px;
      margin-bottom: 20px;
      outline: none;
      color: #1f1f25;
      font-size: 15px;
      letter-spacing: 0.1px;
      &:focus {
        border-color: $theme-color;
      }
    }
    textarea {
      height: 120px;
    }
  }
`;

export default ContactOne;
