import React from "react";

class Button extends React.Component {
  render() {
    const boldStyle = {};
    if (this.props.fontWeight === "Bold") {
      boldStyle.fontWeight = "Bold";
    }
    if (this.props.isSended) {
      boldStyle.backgroundColor = "#4eca52";
    } else {
      boldStyle.backgroundColor = "#003cff";
    }
    boldStyle.color = "#fff";
    return (
      <div className="button" style={boldStyle}>
        <div className="button-text">
          {!this.props.isLoading && !this.props.isSended && (
            <div>{this.props.text}</div>
          )}
          {this.props.isLoading && (
            <div className="button-loading">
              <img src="order-loading.svg"></img>
              <div>Отправка</div>
            </div>
          )}
          {this.props.isSended && (
            <div className="button-sended">Отправлено!</div>
          )}
        </div>
      </div>
    );
  }
}

export default Button;
