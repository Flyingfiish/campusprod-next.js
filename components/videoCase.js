import React from "react";
import Link from "next/link";
import Modal from "react-modal";
import VideoSelector from "./videoSelector";
import { getTag } from "./../utils/getTag";

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
    if (this.props.bottomPanel) {
      const date = new Date(this.props.data.createdAt);
      return (
        <Link href="/portfolio/[id]" as={"/portfolio/" + this.props.data.id}>
          <a
            title="PortfolioItem"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="date">
              {date.toLocaleString("ru", { day: "numeric", month: "long" })}
            </p>
            <p className="name videoCase-width">{this.props.data.name}</p>
            <p
              className={
                !this.props.isDescription
                  ? "description videoCase-width hidden-desc"
                  : "description videoCase-width"
              }
              dangerouslySetInnerHTML={{
                __html: this.props.data.description[0],
              }}
            ></p>
          </a>
        </Link>
      );
    }
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
            width="67"
            height="67"
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
        <Link href="/portfolio/[id]" as={"/portfolio/" + this.props.data.id}>
          <a
            className="showCase"
            style={{ textDecoration: "none", color: "white" }}
            title="PortfolioItem"
          >
            <p>Посмотреть кейс</p>
            <svg
              className="play-button case-arrow"
              style={{ marginLeft: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="42.644"
              height="16.028"
              viewBox="0 0 42.644 16.028"
            >
              <g transform="translate(0 0.707)">
                <line
                  y2="10.334"
                  transform="translate(41.937 7.307) rotate(135)"
                  fill="rgba(0,0,0,0)"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <line
                  x2="10.334"
                  transform="translate(41.937 7.307) rotate(135)"
                  fill="rgba(0,0,0,0)"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  d="M-3918.708,1531h-41.259"
                  transform="translate(3959.967 -1523.692)"
                  fill="rgba(0,0,0,0)"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </g>
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
        <Link href="/portfolio/[id]" as={"/portfolio/" + this.props.data.id}>
            <a
              className="videoCase-link-mobile"
              title="PortfolioItem"
              style={{ textDecoration: "none" }}
            ></a>
          </Link>
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
                as={"/portfolio/" + this.props.data.id}
              >
                <a title="PortfolioItem" style={{ textDecoration: "none" }}>
                  <div className="videoCaseHead">
                    <h3>{this.props.data.name}</h3>
                    <p>
                      {this.props.data.types.map((tag, index) => {
                        if (index === 0) return getTag(tag);
                        else return ", " + getTag(tag);
                      })}
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
