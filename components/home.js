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
          className="video"></BackgroundVideo>

        <div className="wrapper">
          {this.getVideoCases()}
          <div className="showCases">
            <Link href="/portfolio">
              <a className="watch-all-cases">
                <p>Посмотреть все кейсы</p>
                <svg
                  style={{ marginTop: "5px", marginLeft: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 15.698 8.706"
                  version="1.1"
                  viewBox="0 0 15.698 8.706"
                  xmlSpace="preserve"
                  width="41"
                  height="20">
                  <path
                    fill="#000"
                    d="M11.354 0L10.646 0.706 13.786 3.853 0 3.853 0 4.853 13.786 4.853 10.646 8 11.354 8.706 15.698 4.353z"></path>
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
