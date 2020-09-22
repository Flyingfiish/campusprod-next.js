import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <div className="contacts-head" >
          <h1>КОНТАКТЫ</h1>
          <img src="contactsback.jpg" alt="contactsback"></img>
        </div>

        <div className="contacts-info">
          <iframe className="contact-map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad74752ec1f00cab2744a536ce5da14d2430a2094f1b3919da0f74cca374ebe66&amp;source=constructor"
            width="533"
            height="533"
            frameBorder="0"
            title="maps"
          ></iframe>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Вконтакте</b>
                  <p className="contacts-links">
                    <a href="https://vk.com/campusprod">vk.com/campusprod</a>
                  </p>
                </td>
                <td>
                  <b>Написать E-mail</b>
                  <p>&#099;&#097;&#109;&#112;&#117;&#115;&#112;&#114;&#111;&#100;&#064;&#109;&#097;&#105;&#108;&#046;&#114;&#117;</p>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Написать в Viber</b>
                  <p>+7 982 672 45 55</p>
                </td>
                <td>
                  <b>Позвонить</b>
                  <p>+7 982 672 45 55</p>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Написать в телеграм</b>
                  <p>@grafika_vsgd</p>
                </td>
                <td>
                  <b>Instagram</b>
                  <p className="contacts-links">
                    <a href="https://instagram.com/campus_prod">
                      instagram.com/campus_prod
                    </a>
                  </p>
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
