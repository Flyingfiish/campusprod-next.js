import React from "react";
import Link from "./link";
import Button from "./button";
import { withRouter } from "next/router";
//import { withRouter } from "react-router-dom";

class Header extends React.Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (!isTop) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    //window.removeEventListener("scroll");
  }

  render() {
    let backgroundStyle = { background: "rgba(0, 0, 0, 0.75)" };
    let activeStyle = {};
    let logoStyle = { textDecoration: "none", color: "white" };
    if (this.props.router.pathname === "/portfolio") {
      backgroundStyle = { background: "rgba(0, 0, 0, 0)" };
      activeStyle = { color: "black" };
      logoStyle = { textDecoration: "none", color: "black" };
    }
    if (this.state.scrolled) {
      backgroundStyle = { background: "rgba(0, 0, 0, 1)" };
      activeStyle = { color: "white" };
      logoStyle = { textDecoration: "none", color: "white" };
    }
    console.log(activeStyle);
    return (
      <header
        style={backgroundStyle}
        className={this.state.scrolled ? "scrolled" : ""}
      >
        <div style={logoStyle} className="logo">
          <Link href="/">
            <a title="logo" style={logoStyle}>C A M P U S</a>
          </Link>
        </div>
        <nav>
          <Link activeClassName="active" href="/">
            <a title="Home" className="link">Главная</a>
          </Link>
          <Link   exact href="/portfolio">
            <a title="Portfolio" style={activeStyle} className="link">
              <p>Портфолио</p>
            </a>
          </Link>
          <Link activeClassName="active" exact href="/about">
            <a title="About" className="link">О нас</a>
          </Link>
          <Link activeClassName="active" exact href="/contacts">
            <a title="Contacts" className="link">Контакты</a>
          </Link>
        </nav>
        <div className="rightLinks">
          <Button text="Оставить заявку" fontWeight="Bold"></Button>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
