import React from "react";

const contactIcon = <div className="contact-icon"></div>;

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <div className="contacts-head">
          <h1>КОНТАКТЫ</h1>
          <img
            className="contacts-head-back-desktop"
            src="contactsback.jpg"
            alt="contactsback"
          ></img>
          <img
            className="contacts-head-back-mobile"
            src="contacts-head-back-mobile.jpg"
            alt="contactsback"
          ></img>
        </div>

        <div className="contacts-info">
          <iframe
            className="contact-map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad74752ec1f00cab2744a536ce5da14d2430a2094f1b3919da0f74cca374ebe66&amp;source=constructor"
            frameBorder="0"
            title="maps"
          ></iframe>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Вконтакте</b>
                    <p className="contacts-links">
                      <a href="https://vk.com/campusprod" target="_blank">vk.com/campusprod</a>
                    </p>
                  </div>
                </td>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Написать E-mail</b>
                    <p>
                      &#099;&#097;&#109;&#112;&#117;&#115;&#112;&#114;&#111;&#100;&#064;&#109;&#097;&#105;&#108;&#046;&#114;&#117;
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Написать в Viber</b>
                    <p>+7 982 672 45 55</p>
                  </div>
                </td>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Позвонить</b>
                    <p>+7 982 672 45 55</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Написать в телеграм</b>
                    <p className="contacts-links">
                      <a href="https://t.me/grafika_vsgd" target="_blank">
                        @grafika_vsgd
                      </a>
                    </p>
                  </div>
                </td>
                <td>
                  <div className="contacts-info-icons"></div>
                  <div className="contacts-info-strokes">
                    <b>Instagram</b>
                    <p className="contacts-links">
                      <a href="https://instagram.com/campus_prod" target="_blank">
                        instagram.com/campus_prod
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contacts;
