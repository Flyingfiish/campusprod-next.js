import React from "react";
import Button from "./button";
import { Modal } from "@material-ui/core";
import { withRouter } from "next/router";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import * as Yup from "yup";

const errorTypes = {
  companyNameEmpty: "Введите название вашей компании.",
  emailEmpty: "Введите E-Mail.",
  emailWrongFormat: "E-Mail должен быть в формате mail@mail.mail",
  phoneEmpty: "Введите номер телефона",
  phoneWrongFormat: "Некорректный формат номера телефона.",
  clientNameEmpty: "Введите Ваше имя.",
  projectTypeEmpty: "Выберите хотя бы один тип проекта.",
};

const types = [
  ["imageVideo", "Имиджевое видео"],
  ["websiteDesign", "Дизайн сайта"],
  ["packaging", "Упаковка"],
  ["interface", "Интерфейс"],
  ["printedDesign", "Печатный дизайн"],
];

const FormSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Слишком короткое.")
    .max(100, "Слишком длинное.")
    .required("Необходимо заполнить."),
  email: Yup.string()
    .max(100, "Слишком длинный.")
    .email("Неправильный формат e-mail.")
    .required("Необходимо заполнить."),
  phone: Yup.string()
    .max(15, "Слишком длинный.")
    .matches(
      /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/,
      "Неправильный формат номера."
    )
    .required("Необходимо заполнить."),
  clientName: Yup.string()
    .max(100, "Слишком длинное.")
    .required("Необходимо заполнить."),
});

class Order extends React.Component {
  state = {
    imageVideo: false,
    websiteDesign: false,
    packaging: false,
    interface: false,
    printedDesign: false,

    serverError: false,
    projectTypeEmptyError: false,
    requestSucceess: false,
    isModalOpen: false,

    isSended: false,
  };

  handleChangeType(type) {
    if (!this.state[type]) {
      let state = {};
      state[type] = true;
      this.setState(state);
    } else {
      let state = {};
      state[type] = false;
      this.setState(state);
    }
  }

  async handleMakeOrder() {
    this.setState({ serverError: false });
    this.setState({ requestSucceess: false });
    this.clearErrors();
    const companyName = document.getElementById("companyName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const clientName = document.getElementById("clientName").value;
    let projectTypes = [];
    types.forEach((item) => {
      if (this.state[item[0]]) projectTypes.push(item[1]);
    });
    let error = false;

    if (projectTypes.length === 0) {
      this.setState({
        projectTypeEmptyError: true,
      });
      error = true;
    }

    if (!error && !this.state.isSended) {
      const html =
        "Название компании: " +
        companyName +
        "<br>E-Mail: " +
        email +
        "<br>Телефон: " +
        phone +
        "<br>Имя клиента: " +
        clientName +
        "<br>Клиент хочет: " +
        projectTypes;
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        { subject: "Новый заказ", text: html },
        process.env.EMAILJS_USER_ID
      );

      if (!response.status === 200) {
        this.setState({ serverError: true });
      } else {
        this.setState({ requestSucceess: true });
        this.setState({ isSended: true });
        this.clearErrors();
      }
      this.handleModal();
    }
  }

  clearErrors() {
    this.setState({
      projectTypeEmptyError: false,
    });
  }

  error = (text) => {
    return (
      <div
        style={{
          fontSize: "14px",
          color: "#FE0202",
          fontWeight: "normal",
          marginTop: "10px",
        }}
      >
        {text}
      </div>
    );
  };

  success = () => {
    return <div>Ура))))</div>;
  };

  serverError = () => {
    return <div>Ошибка сервера, попробуйте другой способ.</div>;
  };

  handleModal() {
    if (this.state.isModalOpen === true) this.setState({ isModalOpen: false });
    else this.setState({ isModalOpen: true });
  }

  render() {
    //##########################################################################################################

    let serverError = "";
    if (this.state.serverError)
      serverError = (
        <div style={{ margin: "20px" }}>
          <b>Ошибка сервера, попробуйте другой способ.</b>
        </div>
      );
    else if (this.state.requestSucceess)
      serverError = (
        <div style={{ margin: "20px" }}>
          <b>Спасибо за Вашу заявку</b>
        </div>
      );
    else if (this.state.isSended)
      serverError = (
        <div style={{ margin: "20px" }}>
          <b>Вы уже отправили заявку.</b>
        </div>
      );

    let variants = types.map((item, index) => {
      return (
        <div
          key={index}
          className={
            this.state[item[0]]
              ? "order-type-button checked"
              : "order-type-button"
          }
          onClick={() => this.handleChangeType.call(this, item[0])}
        >
          <div className="order-type-button-hover"></div>
          <p>{item[1]}</p>
        </div>
      );
    });
    let result = <div></div>;
    if (this.state.requestSucceess) result = this.success();
    else if (this.state.serverError) result = this.serverError();
    let close = <div></div>;
    if (this.props.standAlone) {
      close = (
        <div className="order-close" onClick={() => this.props.router.back()}>
          <img src="close.svg"></img>
        </div>
      );
    }
    return (
      <div className="wrapper order">
        <div className="order-content">
          <Modal
            open={false}
            children={result}
            isOpen={this.state.isModalOpen}
            onClose={() => this.handleModal()}
          ></Modal>
          <div className="order-leftColumn">
            {close}
            <h2 className="blue-h">Оставить заявку</h2>
            <p className="order-description">
              За 4 года было реализовано более 100 проектов: рекламные видео,
              музыкальные клипы, дизайны сайтов, оформление социальных сетей.
              Каждую задачу мы решаем осмысленно, и красиво. Для начала работы
              нам надо поговорить. Достаточно указать контакты, и мы свяжемся,
              чтобы все обсудить.
            </p>
            <p className="blue order-description-2">
              Для начала работы нам надо поговорить. Достаточно указать
              контакты, и мы свяжемся, чтобы все обсудить.
            </p>
            <div className="order-form">
              <p>Новый проект:</p>
              {variants}
              {this.state.projectTypeEmptyError
                ? this.error(errorTypes.projectTypeEmpty)
                : null}
            </div>

            <Formik
              initialValues={{
                companyName: "",
                email: "",
                phone: "",
                clientName: "",
              }}
              validationSchema={FormSchema}
              onSubmit={() => this.handleMakeOrder.call(this)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className="input-fields">
                  <div className="input-data">
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyName}
                      required
                    ></input>
                    <div
                      className={
                        "underline" + true
                          ? " underline-error"
                          : " underline-correct"
                      }
                    ></div>
                    <label>Название компании</label>
                  </div>
                  <div className="error-text">
                    {errors.companyName &&
                      touched.companyName &&
                      errors.companyName}
                  </div>
                  <div className="input-data">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    ></input>
                    <div className="underline"> </div>
                    <label>Электронная почта</label>
                  </div>
                  <div className="error-text">
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="input-data">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      required
                    ></input>
                    <div className="underline"> </div>
                    <label>Телефон или любой удобный мессенджер</label>
                  </div>
                  <div className="error-text">
                    {errors.phone && touched.phone && errors.phone}
                  </div>
                  <div className="input-data">
                    <input
                      id="clientName"
                      name="clientName"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.clientName}
                      required
                    ></input>
                    <div className="underline"> </div>
                    <label>Имя</label>
                  </div>
                  <div className="error-text">
                    {errors.clientName &&
                      touched.clientName &&
                      errors.clientName}
                  </div>
                  <div className="makeOrder" onClick={handleSubmit}>
                    <Button text="Оставить заявку" fontWeight="500"></Button>
                  </div>
                  {serverError}
                </form>
              )}
            </Formik>
          </div>
          <div
            className="company"
            style={{
              backgroundImage: "url(/sand.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <b>CAMPUS</b>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Order);
