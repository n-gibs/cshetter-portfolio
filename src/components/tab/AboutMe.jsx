import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const AboutMe = ({ tabStyle }) => {
  let tab1 = "Main skills",
    // tab2 = "Presentations",
    tab3 = "Experience",
    tab4 = "Education"

  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  {/* <Tab>{tab2}</Tab> */}
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          User Experience Research
                        </a>
                        Making sure the designs work for the users.
                      </li>
                      <li>
                        <a href="/service">
                          UX Strategy
                        </a>
                        Applying what is learned from our research
                      </li>
                      <li>
                        <a href="/service">
                          Service Design
                        </a>
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
                        <a href="/service">
                          UX Researcher (freelance)<span> - Queer Bomb</span>
                        </a>{" "}
                        2020
                      </li>
                      <li>
                        <a href="/service">
                          UX Strategist (Freelance)<span> - Queer Bomb</span>
                        </a>{" "}
                        2020
                      </li>
                      <li>
                        <a href="/service">
                          Program Manager<span> - College Forward </span>
                        </a>{" "}
                        2018-2019
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          Certification in User Experience
                          <span> - Austin Community College</span>
                        </a>{" "}
                        2021
                      </li>
                      <li>
                        <a href="/service">
                          BS in Chemistry
                          <span> - Allegheny College</span>
                        </a>{" "}
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
    </div>
  )
}

export default AboutMe
