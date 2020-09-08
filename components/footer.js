import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <p>сampus@yandex.ru, контакты</p>
          <div className="social">
            <img src="twitter.svg" alt="social"></img>
            <img src="youtube.svg" alt="social"></img>
            <img src="facebook.svg" alt="social"></img>
            <img src="twitter.svg" alt="social"></img>
          </div>
        </div>
        <div style={{borderBottom:"1px solid white", width: '100%'}}></div>
        <div className="footer-bottom">
          <p>© CAMPUS Production</p>
          <p>Политика конфиденциальности</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
