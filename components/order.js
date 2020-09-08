import React from "react";
import Button from "./button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Modal } from "@material-ui/core";

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

let underlineColor = "#41B444";

const CssTextField = withStyles({
  root: {
    width: "100%",
    marginTop: "20px",
    "& label.Mui-focused": {
      color: "#CCCCCC",
    },
    "& label": {
      color: "#CCCCCC",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: underlineColor,
    },
  },
})(TextField);

/*function textField(fieldName, fieldNameRu) {
  return (
    <div className="text-field">
      <input
        type="text"
        name="text-field-label"
        id={fieldName}
        autoComplete="off"
        required
      ></input>
      <label for="text-field-label" className="text-field-label-name">
        <span className="text-field-content">{fieldNameRu}</span>
      </label>
    </div>
  );
}*/

class Order extends React.Component {
  state = {
    imageVideo: false,
    websiteDesign: false,
    packaging: false,
    interface: false,
    printedDesign: false,

    serverError: false,
    companyNameEmptyError: false,
    emailEmptyError: false,
    emailWrongFormatError: false,
    phoneEmptyError: false,
    phoneWrongFormatError: false,
    clientNameEmptyError: false,
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

  validateEmail(email) {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(email);
  }

  validatePhone(phone) {
    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return re.test(phone);
  }
  clearErrors() {
    this.setState({
      companyNameEmptyError: false,
      emailEmptyError: false,
      emailWrongFormatError: false,
      phoneEmptyError: false,
      phoneWrongFormatError: false,
      clientNameEmptyError: false,
      projectTypeEmptyError: false,
    });
  }

  handleMakeOrder() {
    this.setState({ serverError: false });
    this.setState({ requestSucceess: false });
    this.clearErrors();
    const companyName = document.getElementById("companyName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const clientName = document.getElementById("name").value;
    let projectTypes = [];
    types.forEach((item) => {
      if (this.state[item[0]]) projectTypes.push(item[1]);
    });
    let error = false;

    if (companyName === "") {
      this.setState({ companyNameEmptyError: true });
      error = true;
    }
    if (email === "") {
      this.setState({ emailEmptyError: true });
      error = true;
    }
    if (!this.validateEmail(email)) {
      this.setState({ emailWrongFormatError: true });
      error = true;
    }
    if (phone === "") {
      this.setState({ phoneEmptyError: true });
      error = true;
    }
    if (!this.validatePhone(phone)) {
      this.setState({ phoneWrongFormatError: true });
      error = true;
    }
    if (clientName === "") {
      this.setState({ clientNameEmptyError: true });
      error = true;
    }
    if (projectTypes.length === 0) {
      this.setState({
        projectTypeEmptyError: true,
      });
      error = true;
    }

    if (!error && !this.state.isSended) {
      let body = {
        companyName: companyName,
        email: email,
        phone: phone,
        clientName: clientName,
        projectTypes: projectTypes,
      };
      console.log(JSON.stringify(body));
      fetch("http://localhost:5000/sendemail", {
        method: "POST",
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (!res.ok) {
          this.setState({ serverError: true });
        } else {
          this.setState({ requestSucceess: true });
          this.setState({ isSended: true });
        }
      });
      this.handleModal();
    }
  }

  error = (text) => {
    return (
      <div
        style={{
          fontSize: "14px",
          color: "red",
          fontWeight: "lighter",
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
        <div key={index}
          className={
            this.state[item[0]]
              ? "order-type-button checked"
              : "order-type-button"
          }
          onClick={() => this.handleChangeType.call(this, item[0])}
        >
          <p>{item[1]}</p>
        </div>
      );
    });
    let result = <div></div>;
    if (this.state.requestSucceess) result = this.success();
    else if (this.state.serverError) result = this.serverError();
    return (
      <div className="wrapper order">
        <div className="order-content">
          <Modal
            open={false}
            children={result}
            isOpen={this.state.isModalOpen}
            onClose={() => this.handleModal()}
          ></Modal>
          <div className="leftColumn">
            <h1 className="blue">Оставить заявку</h1>
            <p>
              За 4 года было реализовано более 100 проектов: рекламные видео,
              музыкальные клипы, дизайны сайтов, оформление социальных сетей.
              Каждую задачу мы решаем осмысленно, и красиво. Для начала работы
              нам надо поговорить. Достаточно указать контакты, и мы свяжемся,
              чтобы все обсудить.
            </p>
            <p className="blue">
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
            <div className="input-fields">
              <CssTextField
                id="companyName"
                label="Название компании"
              ></CssTextField>
              {this.state.companyNameEmptyError
                ? this.error(errorTypes.companyNameEmpty)
                : null}
              <CssTextField id="email" label="Электронная почта"></CssTextField>
              {this.state.emailEmptyError
                ? this.error(errorTypes.emailEmpty)
                : null}
              {this.state.emailWrongFormatError
                ? this.error(errorTypes.emailWrongFormat)
                : null}
              <CssTextField
                id="phone"
                label="Телефон или любой удобный мессенджер"
              ></CssTextField>
              {this.state.phoneEmptyError
                ? this.error(errorTypes.phoneEmpty)
                : null}
              {this.state.phoneWrongFormatError
                ? this.error(errorTypes.phoneWrongFormat)
                : null}
              <CssTextField id="name" label="Имя"></CssTextField>
              {this.state.clientNameEmptyError
                ? this.error(errorTypes.clientNameEmpty)
                : null}
            </div>
            <div style={{ margin: "50px 0" }}>
              <div
                className="makeOrder"
                onClick={() => this.handleMakeOrder.call(this)}
              >
                <Button text="Оставить заявку" fontWeight="500"></Button>
              </div>
            </div>
            {serverError}
          </div>
          <div
            className="rightColumn company"
            style={{
              backgroundImage: "url(/sand.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <h1>CAMPUS</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
