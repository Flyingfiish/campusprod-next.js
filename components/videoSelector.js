import React from "react";
import Video from "./video";

class VideoSelector extends React.Component {
  state = {
    links: [],
    current: 0,
  };

  classNames = [];

  controls = () => {
    if (this.props.links.length > 1) {
      return (
        <div className="controls">
          <div
            className="controls-arrow left-arrow disabled"
            onClick={this.leftVideo.bind(this)}
          >
            {this.arrow}
            <p>Предыдущее видео</p>
          </div>
          <div
            className="controls-arrow right-arrow"
            onClick={this.rightVideo.bind(this)}
          >
            <p>Следующее видео</p>
            {this.arrow}
          </div>
        </div>
      );
    }
  };

  arrow = (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width="30"
    >
      <g>
        <g>
          <path
            id="arrow"
            fill="#fff"
            d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792
     H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083
     c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z
     "
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );

  hideOrShowVideos(current) {
    for (let i = 0; i < this.state.links.length; i++) {
      if (i === current) {
        this.classNames[i] = "";
      } else this.classNames[i] = "video-unselected";
    }
  }

  setDisabled(className) {
    const elements = document.getElementsByClassName(className);
    elements[0].classList.add("disabled");
  }

  setEnabled(className) {
    const elements = document.getElementsByClassName(className);
    elements[0].classList.remove("disabled");
  }

  leftVideo() {
    let current = this.state.current;
    if (current > 0) {
      current--;
      this.setState({
        current: current,
        currentLink: this.state.links[current],
      });
      this.hideOrShowVideos(current);
      this.stopVideos(current);
      if (current === 0) {
        this.setDisabled("left-arrow");
      }
      if (current === this.state.links.length - 2) {
        this.setEnabled("right-arrow");
      }
    }
  }

  rightVideo() {
    let current = this.state.current;
    if (current < this.state.links.length - 1) {
      current++;

      this.setState({
        current: current,
        currentLink: this.state.links[current],
      });
      this.hideOrShowVideos(current);
      this.stopVideos(current);
      if (current === this.state.links.length - 1) {
        this.setDisabled("right-arrow");
      }
      if (current === 1) {
        this.setEnabled("left-arrow");
      }
    }
  }

  stopVideos(current) {
    let iframes = document.getElementsByClassName("youtube");
    for (let i = 0; i < iframes.length; i++) {
      if (i !== current) {
        iframes[i].setAttribute("src", "");
      } else {
        iframes[i].setAttribute("src", this.state.links[current]);
      }
    }
  }

  componentWillMount() {
    this.setClassNames();
    this.setState({
      links: this.props.links,
      current: 0,
    });
  }

  setClassNames() {
    for (let i = 0; i < this.props.links.length; i++) {
      if (i === 0) {
        this.classNames.push("");
      } else this.classNames.push("video-unselected");
    }
  }

  videos = () => {
    let videos = [];
    for (let i = 0; i < this.props.links.length; i++) {
      videos.push(
        <div className={this.classNames[i]}>
          <Video
            className={this.classNames[i]}
            id={this.props.links[i]}
          ></Video>
        </div>
      );
    }
    return videos;
  };

  render() {
    return (
      <div>
        {this.videos()}
        {this.controls()}
      </div>
    );
  }
}

export default VideoSelector;
