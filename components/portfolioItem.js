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

  worker(team) {
    const result = [];
    let row = [];
    for (let i = 0; i < team.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        result.push(<tr>{row}</tr>);
        row = [];
      }
      row.push(
        <td valign="top">
          <div className="worker">
            <div className="role">{team[i].role}</div>
            <div className="person">{team[i].person}</div>
          </div>
        </td>
      );
    }
    if (row.length > 0) {
      result.push(<tr>{row}</tr>);
    }
    return result;
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
      const workersInfo = this.worker(this.state.info.team);
      return (
        <div className="portfolio-item-container">
          <BackgroundVideo
            isPortfolioItem={true}
            mainText={this.state.info.name}
            img={this.state.info.photos[0]}
            ids={this.state.info.videos}></BackgroundVideo>
          <div className="portfolio-item-info">
            <div className="portfolio-item-description">
              {this.paragraphs(this.state.info.description)}
            </div>
            <div className="roles">
              <table>{workersInfo}</table>
            </div>
          </div>
          <div className="portfolio-item-photos">
            {this.state.info.photos.map((item, index) => {
              return <Photo url={item}></Photo>;
            })}
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
