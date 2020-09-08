import React from "react";
import Modal from "./modal";

class Photo extends React.Component {
  state = {
    isModalOpen: false,
  };

  fullPhoto = (
    <div>
      <img
        style={{ width: "100%", height: "auto" }}
        src={this.props.url}
        alt="photoCase"
      ></img>
    </div>
  );

  render() {
    return (
      <div
        className="photo"
        onClick={() => this.handleModal()}
        style={{
          paddingTop: this.props.paddingTop,
          background: "url('" + this.props.url + "')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Modal
          children={this.fullPhoto}
          isOpen={this.state.isModalOpen}
          onClose={() => this.handleModal()}
        />
      </div>
    );
  }

  handleModal() {
    if (this.state.isModalOpen === true) this.setState({ isModalOpen: false });
    else this.setState({ isModalOpen: true });
  }
}

export default Photo;
