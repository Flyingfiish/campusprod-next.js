import React from "react";

class Button extends React.Component {
  render() {
    const boldStyle = {};
    if (this.props.fontWeight === "Bold") {
      boldStyle.fontWeight = "Bold";
    }
    boldStyle.color = "#fff";
    return (
      <div className="button" style={boldStyle}>
        <div className="button-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Button;
