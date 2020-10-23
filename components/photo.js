import React from "react";
import Modal from "./modal";

class Photo extends React.Component {
  state = {
    isModalOpen: false,
  };

  fullPhoto = (
    <img
      style={{ width: "100%", height: "100%", objectFit:'contain' }}
      src={this.props.url}
      alt="photoCase"></img>
  );

  render() {
    return (
      <div
        className="photo"
        onClick={() => this.handleModal()}>
        <img src={this.props.url} alt="portfolio-item-photo"></img>
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
