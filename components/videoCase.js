import React from "react";
import Link from "next/link";
import Modal from "react-modal";
import VideoSelector from "./videoSelector";

class VideoCase extends React.Component {
  state = {
    isModalOpen: false,
  };

  /*video = (
    <div>
      <Player autoPlay src={this.props.data.url}>
        <ControlBar autoHide={true} className="my-class" />
        <LoadingSpinner />
        <BigPlayButton position="center" />
      </Player>
    </div>
  );*/

  video = (<VideoSelector links={this.props.data.videos}></VideoSelector>);

  description = () => {
    if (this.props.bottomPanel)
      return (
        <Link href="/portfolio/[id]" as={"/portfolio/" + this.props.data._id}>
          <a
            title="PortfolioItem"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="date">27 июля</p>
            <p className="name">{this.props.data.name}</p>
            {this.props.isDescription && (
              <p className="description videoCase-width">
                {this.props.data.description[0]}
              </p>
            )}
          </a>
        </Link>
      );
  };

  render() {
    const isMain = this.props.isMain;
    let button;
    if (isMain) {
      button = (
        <div className="watchCase" onClick={() => this.handleModal()}>
          <svg
            className="play-button"
            style={{ marginRight: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 67 67"
          >
            <g data-name="Group 60" transform="translate(-834 -891)">
              <path
                fill="#fff"
                d="M14 0l14 24H0z"
                data-name="Polygon 1"
                transform="rotate(90 -13.5 897.5)"
              ></path>
              <g
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                data-name="Ellipse 6"
                transform="translate(834 891)"
              >
                <circle cx="33.5" cy="33.5" r="33.5" stroke="none"></circle>
                <circle cx="33.5" cy="33.5" r="33"></circle>
              </g>
            </g>
          </svg>
          <p>Быстрый просмотр</p>
        </div>
      );
    } else {
      button = (
        <Link href="/portfolio/[id]" as={"/portfolio/" + this.props.data._id}>
          <a
            className="showCase"
            style={{ textDecoration: "none", color: "white" }}
            title="PortfolioItem"
          >
            <p>Посмотреть кейс</p>
            <svg
              className="play-button"
              style={{ marginTop: "3px", marginLeft: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 15.698 8.706"
              version="1.1"
              viewBox="0 0 15.698 8.706"
              xmlSpace="preserve"
              width="41"
              height="20"
            >
              <path
                fill="#ADADAD"
                d="M11.354 0L10.646 0.706 13.786 3.853 0 3.853 0 4.853 13.786 4.853 10.646 8 11.354 8.706 15.698 4.353z"
              ></path>
            </svg>
          </a>
        </Link>
      );
    }
    const photo = this.props.data.photos
      ? this.props.data.photos[0]
      : "https://www.tokkoro.com/picsup/2953277-digital-art-minimalism-simple-background-sun-circle-lines-orange___abstract-wallpapers.jpg";
    return (
      <div>
        <div className="videoCase videoCaseHover videoCase-width">
          <Modal
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              },
              content: {
                position: "absolute",
                zIndex: "9999",
                background: "#000",
                overflow: "hidden",
                WebkitOverflowScrolling: "touch",

                outline: "none",
                padding: "0",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0px 29px 114px 24px rgba(0, 0, 0, 0.75)",
              },
            }}
            className="react-modal"
            isOpen={this.state.isModalOpen}
            onRequestClose={() => this.handleModal()}
            onAfterClose={() => {
              let foo = document.querySelectorAll(".videoCase");
              for (let i = 0; i < foo.length; i++) {
                foo[i].classList.remove("pointer-events-none");
              }
            }}
            onAfterOpen={() => {
              let foo = document.querySelectorAll(".videoCase");
              for (let i = 0; i < foo.length; i++) {
                foo[i].classList.add("pointer-events-none");
              }
            }}
          >
            {this.video}
          </Modal>
          <img alt="videocase cover" src={photo}></img>
          <div className="videocaseContent">
            <div className="dark-thing"></div>
            <div className="videocase-buttons">
              <Link
                href="/portfolio/[id]"
                as={"/portfolio/" + this.props.data._id}
              >
                <a title="PortfolioItem" style={{ textDecoration: "none" }}>
                  <div className="videoCaseHead">
                    <h3>{this.props.data.name}</h3>
                    <p style={{ marginTop: "25px", color: "lightgray" }}>
                      {this.props.data.description[0]}
                    </p>
                  </div>
                </a>
              </Link>
              <div className="panel">{button}</div>
            </div>
          </div>
        </div>
        {this.description()}
      </div>
    );
  }

  handleModal() {
    if (this.state.isModalOpen === true) this.setState({ isModalOpen: false });
    else this.setState({ isModalOpen: true });
  }
}
/*<Modal
          children={this.video}
          isOpen={this.state.isModalOpen}
          onClose={() => this.handleModal()}
        />*/
export default VideoCase;
