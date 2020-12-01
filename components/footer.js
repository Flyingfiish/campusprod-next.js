import React from "react";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <h2>Присоединяйся!</h2>
          <div className="footer-mobile-column">
            <p>
              &#099;&#097;&#109;&#112;&#117;&#115;&#112;&#114;&#111;&#100;&#064;&#109;&#097;&#105;&#108;&#046;&#114;&#117;,
              контакты
            </p>
            <div className="social">
              <img src="/twitter.svg" alt="social"></img>
              <img src="/youtube.svg" alt="social"></img>
              <img src="/facebook.svg" alt="social"></img>
              <img src="/twitter.svg" alt="social"></img>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <p>© 2020 CAMPUS Production</p>
          <Link href="/privacyPolicy">
            <a>Политика конфиденциальности</a>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
