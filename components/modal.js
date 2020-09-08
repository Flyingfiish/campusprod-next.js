import React from "react";

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false) return null;

    return (
      <div className="ss" onClick={(e) => this.close(e)}>
        <div className="modal">
          {this.props.children}
        </div>
        
        
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default Modal;
