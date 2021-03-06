import VideoCase from "./videoCase";

const types = [
  ["imageVideo", "Имиджевое видео"],
  ["websiteDesign", "Дизайн сайта"],
  ["printedDesign", "Печатный дизайн"],
  ["packaging", "Упаковка"],
  ["interface", "Интерфейс"],
  
];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: this.props.cases,
      loaded: this.props.loaded,
      found: this.props.found,
      foundedCases: this.props.cases,
    };
  }

  state = {
    imageVideo: false,
    websiteDesign: false,
    packaging: false,
    interface: false,
    printedDesign: false,
  };

  handleChangeType(type) {
    this.setState({
      [type]: !this.state[type],
    });
    setTimeout(() => {
      this.findVideoCases();
    }, 100);
  }

  findVideoCases() {
    this.setState({ loaded: false });
    let tags = [];
    types.forEach((item) => {
      if (this.state[item[0]]) {
        tags.push(item[0]);
      }
    });

    if (tags.length > 0) {
      const cases = this.state.cases;
      const foundedCases = cases.filter((videoCase) => {
        for (let i = 0; i < tags.length; i++) {
          if (videoCase.types.includes(tags[i])) return true;
        }
      });
      if (foundedCases.length > 0) {
        this.setState({
          foundedCases: foundedCases,
          loaded: true,
          found: true,
        });
      } else {
        this.setState({
          found: false,
        });
      }
    } else {
      this.setState({
        found: true,
        loaded: true,
        foundedCases: this.state.cases,
      });
    }
  }

  /*fuindVideoCases() {
    this.setState({ loaded: false });
    let tags = [];
    types.forEach((item) => {
      if (this.state[item[0]]) {
        tags.push(item[0]);
      }
    });
    let params = {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (tags.length > 0) {
      params["body"] = JSON.stringify({ tags: tags });
    }

    fetch("/api/findvideocases", params).then((res) => {
      if (res.ok) {
        res.text().then((result) => {
          const cases = JSON.parse(result);
          console.log(cases.length);
          if (cases.length > 0) {
            this.setState({ foundedCases: cases, loaded: true, found: true });
          } else {
            this.setState({
              found: false,
            });
          }
        });
      }
    });
  }*/

  getVideoCases() {
    if (this.state.loaded & this.state.found) {
      let videoCases = [];
      this.state.foundedCases.forEach((item, index) =>
        videoCases.push(
          <div
            key={index}
            className={index % 6 === 0 ? "main-videocase" : "little-videocase"}
          >
            <VideoCase
              bottomPanel={true}
              isDescription={index % 6 === 0 ? true : false}
              data={item}
            ></VideoCase>
          </div>
        )
      );
      return <div className="portfolio-content">{videoCases}</div>;
    } else if (!this.state.found) {
      return (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "50px" }}
        >
          <h2>Ничего не найдено</h2>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img src="loading.svg" alt="loading"></img>
        </div>
      );
    }
  }

  render() {
    let variants = types.map((item, index) => {
      return (
        <div
          key={index}
          className={
            this.state[item[0]]
              ? "order-type-button checked"
              : "order-type-button"
          }
          onClick={() => this.handleChangeType.call(this, item[0])}
        >
          <div className="order-type-button-hover"></div>
          <p>{item[1]}</p>
        </div>
      );
    });
    return (
      <div className="portfolio">
        <div className="portfolio-margin"></div>
        <div className="portfolio-head">
          <h1>Портфолио</h1>
          <p id="works-amount">532 работы</p>

          <div className="filter order-form">{variants}</div>
        </div>
        {this.getVideoCases()}
      </div>
    );
  }
}

export default Portfolio;
