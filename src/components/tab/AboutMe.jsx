import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

const AboutMe = () => {
  let tab1 = "Skills",
    // tab2 = "Presentations",
    tab3 = "Experience",
    tab4 = "Education";

  return (
    <Wrapper className='section'>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className="tab-style--1">
                  <Tab>{tab1}</Tab>
                  {/* <Tab>{tab2}</Tab> */}
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <div className='item'>User Experience Research</div>
                        Making sure the designs work for the users.
                      </li>
                      <li>
                        <div className='item'>UX Strategy</div>
                        Applying what is learned from our research
                      </li>
                      <li>
                        <div className='item'>Service Design</div>
                        No one like a poorly designed service
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                {/* <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          Queer Bomb Case Study <span>- Austin Community College</span>
                        </a>{" "}
                        2020
                      </li>
                      <li>
                        <a href="/service">
                          CSS Design Awards <span>- Winner</span>
                        </a>{" "}
                        2017 - 2018
                      </li>
                      <li>
                        <a href="/service">
                          Design nominees <span>- site of the day</span>
                        </a>{" "}
                        2013- 2014
                      </li>
                    </ul>
                  </div>
                </TabPanel> */}

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <div className='item'>
                          UX Researcher (Freelance)<span> - Queer Bomb</span>
                        </div>{" "}
                        2020
                      </li>
                      <li>
                        <div className='item'>
                          UX Strategist (Freelance)<span> - Queer Bomb</span>
                        </div>{" "}
                        2020
                      </li>
                      <li>
                        <div className='item'>
                          Program Manager<span> - College Forward </span>
                        </div>{" "}
                        2018-2019
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <div className='item'>
                          Certification in User Experience
                          <span> - Austin Community College</span>
                        </div>{" "}
                        2021
                      </li>
                      <li>
                        <div className='item'>
                          BS in Chemistry
                          <span> - Allegheny College</span>
                        </div>{" "}
                        2014
                      </li>
                      {/* <li>
                        <a href="/service">
                          Graphic Designer
                          <span> - ABC Institute, Los Angeles, CA</span>
                        </a>{" "}
                        2007
                      </li> */}
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul {
    &.tab-style--1 {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
      margin: 0 -20px;
      flex-wrap: wrap;

      @media #{$lg-layout} {
        margin: 0 -10px;
      }

      li {
        /* flex-grow: 1; */
        position: relative;
        margin: 0 20px;
        display: inline-block;
        padding-bottom: 4px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        outline: none;

        @media #{$lg-layout} {
          margin: 0 10px;
          font-size: 17px;
        }

        @media #{$sm-layout} {
          margin-bottom: 10px;
        }

        &::before {
          position: absolute;
          content: "";
          width: 30px;
          background: rgba(0, 0, 0, 0.2);
          transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          height: 2px;
          bottom: 0;
        }
        &.react-tabs__tab--selected {
          color: $theme-color;
          &::before {
            width: 100%;
            background: currentColor;
          }
        }
      }
    }
  }

  .single-tab-content {
    padding-top: 20px;
    p {
      font-weight: 300;
      color: #717173;
      font-size: 18px;
      line-height: 30px;
    }
  }

  .single-tab-content {
    ul {
      &.list-style--1 {
        li {
          margin-bottom: 10px;
        }
      }
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        color: #7e7e7e;
        font-size: 16px;
        line-height: inherit;
        margin-bottom: 15px;
        font-weight: 300;
        .item {
          font-weight: 500;
          display: block;
          color: #717173;
          span {
            font-weight: 300;
          }
        }
      }
    }
  }
`;

export default AboutMe;
