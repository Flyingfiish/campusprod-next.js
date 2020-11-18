import React from "react";
import Modal from "react-modal";
import VideoSelector from "./videoSelector";

class BackgroundVideo extends React.Component {
  state = {
    isModalOpen: false,
  };

  kek() {
    console.log(this.state.player.paused);
  }

  componentDidMount() {
    // subscribe state change
    //this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    /*this.setState({
      player: state,
      currentTime: state.currentTime,
    });*/
  }

  handleModal() {
    if (this.state.isModalOpen === true) this.setState({ isModalOpen: false });
    else this.setState({ isModalOpen: true });
  }

  video = (<VideoSelector links={this.props.ids}></VideoSelector>);

  render() {
    let aboutText = "";
    if (this.props.isAbout) {
      aboutText =
        "Специалисты Campus Production – это молодые тигры, которые уже не раз показали своё чувство стиля и свою отдачу работе.";
    }
    let playButtonName = "Посмотреть reel";
    if (this.props.isPortfolioItem) {
      playButtonName = "Быстрый просмотр";
    }
    let playStop = "";
    if (!this.props.isAbout)
      playStop = (
        <div
          className="play-section"
          style={{
            marginBottom: "10%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => this.handleModal()}>
          <svg
            className="play-button"
            style={{ marginRight: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67">
            <g data-name="Group 60" transform="translate(-834 -891)">
              <path
                fill="#fff"
                d="M14 0l14 24H0z"
                data-name="Polygon 1"
                transform="rotate(90 -13.5 897.5)"></path>
              <g
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                data-name="Ellipse 6"
                transform="translate(834 891)">
                <circle cx="33.5" cy="33.5" r="33.5" stroke="none"></circle>
                <circle cx="33.5" cy="33.5" r="33"></circle>
              </g>
            </g>
          </svg>
          <p className="play-button-text">{playButtonName}</p>
        </div>
      );

    return (
      <div id="trailer" className="is_overlay" style={{}}>
        <img src={this.props.img} alt="background"></img>
        <div className="layout">
          {this.props.isMain && (
            <div className="main-container">
              <p>{this.props.secondaryText}</p>
              <h1 className="main-text">{this.props.mainText}</h1>
            </div>
          )}
          {!this.props.isMain && (
            <div className="main-container">
              <h1 className="main-text">{this.props.mainText}</h1>
              <p>{this.props.secondaryText}</p>
            </div>
          )}
          {playStop}
          <div className="about-text">{aboutText}</div>
          <svg
            className="scroll-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="30.413"
            height="15.913"
            viewBox="0 0 30.413 15.913">
            <g
              id="Group_64"
              data-name="Group 64"
              transform="translate(1729.398 -616.406) rotate(90)">
              <line
                id="Line_1"
                data-name="Line 1"
                y2="20.505"
                transform="translate(631.612 1714.191) rotate(135)"
                fill="rgba(0,0,0,0)"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <line
                id="Line_2"
                data-name="Line 2"
                x2="20.505"
                transform="translate(631.612 1714.191) rotate(135)"
                fill="rgba(0,0,0,0)"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
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
          }}>
          {this.video}
        </Modal>
      </div>
    );
  }

  /*
  <Player
          poster={Constants.background.poster}
          ref={(player) => {
            this.player = player;
          }}
          src={Constants.background.video}
          muted={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>

  play() {
    this.player.play();
    this.kek();
  }

  pause() {
    this.player.pause();
  }*/
}

export default BackgroundVideo;
