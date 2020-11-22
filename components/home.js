import React from "react";
import BackgroundVideo from "./backgroundVideo";
import VideoCase from "./videoCase";
import Order from "./order";
import Link from "next/link";

class Home extends React.Component {
  state = {
    cases: [],
    loaded: false,
  };

  getVideoCases() {
    if (this.props.loaded)
      return (
        <div className="content">
          <div className="top-videoCase">
            <VideoCase data={this.props.cases[0]} isMain={true}></VideoCase>
          </div>
          <div className="leftColumn">
            <div className="left-column-first-videoCase">
              <VideoCase data={this.props.cases[1]} isMain={false}></VideoCase>
            </div>
            <div className="standart-video-case">
              <VideoCase data={this.props.cases[2]} isMain={false}></VideoCase>
            </div>
            <div className="standart-video-case">
              <VideoCase data={this.props.cases[3]} isMain={false}></VideoCase>
            </div>
          </div>
          <div className="rightColumn">
            <div className="right-column-first-videoCase">
              <VideoCase data={this.props.cases[4]} isMain={false}></VideoCase>
            </div>
            <div className="right-column-second-videoCase">
              <VideoCase data={this.props.cases[0]} isMain={false}></VideoCase>
            </div>
            <div className="standart-video-case">
              <VideoCase data={this.props.cases[0]} isMain={false}></VideoCase>
            </div>
          </div>
        </div>
      );
    else {
      return <img src="loading.svg" alt="loading"></img>;
    }
  }

  render() {
    return (
      <div className="home">
        <BackgroundVideo
          isMain={true}
          img="main.jpg"
          ids={["https://www.youtube.com/embed/Dpslkx3X7k0"]}
          mainText="Сделай красиво ежжи!"
          secondaryText="Выполнили 454 проектов"
          className="video"
        ></BackgroundVideo>

        <div className="wrapper">
          {this.getVideoCases()}
          <div className="showCases">
            <Link href="/portfolio">
              <a className="watch-all-cases">
                <p>Посмотреть все кейсы</p>
                <svg
                  style={{ marginLeft: "01.51vw" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="43.145"
                  height="16.028"
                  viewBox="0 0 43.145 16.028"
                >
                  <g transform="translate(0.5 0.707)">
                    <line
                      y2="10.334"
                      transform="translate(41.937 7.307) rotate(135)"
                      fill="rgba(0,0,0,0)"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <line
                      x2="10.334"
                      transform="translate(41.937 7.307) rotate(135)"
                      fill="rgba(0,0,0,0)"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <path
                      d="M-3918.03,1531h-41.937"
                      transform="translate(3959.967 -1523.692)"
                      fill="rgba(0,0,0,0)"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                  </g>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <Order></Order>
      </div>
    );
  }
}

export default Home;
