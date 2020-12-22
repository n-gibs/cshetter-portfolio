import React, { useState } from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "images/about/about-6.jpg" }) {
      img: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactOne = () => {
  const {
    file: {
      img: { fluid },
    },
  } = useStaticQuery(query);

  const [rnName, setRnName] = useState("")
  const [rnEmail, setRnEmail] = useState("")
  const [rnSubject, setRnSubject] = useState("")
  const [rnMessage, setRnMessage] = useState("")
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Hire Me.</h2>
              <p className="description">
                I am available for freelance work. Connect with me via phone:{" "}
                <a href="tel:+8801923088574">01923 088574</a> or email:
                <a href="mailto:admin@example.com"> admin@example.com</a>{" "}
              </p>
            </div>
            <div className="form-wrapper">
              <form>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={rnName}
                    onChange={e => {
                      setRnName(e.target.value)
                    }}
                    placeholder="Your Name *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={rnEmail}
                    onChange={e => {
                      setRnEmail(e.target.value)
                    }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={rnSubject}
                    onChange={e => {
                      setRnSubject(e.target.value)
                    }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={rnMessage}
                    onChange={e => {
                      setRnMessage(e.target.value)
                    }}
                    placeholder="Your Message"
                  />
                </label>
                <button
                  className="rn-button-style--2 btn-solid"
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
  )
}
export default ContactOne
