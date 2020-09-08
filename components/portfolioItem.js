import React from "react";
import BackgroundVideo from "./backgroundVideo";
import Photo from "./photo";

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.cases,
      loaded: this.props.loaded,
    };
  }

  worker(data) {
    return (
      <div className="worker">
        <div className="role">{data.role}</div>
        <div className="person">{data.person}</div>
      </div>
    );
  }

  paragraphs(info) {
    let result = [];
    for (let i = 0; i < info.length; i++) {
      result.push(
        <p key={i} style={{ marginBottom: "10px" }}>
          {info[i]}
        </p>
      );
    }
    return result;
  }

  state = {
    loaded: false,
  };

  /*componentDidMount() {
    fetch("http://localhost:3000/api/getvideocases", {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: [this.props.id],
      }),
    }).then((res) => {
      if (res.ok) {
        res.text().then((result) => {
          this.setState({ info: JSON.parse(result)[0], loaded: true });
        });
      }
    });
  }*/

  getContent() {
    if (this.state.loaded) {
      const workersInfo = this.state.info.team.map((worker) => {
        return this.worker(worker);
      });
      return (
        <div>
          <BackgroundVideo
            isPortfolioItem={true}
            mainText={this.state.info.name}
            img={this.state.info.photos[0]}
            ids={this.state.info.videos}
          ></BackgroundVideo>
          <div className="portfolio-item-info">
            <div className="portfolio-item-description">
              {this.paragraphs(this.state.info.description)}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "530px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "auto",
              }}
            >
              {workersInfo}
            </div>
          </div>
          <div className="portfolio-item-photos">
            <div style={{ width: "1214px" }}>
              <Photo url={this.state.info.photos[0]}></Photo>
            </div>
          </div>
        </div>
      );
    } else {
      return <img src="loading.svg" alt="loading"></img>;
    }
  }

  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default PortfolioItem;
