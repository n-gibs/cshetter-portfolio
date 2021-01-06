import { Link } from "gatsby";
import React, { Component } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";

class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
  }

  // componentDidMount() {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("load", function () {
  //       console.log("All assets are loaded");
  //     });
  //   }
  // }

  menuTrigger() {
    if (typeof document !== "undefined") {
      document.querySelector(".header-wrapper").classList.toggle("menu-open");
    }
  }

  CLoseMenuTrigger() {
    if (typeof document !== "undefined") {
      document.querySelector(".header-wrapper").classList.remove("menu-open");
    }
  }

  stickyHeader() {
    var value = window.scrollY;
    if (typeof document !== "undefined") {
        if (value > 100) {
          document.querySelector(".header--fixed").classList.add("sticky");
        } else {
          document.querySelector(".header--fixed").classList.remove("sticky");
        }
      }
  }


  render() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.stickyHeader);
    }

    const { logo, color = "default-color" } = this.props;

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <Link to={this.props.homeLink}></Link>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <NavBar landing={this.props.landing} />
            </nav>
          </div>
          <div className="header-right">


            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                aria-hidden="true"
                onClick={this.menuTrigger}
                onKeyPress={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span
                aria-hidden="true"
                onClick={this.CLoseMenuTrigger}
                onKeyPress={this.menuTrigger}
                className="closeTrigger"
              >
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const NavBar = ({ landing }) => {
  if (landing) {
    return (
      <Scrollspy
        className="mainmenu"
        items={["home", "about", "portfolio", "contact"]}
        currentClassName="is-current"
        offset={-200}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Scrollspy>
    );
  }
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/#home">Home</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/#contact">Contact</Link>
      </li>
    </ul>
  );
};

export default HeaderThree;
