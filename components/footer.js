import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <p>&#099;&#097;&#109;&#112;&#117;&#115;&#112;&#114;&#111;&#100;&#064;&#109;&#097;&#105;&#108;&#046;&#114;&#117;, контакты</p>
          <div className="social">
            <img src="twitter.svg" alt="social"></img>
            <img src="youtube.svg" alt="social"></img>
            <img src="facebook.svg" alt="social"></img>
            <img src="twitter.svg" alt="social"></img>
          </div>
        </div>
        <div className="footer-line" style={{borderBottom:"1px solid white", width: '100%'}}></div>
        <div className="footer-bottom">
          <p>© 2020 CAMPUS Production</p>
          <p>Политика конфиденциальности</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
