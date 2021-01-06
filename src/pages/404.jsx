import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Layout from "../components/Layout";
import styled from "styled-components";

const error404 = () => {
  return (
    <Wrapper className="section">
      <Layout>
        {/* Start Page Error  */}
        <div className="error-page-inner bg_color--4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">404!</h1>
                  <h3 className="sub-title">Page not found</h3>
                  <span>The page you were looking for could not be found.</span>
                  <div className="error-button">
                    {/* TODO: Check these styles out */}
                    <a className="rn-button-style--2 btn-solid" href="/">
                      Back To Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Error  */}

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
const Wrapper = styled.section`
  .error-page-inner {
    height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    min-height: 700px;
    .inner {
      text-align: center;
      h1 {
        &.title {
          font-size: 180px;
          line-height: 1;
          margin-bottom: 0;
          @media #{$sm-layout} {
            font-size: 107px;
          }
        }
      }
      .sub-title {
        margin-bottom: 0;
        font-weight: 400;
        font-size: 48px;
        color: #ffffff;
        @media #{$sm-layout} {
          font-size: 40px;
        }
      }
      span {
        font-size: 16px;
        margin-top: 10px;
        color: #c6c9d8;
        opacity: 0.75;
        font-weight: 300;
        display: block;
        margin-bottom: 28px;
      }
    }
  }
  .backto-top {
    > div {
      z-index: 999;
      width: 50px;
      height: 50px;
      line-height: 49px;
      border-radius: 50%;
      background-color: #ffffff;
      text-align: center;
      overflow: hidden;
      z-index: 999 !important;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
    svg {
      font-size: 14px !important;
      color: #222222;
      width: 27px;
      height: 27px;
    }
  }
`;
export default error404;
